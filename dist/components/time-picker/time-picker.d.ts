/** Props for the {@link TimePicker} component. */
export interface TimePickerProps {
    /**
     * The currently selected time as a 24-hour `HH:mm` string (e.g. `"14:30"`),
     * or an empty string when no time has been selected.
     */
    value: string;
    /**
     * Callback fired when the user selects a time slot.
     * Receives the selected time as a 24-hour `HH:mm` string.
     */
    onChange: (value: string) => void;
    /**
     * Optional `data-testid` attribute forwarded to the root element,
     * useful for targeting the component in tests.
     */
    "data-testid"?: string;
}
/**
 * A Safari-compatible time picker that presents a scrollable list of
 * 15-minute time slots inside a Radix UI Popover.
 *
 * Follows the same shadcn/ui composition pattern as the `DatePicker`:
 * `Popover` → `PopoverTrigger` → `PopoverContent`.
 *
 * The popover is rendered via a Portal so the dropdown always escapes any
 * `overflow-hidden` ancestor (such as the `Section` component).
 *
 * @example
 * ```tsx
 * const [time, setTime] = useState("");
 *
 * <TimePicker value={time} onChange={setTime} />
 * ```
 */
export declare function TimePicker({ value, onChange, "data-testid": testId, }: TimePickerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=time-picker.d.ts.map