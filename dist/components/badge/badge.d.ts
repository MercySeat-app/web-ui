import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const badgeVariants: (props?: {
    variant?: "default-filled" | "default-outline" | "primary-filled" | "primary-outline" | "error-filled" | "error-outline" | "warning-filled" | "warning-outline" | "success-filled" | "success-outline";
    size?: "sm" | "md";
} & import('class-variance-authority/types').ClassProp) => string;
declare function Badge({ className, variant, size, ...props }: ComponentProps<"span"> & VariantProps<typeof badgeVariants>): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };
//# sourceMappingURL=badge.d.ts.map