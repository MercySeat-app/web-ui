import { cn } from "../../lib/utils";
import type { IconProps } from "./types";
import { getIconSvgProps } from "./types";

export function AnalyticsIcon({ size, className, ...props }: IconProps) {
  const svgProps = getIconSvgProps(size, props);

  return (
    <svg viewBox="0 0 16 16" fill="none" className={cn("inline-block", className)} {...svgProps}>
      <circle cx="12.6457" cy="4.35422" r="1.35422" stroke="currentColor" />
      <circle cx="10.0876" cy="9.80881" r="1.35422" stroke="currentColor" />
      <circle cx="3.35422" cy="11.0876" r="1.35422" stroke="currentColor" />
      <circle cx="5.46091" cy="5.63328" r="1.35422" stroke="currentColor" />
      <path d="M5.19745 6.83691L3.91846 10.0344" stroke="currentColor" />
      <path d="M12.232 5.55786L10.3135 8.75533" stroke="currentColor" />
      <path d="M6.47645 6.83691L9.03442 8.7554" stroke="currentColor" />
    </svg>
  );
}
