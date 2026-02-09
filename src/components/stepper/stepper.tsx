"use client";

import { cn } from "../../lib/utils";
import { Step } from "./step";

/**
 * A single step in a Stepper.
 */
export type StepItem = {
  /**
   * Unique identifier for the step
   * Used for equality checks against `currentId` and passed to `onStepChange`.
   */
  id: string;

  /**
   * Text label displayed under the step indicator.
   */
  label: string;

  /**
   * When true, the step is not clickable.
   */
  disabled?: boolean;
};

/**
 * Props for the Stepper component.
 */
export type StepperProps = {
  /**
   * List of steps to render.
   * The order of this array is the order displayed in the UI.
   */
  steps: StepItem[];

  /**
   * The id of the current step (1 source of truth for "active" styling)
   */
  currentId: string;

  /**
   * Called when the user clicks a step that is NOT current and NOT disabled.
   */
  onStepChange: (id: string) => void;

  /**
   * Optional wrapper className
   */
  className?: string;
};

/**
 * Stepper renders a horizontal list of steps for multi-step flows.
 *
 * - Displays step number + label
 * - Completed steps show a check icon
 * - Current step is highlighted (`aria-current="step"`)
 * - Disabled steps cannot be clicked
 * - Clicking the current step is a no-op
 *
 * Note: navigation/routing is handled by the parent via `onStepChange`.
 */
export function Stepper({
  steps,
  currentId,
  onStepChange,
  className,
}: StepperProps) {
  const currentIndex = steps.findIndex((step) => step.id === currentId);

  return (
    <nav
      aria-label="Steps"
      data-slot="steps"
      className={cn("w-full", className)}
    >
      <ol className="flex items-center justify-between gap-2 relative">
        <span className="absolute border-b border-b-gray-50 top-1/2 left-0 right-0"></span>
        {steps.map((step, index) => {
          const completed = currentIndex !== -1 && index < currentIndex;

          return (
            <Step
              key={step.id}
              current={step.id === currentId}
              completed={completed}
              disabled={step.disabled}
              index={index}
              label={step.label}
              onClick={() => onStepChange(step.id)}
            />
          );
        })}
      </ol>
    </nav>
  );
}
