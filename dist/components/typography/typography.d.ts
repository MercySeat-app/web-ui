import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
export declare const typographyVariants: (props?: {
    variant?: "caption" | "heading-1" | "heading-2" | "heading-3" | "heading-4" | "heading-5" | "heading-6" | "body-lg" | "body-md" | "body-sm" | "overline";
} & import('class-variance-authority/types').ClassProp) => string;
export type TypographyProps<TTag extends ElementType = "p"> = {
    as?: TTag;
    children: ReactNode;
} & VariantProps<typeof typographyVariants> & Omit<ComponentPropsWithoutRef<TTag>, "as" | "children">;
export declare function Typography<TTag extends ElementType = "p">(props: TypographyProps<TTag>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=typography.d.ts.map