import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
/**
 * Generates class names for Badge variants and sizes.
 */
declare const badgeVariants: (props?: {
    variant?: "default-filled" | "default-outline" | "primary-filled" | "primary-outline" | "error-filled" | "error-outline" | "warning-filled" | "warning-outline" | "success-filled" | "success-outline" | "media-filled" | "media-outline";
    size?: "sm" | "md";
} & import('class-variance-authority/types').ClassProp) => string;
/**
 * Badge component for compact status labels.
 */
declare function Badge({ className, variant, size, ...props }: ComponentProps<"span"> & VariantProps<typeof badgeVariants>): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };
//# sourceMappingURL=badge.d.ts.map