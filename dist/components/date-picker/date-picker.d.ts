/** Props for the {@link DatePicker} component. */
export interface DatePickerProps {
    /**
     * The currently selected date as a `YYYY-MM-DD` string (e.g. `"2026-05-15"`),
     * or an empty string when no date has been chosen.
     */
    value: string;
    /**
     * Callback fired when the user selects a date.
     * Receives the selected date formatted as `YYYY-MM-DD`.
     */
    onChange: (value: string) => void;
    /**
     * Optional `data-testid` attribute forwarded to the root element,
     * useful for targeting the component in tests.
     */
    "data-testid"?: string;
}
/**
 * A Safari-compatible date picker that renders a custom month-grid calendar
 * in a `position: fixed` overlay.
 *
 * - Past dates are disabled and cannot be selected.
 * - Today is highlighted in blue.
 * - The calendar jumps to the selected month when re-opened.
 * - Keyboard `Escape` and click-outside both close the calendar.
 * - The popup escapes any `overflow-hidden` ancestor via fixed positioning.
 *
 * @example
 * ```tsx
 * const [date, setDate] = useState("");
 *
 * <DatePicker value={date} onChange={setDate} />
 * ```
 */
export declare function DatePicker({ value, onChange, "data-testid": testId, }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=date-picker.d.ts.map