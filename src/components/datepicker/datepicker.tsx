"use client";

import { useState, type ComponentProps } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { cn } from "../../lib/utils";

/**
 * Props for {@link DatePicker}.
 */
export type DatePickerProps = {
  /**
   * The currently selected date, or `undefined` if no date is selected.
   * When `undefined`, the trigger displays the {@link DatePickerProps.placeholder}.
   */
  value: Date | undefined;
  /**
   * Called when the user selects a new date in the calendar, or clears the
   * selection. The new value is `undefined` when no date is selected.
   */
  onChange: (date: Date | undefined) => void;
  /**
   * Placeholder text rendered inside the trigger when {@link DatePickerProps.value}
   * is `undefined`. Plays the same role as a native `<input>` placeholder, so
   * keep it short and treat it as a hint, not as the field's label.
   */
  placeholder?: string;
  /**
   * `date-fns` format token applied to {@link DatePickerProps.value} when
   * rendering the trigger label.
   *
   * @default "PPP"
   * @see https://date-fns.org/docs/format
   */
  dateFormat?: string;
  /**
   * Additional CSS classes merged into the trigger button.
   */
  className?: string;
  /**
   * Disables the trigger. The popover cannot be opened while disabled.
   */
  disabled?: boolean;
  /**
   * Marks the field as invalid. Forwarded as `aria-invalid` to the trigger so
   * screen readers announce the error state and the destructive border tokens
   * apply.
   */
  "aria-invalid"?: ComponentProps<"button">["aria-invalid"];
  /**
   * Accessible name for the trigger when no surrounding `<label htmlFor>` is
   * available. Prefer associating an external `<label>` via {@link DatePickerProps.id};
   * use `aria-label` only when a visible label is not feasible.
   */
  "aria-label"?: string;
  /**
   * IDs of element(s) that label the trigger (e.g. an external `<label>` or
   * a heading). Use when the field is described by a visible element that
   * isn't a `<label htmlFor>`.
   */
  "aria-labelledby"?: string;
  /**
   * IDs of element(s) that describe the trigger (e.g. helper text or error
   * messages). Useful for surfacing validation errors to screen readers.
   */
  "aria-describedby"?: string;
  /**
   * DOM id applied to the trigger button. Pair with an external `<label htmlFor={id}>`
   * for the most accessible form pattern.
   */
  id?: string;
  /**
   * Form field name. Note: the trigger is a `<button>`, so it does not submit
   * a value by itself — pair this with a hidden input if you need form
   * submission, or rely on a form library (react-hook-form, Formik) to wire
   * `value`/`onChange` directly.
   */
  name?: string;
};

/**
 * A single-date picker that composes {@link Popover} and {@link Calendar}.
 *
 * The trigger renders a button styled like a MercySeat `<Input>`, showing the
 * formatted selected date (or the placeholder) plus a calendar icon. Clicking
 * the trigger opens a popover containing a `Calendar` in single-date mode; the
 * popover closes automatically once the user selects a date.
 *
 * ## Accessibility
 *
 * - The trigger is a real `<button type="button">`, so it is reachable via
 *   keyboard and exposes the right role to assistive tech. It does not submit
 *   the enclosing form when activated.
 * - The popover is rendered by Radix with `role="dialog"` and traps focus
 *   while open. Pressing **Esc**, clicking outside, or selecting a date all
 *   restore focus to the trigger.
 * - **Label the field.** Either wrap the picker in a `<label>`, or set an
 *   {@link DatePickerProps.id} and pair it with `<label htmlFor>`, or pass
 *   {@link DatePickerProps."aria-label"} / {@link DatePickerProps."aria-labelledby"}.
 * - When the field is invalid, set {@link DatePickerProps."aria-invalid"} to
 *   `true` and reference the error message with
 *   {@link DatePickerProps."aria-describedby"} so screen readers announce it.
 * - The calendar grid inside the popover supports arrow-key navigation,
 *   `PageUp`/`PageDown` for month changes, and `Home`/`End` for week
 *   boundaries (provided by `react-day-picker`).
 *
 * ## Form integration
 *
 * Because the trigger is a button, the picker is fully controlled — wire
 * `value`/`onChange` to your form state (`useState`, `react-hook-form`, etc.).
 * To submit a value with a native `<form>`, render a hidden `<input>` next to
 * the picker.
 *
 * @example Basic usage
 * ```tsx
 * const [date, setDate] = useState<Date | undefined>();
 * <DatePicker value={date} onChange={setDate} placeholder="Pick a date" />
 * ```
 *
 * @example Labeled, with validation
 * ```tsx
 * <label htmlFor="dob">Date of birth</label>
 * <DatePicker
 *   id="dob"
 *   value={date}
 *   onChange={setDate}
 *   aria-invalid={!!error}
 *   aria-describedby={error ? "dob-error" : undefined}
 * />
 * {error && <p id="dob-error">{error}</p>}
 * ```
 */
export function DatePicker({
  value,
  onChange,
  placeholder = "",
  dateFormat = "PPP",
  className = "",
  disabled,
  id,
  name,
  "aria-invalid": ariaInvalid,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          data-slot="datepicker-trigger"
          data-empty={!value}
          id={id}
          name={name}
          disabled={disabled}
          aria-invalid={ariaInvalid}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          className={cn(
            "flex w-full h-10 min-w-0 items-center justify-between border border-gray-200 rounded-sm bg-transparent",
            "px-3 text-base font-manrope outline-none disabled:pointer-events-none",
            "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "hover:border-blue-hepatica-700 focus-visible:border-2",
            "focus-visible:shadow-button focus-visible:ring-0 focus-visible:bg-blue-hepatica-50",
            "focus-visible:border-blue-hepatica-600 data-[empty=true]:text-muted-foreground",
            "aria-invalid:border-bright-red-600 aria-invalid:focus-visible:border-bright-red-600",
            className,
          )}
        >
          {value ? (
            <span>{format(value, dateFormat)}</span>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <CalendarIcon className="size-4 shrink-0" aria-hidden />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          defaultMonth={value}
          onSelect={(date) => {
            onChange(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
