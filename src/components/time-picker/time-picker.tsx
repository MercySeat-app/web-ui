"use client";

/**
 * @file time-picker.tsx
 * @description Safari-compatible time picker that combines a free-text input
 * with a 15-minute-slot dropdown, following the shadcn/ui composition pattern
 * (`Popover` → `PopoverAnchor` → `PopoverTrigger` → `PopoverContent`).
 *
 * **Why not `<input type="time">`?**
 * Safari (iOS and macOS) does not support the native `<input type="time">`
 * element. This component replaces it with a text input (for free typing) plus
 * a slot-list popover (for quick selection).
 *
 * **Input + picker hybrid UX**
 * - The text field accepts any reasonable time string (`"2:30 PM"`, `"14:30"`,
 *   `"9am"`, `"930"`, etc.) and normalises it to `HH:mm` on blur.
 * - The chevron button opens a scrollable list of 15-minute slots so the user
 *   can pick quickly without typing.
 * - Both interactions call the same `onChange(HH:mm)` callback.
 *
 * **Overflow escape strategy**
 * The popup is rendered via a Radix Portal so it always escapes any
 * `overflow-hidden` ancestor (e.g. the `Section` component's `cva` base class).
 */

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { ClockIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Time slot data
// ---------------------------------------------------------------------------

/** A single selectable time slot (15-minute interval). */
interface TimeSlot {
  /** 24-hour value string, e.g. `"14:30"`. */
  value: string;
  /** Human-readable 12-hour label, e.g. `"2:30 PM"`. */
  label: string;
}

/**
 * Pre-built array of 96 time slots covering a full 24-hour day in
 * 15-minute increments (00:00 → 23:45).
 */
const TIME_SLOTS: TimeSlot[] = Array.from({ length: 96 }, (_, i) => {
  const totalMinutes = i * 15;
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  const value = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  const period = h < 12 ? "AM" : "PM";
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  const label = `${hour12}:${String(m).padStart(2, "0")} ${period}`;
  return { value, label };
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Converts a 24-hour `HH:mm` string to a 12-hour display string.
 *
 * @param value - A 24-hour time string (`"14:30"`) or an empty string.
 * @returns A formatted 12-hour string (`"2:30 PM"`) or `""` when `value` is empty.
 *
 * @example
 * formatDisplay("09:00"); // → "9:00 AM"
 * formatDisplay("13:45"); // → "1:45 PM"
 * formatDisplay("");      // → ""
 */
function formatDisplay(value: string): string {
  if (!value) return "";
  const [hStr, mStr] = value.split(":");
  const h = Number(hStr);
  const m = Number(mStr);
  const period = h < 12 ? "AM" : "PM";
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

/**
 * Rounds a `HH:mm` value to the nearest 15-minute slot for highlight purposes.
 * Clamps the result to the last available slot (`23:45`).
 *
 * @param value - A 24-hour time string or `""`.
 * @returns The nearest slot value string, e.g. `"14:30"`, or `""` when empty.
 */
function nearestSlotValue(value: string): string {
  if (!value) return "";
  const [hStr, mStr] = value.split(":");
  const totalMinutes = Number(hStr) * 60 + Number(mStr);
  const rounded = Math.round(totalMinutes / 15) * 15;
  const clamped = Math.min(rounded, 23 * 60 + 45);
  const h = Math.floor(clamped / 60);
  const m = clamped % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

/**
 * Parses a free-text time string typed by the user into a normalised
 * 24-hour `HH:mm` string.
 *
 * Supported input formats (case-insensitive):
 * - `"2:30 PM"` / `"2:30PM"` → `"14:30"`
 * - `"14:30"` → `"14:30"`
 * - `"9am"` / `"9 AM"` → `"09:00"`
 * - `"930"` → `"09:30"`
 * - `"9"` → `"09:00"`
 * - `""` → `""` (clears the value)
 *
 * @param input - Raw string as typed by the user.
 * @returns A normalised `HH:mm` string, `""` for empty input, or `null` when
 *   the input cannot be parsed.
 */
export function parseTimeInput(input: string): string | null {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return "";

  // 24-hour: "14:30" or "9:05"
  const match24 = trimmed.match(/^(\d{1,2}):(\d{2})$/);
  if (match24) {
    const h = parseInt(match24[1], 10);
    const m = parseInt(match24[2], 10);
    if (h >= 0 && h <= 23 && m >= 0 && m <= 59)
      return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    return null;
  }

  // 12-hour with AM/PM: "2:30 PM", "2:30pm", "2pm", "2 PM"
  const match12 = trimmed.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/);
  if (match12) {
    let h = parseInt(match12[1], 10);
    const m = match12[2] ? parseInt(match12[2], 10) : 0;
    const period = match12[3];
    if (h < 1 || h > 12 || m < 0 || m > 59) return null;
    if (period === "am") h = h === 12 ? 0 : h;
    else h = h === 12 ? 12 : h + 12;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  }

  // Compact digits: "930" → 9:30, "1430" → 14:30
  const matchCompact = trimmed.match(/^(\d{3,4})$/);
  if (matchCompact) {
    const digits = matchCompact[1];
    const h = parseInt(digits.slice(0, digits.length - 2), 10);
    const m = parseInt(digits.slice(-2), 10);
    if (h >= 0 && h <= 23 && m >= 0 && m <= 59)
      return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    return null;
  }

  // Bare hour: "9" → "09:00", "14" → "14:00"
  const matchHour = trimmed.match(/^(\d{1,2})$/);
  if (matchHour) {
    const h = parseInt(matchHour[1], 10);
    if (h >= 0 && h <= 23)
      return `${String(h).padStart(2, "0")}:00`;
    return null;
  }

  return null;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/** Props for the {@link TimePicker} component. */
export interface TimePickerProps {
  /**
   * The currently selected time as a 24-hour `HH:mm` string (e.g. `"14:30"`),
   * or an empty string when no time has been selected.
   */
  value: string;
  /**
   * Callback fired when the user selects a time slot or successfully parses a
   * typed time on blur.
   * Receives the selected time as a 24-hour `HH:mm` string, or `""` to clear.
   */
  onChange: (value: string) => void;
  /**
   * Optional `data-testid` attribute forwarded to the root wrapper element,
   * useful for targeting the component in tests.
   */
  "data-testid"?: string;
}

/**
 * A Safari-compatible time picker combining a free-text input with a
 * scrollable 15-minute slot dropdown.
 *
 * The text field accepts flexible time strings (`"2:30 PM"`, `"14:30"`,
 * `"9am"`, `"930"`) and normalises them to `HH:mm` on blur. The chevron
 * button opens a Radix Popover with pre-built slots for quick selection.
 * Both interactions call the same `onChange` callback.
 *
 * The popover is rendered via a Portal so it escapes `overflow-hidden`
 * ancestors (e.g. the `Section` component).
 *
 * @example
 * ```tsx
 * const [time, setTime] = useState("");
 *
 * <TimePicker value={time} onChange={setTime} />
 * ```
 */
export function TimePicker({
  value,
  onChange,
  "data-testid": testId,
}: TimePickerProps) {
  const [open, setOpen] = React.useState(false);
  // inputText is the raw string shown in the text field; synced from value
  // only when the field is not focused to avoid interrupting mid-type edits.
  const [inputText, setInputText] = React.useState(() => formatDisplay(value));
  const [isFocused, setIsFocused] = React.useState(false);
  const selectedItemRef = React.useRef<HTMLButtonElement>(null);

  // Sync the display text whenever the controlled value changes externally
  // (e.g. parent resets the field) but only when the input is not focused.
  React.useEffect(() => {
    if (!isFocused) setInputText(formatDisplay(value));
  }, [value, isFocused]);

  /** Scroll the active slot into view each time the dropdown opens. */
  React.useEffect(() => {
    if (open && selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView?.({ block: "center" });
    }
  }, [open]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleFocus = () => setIsFocused(true);

  /**
   * On blur, attempt to parse whatever the user typed.
   * - Valid input → normalise, call `onChange`, format display text.
   * - Empty input → call `onChange("")` to clear.
   * - Unparseable input → silently revert to the last valid formatted value.
   */
  const handleBlur = () => {
    setIsFocused(false);
    const parsed = parseTimeInput(inputText);
    if (parsed !== null) {
      onChange(parsed);
      setInputText(formatDisplay(parsed));
    } else {
      setInputText(formatDisplay(value));
    }
  };

  const activeSlot = nearestSlotValue(value);

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      {/*
       * PopoverAnchor wraps the entire input group so the dropdown is
       * positioned relative to it, while only the chevron is the trigger.
       */}
      <PopoverPrimitive.Anchor asChild>
        <div
          data-testid={testId}
          className={cn(
            "flex h-10 w-full items-center rounded-md border border-gray-200 bg-white px-3 text-sm",
            "transition-shadow focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500",
          )}
        >
          <ClockIcon className="size-4 shrink-0 text-gray-400" />
          <input
            type="text"
            value={inputText}
            placeholder="e.g. 2:30 PM"
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="flex-1 bg-transparent px-2 text-gray-900 placeholder:text-gray-400 outline-none"
            aria-label="Time"
          />
          <PopoverPrimitive.Trigger asChild>
            <button
              type="button"
              aria-label="Open time picker"
              className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {open ? (
                <ChevronUpIcon className="size-4" />
              ) : (
                <ChevronDownIcon className="size-4" />
              )}
            </button>
          </PopoverPrimitive.Trigger>
        </div>
      </PopoverPrimitive.Anchor>

      {/*
       * Portal renders outside any overflow-hidden ancestor.
       * Radix DismissableLayer handles Escape and pointer-outside dismissal.
       */}
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={4}
          className={cn(
            "z-50 max-h-56 w-[var(--radix-popover-anchor-width)]",
            "overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          )}
        >
          {TIME_SLOTS.map((slot) => {
            const isActive = slot.value === activeSlot && !!value;
            return (
              <button
                key={slot.value}
                ref={isActive ? selectedItemRef : undefined}
                type="button"
                onMouseDown={(e) => {
                  // Prevent the input from losing focus (and triggering blur
                  // validation) when the user clicks a slot.
                  e.preventDefault();
                }}
                onClick={() => {
                  onChange(slot.value);
                  setInputText(slot.label);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center px-4 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-gray-700 hover:bg-gray-50",
                )}
              >
                {slot.label}
              </button>
            );
          })}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
