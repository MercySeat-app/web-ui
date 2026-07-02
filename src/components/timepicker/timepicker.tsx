"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentProps,
  type KeyboardEvent,
} from "react";
import { ClockIcon } from "lucide-react";

import { cn } from "../../lib/utils";

/**
 * Props for {@link TimePicker}.
 */
export type TimePickerProps = {
  /**
   * The currently selected time as a **24-hour** `HH:mm` string (e.g. `"14:30"`),
   * or `undefined` when nothing is selected. The field renders an empty input
   * while `undefined`.
   */
  value?: string;
  /**
   * Called whenever the typed input parses into a valid time, or when the
   * field is cleared. Always emits the **24-hour** `HH:mm` representation
   * (e.g. `"14:30"`) regardless of how the user typed it (`"2:30 PM"`, `"14:30"`,
   * `"02:30 pm"` all emit `"14:30"`). Emits an empty string when the field is
   * cleared.
   */
  onChange: (date: string) => void;
  /**
   * Optional lower bound as a **24-hour** `HH:mm` string. When `value` parses
   * to a time earlier than `minTime`, the field is marked `aria-invalid` and
   * the destructive border tokens apply. If the string is not a valid 24-hour
   * time it is ignored.
   */
  minTime?: string;
  /**
   * Optional upper bound as a **24-hour** `HH:mm` string. When `value` parses
   * to a time later than `maxTime`, the field is marked `aria-invalid`. If
   * the string is not a valid 24-hour time it is ignored.
   */
  maxTime?: string;
  /**
   * Optional list of preset times as **24-hour** `HH:mm` strings. When
   * provided, the field behaves as a typeahead combobox: focusing the input
   * opens a listbox of options, typing filters by case-insensitive
   * `startsWith` against either the 12-hour or 24-hour form of each option,
   * and options outside `[minTime, maxTime]` are hidden.
   */
  options?: string[];
  /**
   * Placeholder text rendered when the field is empty.
   */
  placeholder?: string;
  /**
   * Additional CSS classes merged into the input element.
   */
  className?: string;
  /**
   * Disables the input so it cannot be typed into or focused.
   */
  disabled?: boolean;
  /**
   * DOM id applied to the input. Pair with an external `<label htmlFor>` for
   * the most accessible form pattern.
   */
  id?: string;
  /**
   * Form field name forwarded to the underlying `<input>`.
   */
  name?: string;
  /**
   * Override the automatic invalid state. When omitted, the field is
   * `aria-invalid` whenever `value` falls outside `[minTime, maxTime]`.
   * Explicit `true` / `false` always wins over the computed state.
   */
  "aria-invalid"?: ComponentProps<"input">["aria-invalid"];
  /**
   * Accessible name when no `<label htmlFor>` is associated with the input.
   */
  "aria-label"?: string;
  /**
   * IDs of element(s) that label the input.
   */
  "aria-labelledby"?: string;
  /**
   * IDs of element(s) that describe the input (e.g. helper or error text).
   * Useful for surfacing the validation message produced when the value is
   * outside the `[minTime, maxTime]` range.
   */
  "aria-describedby"?: string;
};

const TIME_24H_RE = /^\s*(\d{1,2}):(\d{2})\s*$/;
const TIME_12H_RE = /^\s*(\d{1,2}):(\d{2})\s*(AM|PM)\s*$/i;

type ParsedTime = { hours: number; minutes: number };

/** Parse a strict 24-hour `HH:mm` string. Returns `null` when out of range. */
function parseTime24(input: string): ParsedTime | null {
  const m = TIME_24H_RE.exec(input);
  if (!m) return null;
  const hours = Number(m[1]);
  const minutes = Number(m[2]);
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;
  return { hours, minutes };
}

/** Parse a strict 12-hour `h:mm AM/PM` string. Returns `null` when out of range. */
function parseTime12(input: string): ParsedTime | null {
  const m = TIME_12H_RE.exec(input);
  if (!m) return null;
  let hours = Number(m[1]);
  const minutes = Number(m[2]);
  if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) return null;
  const meridiem = m[3].toUpperCase();
  if (meridiem === "AM") hours = hours === 12 ? 0 : hours;
  else hours = hours === 12 ? 12 : hours + 12;
  return { hours, minutes };
}

/** Parse either a 24-hour or a 12-hour time string. */
function parseTime(input: string): ParsedTime | null {
  return parseTime24(input) ?? parseTime12(input);
}

/** Format hours+minutes as a 24-hour `HH:mm` string. */
function format24({ hours, minutes }: ParsedTime): string {
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

/** Format hours+minutes as a 12-hour `hh:mm AM/PM` string. */
function format12({ hours, minutes }: ParsedTime): string {
  const meridiem = hours >= 12 ? "PM" : "AM";
  const h12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${String(h12).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${meridiem}`;
}

function toMinutes(t: ParsedTime): number {
  return t.hours * 60 + t.minutes;
}

/**
 * Mask raw keyboard input into the picker's allowed shape:
 * - keeps only digits, `:`, whitespace, and `A`/`P`/`M` (case-insensitive);
 * - caps the digit count at 4 (so `"11111"` collapses to `"11:11"`);
 * - auto-inserts `:` after the second digit when the user did not type one
 *   themselves, so `"2222"` becomes `"22:22"`;
 * - preserves a colon the user typed earlier in the sequence (so typing
 *   `"1:30"` stays `"1:30"` instead of being re-anchored to position 2);
 * - normalises AM/PM to uppercase and ensures a single space separates the
 *   time and the meridiem.
 */
function maskInput(raw: string): string {
  let digits = "";
  let colonAt = -1; // index inside `digits` where the user-typed colon sits.
  let meridiem = "";
  let sawAmPmChar = false;
  let trailingSpace = false;

  for (const ch of raw.toUpperCase()) {
    if (ch >= "0" && ch <= "9") {
      if (sawAmPmChar) continue;
      if (digits.length < 4) digits += ch;
      continue;
    }
    if (ch === ":") {
      if (colonAt === -1 && digits.length > 0 && digits.length < 4) {
        colonAt = digits.length;
      }
      continue;
    }
    if (ch === "A" || ch === "P") {
      if (!meridiem) meridiem = ch;
      sawAmPmChar = true;
      trailingSpace = false;
      continue;
    }
    if (ch === "M") {
      if (meridiem === "A" || meridiem === "P") meridiem += "M";
      sawAmPmChar = true;
      trailingSpace = false;
      continue;
    }
    if (ch === " ") {
      if (digits.length > 0 && !meridiem) trailingSpace = true;
    }
  }

  let timePart = "";
  if (digits.length > 0) {
    const splitAt = colonAt !== -1 ? colonAt : digits.length > 2 ? 2 : -1;
    timePart =
      splitAt === -1 ? digits : `${digits.slice(0, splitAt)}:${digits.slice(splitAt)}`;
  }

  if (meridiem) return timePart ? `${timePart} ${meridiem}` : meridiem;
  if (trailingSpace) return `${timePart} `;
  return timePart;
}

/**
 * A 12-hour `hh:mm AM/PM` time field with a custom input — built from
 * scratch (no `<input type="time">`) to avoid browser-specific behaviour and
 * to display a consistent 12-hour value while still emitting 24-hour strings.
 *
 * ## Behaviour
 *
 * - Accepts only digits, `:`, whitespace, and the letters `A`/`P`/`M` while
 *   typing (case-insensitive). Other characters are silently dropped.
 * - **Auto-masks** the input: the colon is inserted automatically after the
 *   second digit, so typing `"2222"` produces `"22:22"`. A 5th digit is
 *   rejected (`"11111"` collapses to `"11:11"`). The user can still type
 *   their own colon earlier (`"1:30"` is preserved as-is).
 * - Parses both 24-hour (`"14:30"`) and 12-hour (`"2:30 PM"`) input formats.
 *   `onChange` is fired with the 24-hour form (`"14:30"`) as soon as the
 *   typed value parses to a valid time.
 * - When the field loses focus (or when `value` changes externally while the
 *   field is unfocused), the display is normalised to the 12-hour form
 *   (`"02:30 PM"`). The 24-hour string remains the source of truth on the
 *   `onChange` side.
 * - When `options` are provided, the input becomes an `aria-autocomplete="list"`
 *   combobox. Arrow keys navigate the listbox, `Enter` selects, `Escape`
 *   closes it. Out-of-range options are hidden.
 *
 * ## Validation
 *
 * `minTime` / `maxTime` are 24-hour strings. When `value` falls outside the
 * range, the field is automatically `aria-invalid` (and the destructive
 * border tokens apply). Pair with `aria-describedby` to announce a custom
 * error message. Invalid `minTime` / `maxTime` strings are ignored — they
 * silently impose no constraint.
 *
 * ## Accessibility
 *
 * - The input is a real `<input type="text">`, fully reachable by keyboard.
 *   `inputMode="text"` so mobile keyboards expose letters for AM/PM.
 * - When `options` is set, ARIA combobox attributes (`role="combobox"`,
 *   `aria-expanded`, `aria-controls`, `aria-activedescendant`,
 *   `aria-autocomplete="list"`) are wired automatically.
 * - Always label the field via `<label htmlFor>` + `id`, or pass `aria-label`
 *   / `aria-labelledby`.
 * - To surface the validation error to screen readers, render an element
 *   with the error message and reference it via `aria-describedby`.
 *
 * @example Basic usage
 * ```tsx
 * const [time, setTime] = useState<string>();
 * <TimePicker value={time} onChange={setTime} placeholder="hh:mm AM/PM" />
 * ```
 *
 * @example With typeahead options
 * ```tsx
 * <TimePicker
 *   value={time}
 *   onChange={setTime}
 *   options={["09:00", "09:30", "10:00", "10:30"]}
 * />
 * ```
 *
 * @example Restricted range with an error message
 * ```tsx
 * <label htmlFor="meeting-time">Meeting time</label>
 * <TimePicker
 *   id="meeting-time"
 *   value={time}
 *   onChange={setTime}
 *   minTime="09:00"
 *   maxTime="17:00"
 *   aria-describedby="meeting-time-error"
 * />
 * <p id="meeting-time-error">Pick a time between 9 AM and 5 PM.</p>
 * ```
 */
export function TimePicker({
  value,
  onChange,
  minTime,
  maxTime,
  options,
  placeholder = "",
  className,
  disabled,
  id,
  name,
  "aria-invalid": ariaInvalidProp,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
}: TimePickerProps) {
  // `typedValue` holds the user's in-progress raw input. `null` means
  // "no edit in progress — derive the display from the `value` prop". This
  // lets us reflect external `value` changes during render without an effect.
  const [typedValue, setTypedValue] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxAutoId = useId();
  const listboxId = `timepicker-listbox-${listboxAutoId}`;

  const hasOptions = !!options && options.length > 0;

  // Derived display: typed input wins while editing; otherwise format `value`.
  const displayValue = useMemo(() => {
    if (typedValue !== null) return typedValue;
    if (!value) return "";
    const p = parseTime24(value);
    return p ? format12(p) : "";
  }, [typedValue, value]);

  const computedInvalid = useMemo(() => {
    if (!value) return false;
    const p = parseTime24(value);
    if (!p) return false;
    const v = toMinutes(p);
    if (minTime) {
      const m = parseTime24(minTime);
      if (m && v < toMinutes(m)) return true;
    }
    if (maxTime) {
      const m = parseTime24(maxTime);
      if (m && v > toMinutes(m)) return true;
    }
    return false;
  }, [value, minTime, maxTime]);

  const filteredOptions = useMemo(() => {
    if (!hasOptions) return [];
    const min = minTime ? parseTime24(minTime) : null;
    const max = maxTime ? parseTime24(maxTime) : null;
    const typed = displayValue.toUpperCase().trim();
    return options!.filter((opt24) => {
      const p = parseTime24(opt24);
      if (!p) return false;
      if (min && toMinutes(p) < toMinutes(min)) return false;
      if (max && toMinutes(p) > toMinutes(max)) return false;
      if (!typed) return true;
      const opt12 = format12(p);
      return opt12.startsWith(typed) || opt24.startsWith(typed);
    });
  }, [hasOptions, options, displayValue, minTime, maxTime]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const masked = maskInput(event.target.value);
    setTypedValue(masked);
    setActiveIndex(-1);
    if (hasOptions) setOpen(true);

    if (masked.trim() === "") {
      onChange("");
      return;
    }
    const parsed = parseTime(masked);
    if (parsed) onChange(format24(parsed));
  }

  function handleFocus() {
    if (hasOptions) setOpen(true);
  }

  function handleBlur() {
    // Reset the typed buffer so the display falls back to the formatted
    // `value` prop. The 12-hour display is recomputed during the next render.
    setTypedValue(null);
    setOpen(false);
    setActiveIndex(-1);
  }

  function pickOption(opt24: string) {
    // `opt24` always comes from `filteredOptions`, which only contains
    // strings that already parsed cleanly via `parseTime24`.
    const p = parseTime24(opt24)!;
    // Set typedValue optimistically so the display updates even if the
    // parent doesn't propagate the new value back through props.
    setTypedValue(format12(p));
    onChange(format24(p));
    setOpen(false);
    setActiveIndex(-1);
    inputRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!hasOptions) return;

    if (!open) {
      if (event.key === "ArrowDown") {
        setOpen(true);
        setActiveIndex(0);
        event.preventDefault();
      }
      return;
    }

    if (event.key === "ArrowDown") {
      setActiveIndex((i) => (filteredOptions.length === 0 ? -1 : (i + 1) % filteredOptions.length));
      event.preventDefault();
    } else if (event.key === "ArrowUp") {
      setActiveIndex((i) =>
        filteredOptions.length === 0
          ? -1
          : i <= 0
            ? filteredOptions.length - 1
            : i - 1,
      );
      event.preventDefault();
    } else if (event.key === "Enter") {
      if (activeIndex >= 0 && activeIndex < filteredOptions.length) {
        pickOption(filteredOptions[activeIndex]);
        event.preventDefault();
      }
    } else if (event.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  // Scroll the active option into view when navigating with the keyboard.
  useEffect(() => {
    if (activeIndex < 0) return;
    const el = document.querySelector<HTMLElement>(
      `[data-timepicker-option][data-listbox-id="${listboxId}"][data-index="${activeIndex}"]`,
    );
    el?.scrollIntoView?.({ block: "nearest" });
  }, [activeIndex, listboxId]);

  const ariaInvalid =
    ariaInvalidProp !== undefined ? ariaInvalidProp : computedInvalid || undefined;
  const activeOptionId =
    activeIndex >= 0 && activeIndex < filteredOptions.length
      ? `${listboxId}-${activeIndex}`
      : undefined;

  return (
    <div className="relative w-full">
      <ClockIcon
        aria-hidden
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-300"
      />
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="text"
        inputMode="text"
        autoComplete="off"
        spellCheck={false}
        data-slot="timepicker-input"
        data-empty={!value}
        role={hasOptions ? "combobox" : undefined}
        aria-autocomplete={hasOptions ? "list" : undefined}
        aria-controls={hasOptions ? listboxId : undefined}
        aria-expanded={hasOptions ? open : undefined}
        aria-activedescendant={activeOptionId}
        aria-invalid={ariaInvalid}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        disabled={disabled}
        placeholder={placeholder}
        value={displayValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={cn(
          "border border-gray-200 h-10 w-full min-w-0 rounded-sm bg-transparent pl-3 pr-9 text-base font-manrope transition-[color,box-shadow]",
          "outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "hover:border-blue-hepatica-700 focus-visible:border-2 focus-visible:border-blue-hepatica-600",
          "focus-visible:shadow-button focus-visible:ring-0 focus-visible:bg-blue-hepatica-50",
          "aria-invalid:border-bright-red-600 aria-invalid:focus-visible:border-bright-red-600",
          className,
        )}
      />
      {hasOptions && open && filteredOptions.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          data-slot="timepicker-listbox"
          className="absolute left-0 right-0 z-50 mt-1 max-h-60 overflow-y-auto rounded-sm border border-gray-200 bg-white py-1 shadow-dropdown"
        >
          {filteredOptions.map((opt24, idx) => {
            // `filteredOptions` has already validated every entry via
            // `parseTime24`, so this re-parse is guaranteed to succeed.
            const opt12 = format12(parseTime24(opt24)!);
            const active = idx === activeIndex;
            return (
              <li
                key={opt24}
                id={`${listboxId}-${idx}`}
                role="option"
                aria-selected={active}
                data-timepicker-option
                data-listbox-id={listboxId}
                data-index={idx}
                data-active={active}
                onMouseDown={(event) => {
                  // Keep focus on the input rather than blurring to the option.
                  event.preventDefault();
                  pickOption(opt24);
                }}
                onMouseEnter={() => setActiveIndex(idx)}
                className={cn(
                  "cursor-pointer px-3 py-1.5 text-sm hover:bg-blue-hepatica-50",
                  active && "bg-blue-hepatica-50",
                )}
              >
                {opt12}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
