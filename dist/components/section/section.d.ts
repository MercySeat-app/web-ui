import { ComponentProps, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const sectionVariants: (props?: {
    elevation?: "elevation-0" | "elevation-1" | "elevation-2" | "elevation-3" | "elevation-4" | "elevation-5" | "elevation-6" | "elevation-7" | "elevation-8";
} & import('class-variance-authority/types').ClassProp) => string;
type SectionProps = ComponentProps<"section"> & VariantProps<typeof sectionVariants> & {
    children: ReactNode;
    title?: string;
    footer?: ReactNode;
};
export declare function Section({ title, children, footer, elevation, className, ...props }: SectionProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=section.d.ts.map