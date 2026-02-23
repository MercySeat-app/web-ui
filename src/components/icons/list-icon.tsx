import { cn } from "../../lib/utils";
import type { IconProps } from "./types";
import { getIconSvgProps } from "./types";

export function ListIcon({ size, className, ...props }: IconProps) {
  const svgProps = getIconSvgProps(size, props);

  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("inline-block", className)} {...svgProps}>
      <path
        d="M5.33325 4H13.9999"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33325 8H13.9999"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33325 12H13.9999"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 4H2.00667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 8H2.00667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12H2.00667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
