import { cn } from "../../lib/utils";
import type { IconProps } from "./types";
import { getIconSvgProps } from "./types";

export function VideoIcon({ size, className, ...props }: IconProps) {
  const svgProps = getIconSvgProps(size, props);

  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("inline-block", className)} {...svgProps}>
      <path
        d="M30 16V32H10V16H30ZM32 12H8C6.9 12 6 12.9 6 14V34C6 35.1 6.9 36 8 36H32C33.1 36 34 35.1 34 34V27L42 35V13L34 21V14C34 12.9 33.1 12 32 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
