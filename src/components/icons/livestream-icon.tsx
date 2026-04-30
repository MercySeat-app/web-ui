import { cn } from "../../lib/utils";
import { getIconSvgProps, type IconProps } from "./types";

export function LivestreamIcon({ size, className, ...props }: IconProps) {
  const svgProps = getIconSvgProps(size, props);

  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("inline-block", className)} {...svgProps}>
      <circle cx="8" cy="8" r="4" fill="currentColor" />
      <circle cx="8" cy="8" r="4" fill="currentColor" />
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" />
    </svg>
  );
}
