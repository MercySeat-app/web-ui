import { cn } from "../../lib/utils";
import type { IconProps } from "./types";
import { getIconSvgProps } from "./types";

export function SermonIcon({ size, className, ...props }: IconProps) {
  const svgProps = getIconSvgProps(size, props);

  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("inline-block", className)}
      {...svgProps}
    >
      <path
        d="M14.022 10.9211L12.4757 4.09878C12.232 3.02346 13.0494 2 14.152 2C14.8038 2 15.3995 2.36863 15.6903 2.95192L21.2123 14.0276C21.7141 15.0341 21.769 16.2053 21.3635 17.2544L20.518 19.442C19.9222 20.9836 18.4397 22 16.787 22H16C13.7909 22 12 20.2091 12 18V12.9603C12 11.8341 12.913 10.9211 14.0392 10.9211C15.1654 10.9211 16.0784 11.8341 16.0784 12.9603V17.0633"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.97805 10.9211L11.5243 4.09878C11.768 3.02346 10.9506 2 9.84798 2C9.19622 2 8.60053 2.36863 8.30972 2.95192L2.78773 14.0276C2.28593 15.0341 2.23102 16.2053 2.63645 17.2544L3.48195 19.442C4.07775 20.9836 5.56028 22 7.21299 22H8C10.2091 22 12 20.2091 12 18V12.9603C12 11.8341 11.087 10.9211 9.96078 10.9211C8.83456 10.9211 7.92157 11.8341 7.92157 12.9603V17.0633"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
