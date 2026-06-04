import { ComponentProps } from 'react';
export interface PasswordInputProps extends Omit<ComponentProps<"input">, "type"> {
    visible?: boolean;
    onVisibilityChange?: (visible: boolean) => void;
}
export declare function PasswordInput({ className, visible: controlledVisible, onVisibilityChange, ...props }: PasswordInputProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=password-input.d.ts.map