import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const sectionVariants = cva(
  "bg-white rounded-2xl overflow-hidden flex flex-col w-full",
  {
    variants: {
      elevation: {
        "elevation-0": "shadow-none",
        "elevation-1":
          "shadow-[0px_1px_1px_rgba(0,0,0,0.14),0px_2px_1px_-1px_rgba(0,0,0,0.2)]",
        "elevation-2":
          "shadow-[0px_2px_2px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)]",
        "elevation-3":
          "shadow-[0px_3px_4px_rgba(0,0,0,0.14),0px_3px_3px_-2px_rgba(0,0,0,0.2)]",
        "elevation-4":
          "shadow-[0px_4px_5px_rgba(0,0,0,0.14),0px_2px_4px_-1px_rgba(0,0,0,0.2)]",
        "elevation-5":
          "shadow-[0px_5px_8px_rgba(0,0,0,0.14),0px_3px_5px_-1px_rgba(0,0,0,0.2)]",
        "elevation-6":
          "shadow-[0px_6px_10px_rgba(0,0,0,0.14),0px_3px_5px_-1px_rgba(0,0,0,0.2)]",
        "elevation-7":
          "shadow-[0px_7px_10px_1px_rgba(0,0,0,0.14),0px_4px_5px_-2px_rgba(0,0,0,0.2)]",
        "elevation-8":
          "shadow-[0px_8px_10px_1px_rgba(0,0,0,0.14),0px_5px_5px_-3px_rgba(0,0,0,0.2)]",
      },
    },
    defaultVariants: {
      elevation: "elevation-1",
    },
  }
);

type SectionProps = ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> & {
    children: ReactNode;
    title?: string;
    footer?: ReactNode;
  };

export function Section({
  title,
  children,
  footer,
  elevation = "elevation-0",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={cn(sectionVariants({ elevation, className }))}
    >
      {!!title && (
        <header className="h-15 flex items-center px-8 border-b border-b-gray-25">
          <h3 className="font-sans font-semibold text-base text-gray-900 leading-5">
            {title}
          </h3>
        </header>
      )}
      <div className="flex flex-col p-4 md:p-8">{children}</div>
      {!!footer && (
        <footer className="px-4 md:px-8 py-4 md:py-6 border-t border-t-gray-25">
          {footer}
        </footer>
      )}
    </section>
  );
}
