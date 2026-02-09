"use client";

import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * Props for a single Step inside a Stepper.
 */
type StepProps = {
  /**
   * Zero-based index of he step in the step list.
   * Displayed as `index + 1`.
   */
  index: number;

  /**
   * Text label shown under the step indicator.
   */
  label: string;

  /**
   * True when this step is the current step.
   */
  current: boolean;

  /**
   * True when this step is completed (past the current step).
   */
  completed: boolean;

  /**
   * True when this step is disabled and should not be clickable.
   */
  disabled?: boolean;

  /**
   * Click handler provided by the Stepper.
   * Will only be called if the step is not current and not disabled.
   */
  onClick: () => void;
};

/**
 * Step renders a single step indicator (number or check icon) and label.
 *
 * - Uses `aria-current="step"` when current
 * - Completed steps show a check icon
 * - Disabled steps are not clickable
 * - Clicking the current step does nothing
 */
export function Step({
  index,
  label,
  current,
  completed,
  disabled = false,
  onClick,
}: StepProps) {
  return (
    <li className="flex flex-col justify-start items-center gap-4 w-fit px-4 bg-gray-25 relative">
      <button
        type="button"
        data-slot="step"
        data-current={current}
        disabled={disabled}
        aria-current={current ? "step" : undefined}
        onClick={() => {
          if (current || disabled) return;
          onClick();
        }}
        className={cn(
          "w-8 h-8 rounded-full flex justify-center items-center",
          "border border-gray-50 bg-gray-25",
          {
            "bg-blue-hepatica-600 text-white border-none hover:bg-blue-hepatica-700":
              current || completed,
            "cursor-not-allowed": disabled,
          }
        )}
      >
        {completed && !current ? (
          <Check className="size-4 text-white" aria-hidden="true" />
        ) : (
          <span
            className={cn("font-semibold text-sm text-gray-300", {
              "text-white": current,
            })}
          >
            {index + 1}
          </span>
        )}
      </button>
      <span
        className={cn(
          "whitespace-nowrap text-sm font-semibold leading-4 text-gray-300 text-center",
          {
            "text-gray-900": current,
          }
        )}
      >
        {label}
      </span>
    </li>
  );
}
