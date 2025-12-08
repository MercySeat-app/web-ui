import type {
  ComponentPropsWithoutRef,
  ElementType,
  JSX,
  ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const typographyVariants = cva("font-sans text-gray-900", {
  variants: {
    variant: {
      "heading-1":
        // 40px / 48px
        "font-semibold text-[2.5rem] leading-[3rem]",
      "heading-2":
        // 32px / 36px
        "font-bold text-[2rem] leading-[2.25rem]",
      "heading-3":
        // 24px / 28px
        "font-bold text-[1.5rem] leading-[1.75rem]",
      "heading-4":
        // 20px / 24px
        "font-semibold text-[1.25rem] leading-[1.5rem]",
      "heading-5":
        // 16px / 20px
        "font-semibold text-[1rem] leading-[1.25rem]",
      "heading-6":
        // 14px / 16px
        "font-semibold text-[0.875rem] leading-[1rem]",

      "body-lg":
        // 18px, lh 1.5, letter-spacing 0.15px
        "font-normal text-[1.125rem] leading-[1.5] tracking-[0.009375rem]",
      "body-md":
        // 16px, lh 1.5, letter-spacing 0.15px
        "font-normal text-[1rem] leading-[1.5] tracking-[0.009375rem]",
      "body-sm":
        // 14px, lh 1.5, letter-spacing 0.15px
        "font-normal text-[0.875rem] leading-[1.5] tracking-[0.009375rem]",

      caption:
        // 12px, lh 1.66, letter-spacing 0.4px
        "font-normal text-[0.75rem] leading-[1.66] tracking-[0.025rem]",
      overline:
        // 12px, lh 2.66, letter-spacing 1px, uppercase
        "font-normal text-[0.75rem] leading-[2.66] tracking-[0.0625rem] uppercase",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>;

type DefaultTag = keyof JSX.IntrinsicElements;

const defaultTagByVariant: Record<TypographyVariant, DefaultTag> = {
  "heading-1": "h1",
  "heading-2": "h2",
  "heading-3": "h3",
  "heading-4": "h4",
  "heading-5": "h5",
  "heading-6": "h6",
  "body-lg": "p",
  "body-md": "p",
  "body-sm": "p",
  caption: "span",
  overline: "span",
};

export type TypographyProps<TTag extends ElementType = "p"> = {
  as?: TTag;
  children: ReactNode;
} & VariantProps<typeof typographyVariants> &
  Omit<ComponentPropsWithoutRef<TTag>, "as" | "children">;

export function Typography<TTag extends ElementType = "p">(
  props: TypographyProps<TTag>
) {
  const { as, variant, className, children, ...rest } = props;

  const resolvedVariant = (variant ?? "body-md") as TypographyVariant;

  const Component = (as ?? defaultTagByVariant[resolvedVariant]) as ElementType;

  return (
    <Component
      className={cn(
        typographyVariants({ variant: resolvedVariant }),
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
