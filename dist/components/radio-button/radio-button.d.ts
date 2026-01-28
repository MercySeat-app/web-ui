import { ReactNode } from 'react';
export type RadioButtonProps = {
    checked: boolean;
    onChange: (arg: string) => void;
    value: string;
    children: ReactNode;
    name: string;
    disabled?: boolean;
};
export declare function RadioButton({ checked, children, name, onChange, value, disabled, }: RadioButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=radio-button.d.ts.map