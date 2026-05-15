import { ComponentProps } from 'react';
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
export declare function TimePicker({ value, onChange, minTime, maxTime, options, placeholder, className, disabled, id, name, "aria-invalid": ariaInvalidProp, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, }: TimePickerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=timepicker.d.ts.map