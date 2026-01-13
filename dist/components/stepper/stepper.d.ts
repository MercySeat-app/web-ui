/**
 * A single step in a Stepper
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
 * Props for the Stepper component
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
 * Stepper renders a horizontal list of steps for the multi-step flows.
 *
 * - Displays step number + label
 * - Current step is highlighted (`aria-current="step"`)
 * - Disabled steps cannot be clicked
 * - Clicking the current step is a no-op
 *
 * Note: navigation/routing is handled by the parent via `onStepChange`.
 */
export declare function Stepper({ steps, currentId, onStepChange, className, }: StepperProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=stepper.d.ts.map