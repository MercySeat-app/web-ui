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
export declare function Step({ index, label, current, completed, disabled, onClick, }: StepProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=step.d.ts.map