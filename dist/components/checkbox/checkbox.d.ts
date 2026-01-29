import { ComponentProps } from 'react';
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
export declare function Checkbox({ className, checked, disabled, name, value, onChange, ...props }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=checkbox.d.ts.map