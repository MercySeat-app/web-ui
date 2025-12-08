import { cn } from "../../lib/utils";
import type { IconProps } from "./types";
import { getIconSvgProps } from "./types";

export function MinistryIcon({ size, className, ...props }: IconProps) {
  const svgProps = getIconSvgProps(size, props);

  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("inline-block", className)}
      {...svgProps}
    >
      <path
        d="M4 20C4 18.8954 4.89543 18 6 18H20V22H6C4.89543 22 4 21.1046 4 20V20Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 4C4 2.89543 4.89543 2 6 2H20V22H6C4.89543 22 4 21.1046 4 20V4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M12 6.16666L12 14.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9.08334L15 9.08334" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
