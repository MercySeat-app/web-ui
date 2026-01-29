import { type ComponentProps } from "react";
import { cn } from "../../lib/utils";
import { Check } from "lucide-react";

export type CheckboxProps = Omit<ComponentProps<"input">, "type" | "checked" | "onChange"> & {
  /**
   * Whether the checkbox is checked.
   * This component is controlled: `checked` drives the visual state.
   */
  checked: boolean;

  /**
   * Called when the user toggles the checkbox.
   */
  onChange?: (checked: boolean) => void;

  /**
   * Disable interactions.
   */
  disabled?: boolean;

  /**
   * A label for screen readers when there is no visible text label.
   * Strongly recommended if you render the checkbox without adjacent text.
   */
  "aria-label"?: string;
};

/**
 * Checkbox (controlled)
 *
 * - Uses a visually hidden native `<input type="checkbox">` for correct semantics
 * - Supports keyboard interaction (Tab/Space)
 * - Uses `label` for an easy hit target
 *
 * Accessibility notes:
 * - If there is no visible text label next to the checkbox, pass `aria-label`
 */
export function Checkbox({
  className,
  checked,
  disabled = false,
  name,
  value,
  onChange,
  ...props
}: CheckboxProps) {
  // Ensure a stable id even when value is missing
  const id = `${name ?? "checkbox"}-${String(value ?? "value")}`;

  return (
    <label
      htmlFor={id}
      data-slot="checkbox-label"
      className={cn(
        "inline-flex size-9.5 items-center justify-center rounded-full",
        "bg-transparent transition-colors duration-200",
        "hover:bg-blue-hepatica-100 focus-within:bg-gray-100",
        {
          "cursor-not-allowed": disabled,
        },
      )}
    >
      <div
        data-slot="checkbox-box"
        aria-hidden="true"
        className={cn(
          "size-4 rounded-xs transition-all duration-200 flex items-center justify-center",
          {
            "border-2 border-gray-600": !checked && !disabled,
            "bg-blue-hepatica-600": checked && !disabled,
            "border-2 border-gray-200": !checked && disabled,
            "bg-gray-200": checked && disabled,
          },
          className,
        )}
      >
        <Check
          className={cn("size-3 text-transparent", {
            "text-white": checked,
          })}
        />
      </div>
      <input
        id={id}
        type="checkbox"
        data-slot="checkbox"
        className="sr-only"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        {...props}
      />
    </label>
  );
}
