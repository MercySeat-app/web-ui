import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const buttonVariants: (props?: {
    variant?: "blue-hepatica-solid" | "blue-hepatica-outline" | "blue-hepatica-ghost" | "gray-solid" | "gray-outline" | "gray-ghost" | "bright-red-solid" | "bright-red-outline" | "bright-red-ghost";
    size?: "sm" | "md" | "lg" | "icon";
} & import('class-variance-authority/types').ClassProp) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };
//# sourceMappingURL=button.d.ts.map