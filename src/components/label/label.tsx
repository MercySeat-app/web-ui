"use client";

import { forwardRef, type LabelHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface LabelProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "required"> {
  required?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, required, ...props }, ref) => {
    return (
      <label
        ref={ref}
        data-slot="label"
        className={cn("font-sans font-medium text-sm text-gray-700", className)}
        {...props}
      >
        <span>{children}</span>
        {required ? (
          <span className="text-base font-normal text-bright-red-600 ml-1 leading-[22px]">
            *
          </span>
        ) : null}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label };
