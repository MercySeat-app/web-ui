import { LabelHTMLAttributes } from 'react';
export interface LabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "required"> {
    required?: boolean;
}
declare const Label: import('react').ForwardRefExoticComponent<LabelProps & import('react').RefAttributes<HTMLLabelElement>>;
export { Label };
//# sourceMappingURL=label.d.ts.map