import { cn } from "../../lib/utils";
import type { IconProps } from "./types";
import { getIconSvgProps } from "./types";

export function ChurchIcon({ size, className, ...props }: IconProps) {
  const svgProps = getIconSvgProps(size, props);

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("inline-block", className)}
      {...svgProps}
    >
      <path
        d="M5.76123 9.17699V22H18.239V9.17699C18.239 8.35073 17.8982 7.56104 17.2971 6.99422L14.0582 3.94042C12.9025 2.85078 11.0978 2.85078 9.9421 3.94042L6.7032 6.99422C6.10202 7.56104 5.76123 8.35073 5.76123 9.17699Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20.3964 12.2174L18.239 10.9483V22H19.8754C20.98 22 21.8754 21.1046 21.8754 20V14.8032C21.8754 13.7401 21.3128 12.7564 20.3964 12.2174Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.6038 12.2174L5.76123 10.9483V22H4.12486C3.02029 22 2.12486 21.1046 2.12486 20V14.8032C2.12486 13.7401 2.68748 12.7564 3.6038 12.2174Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.0002 7.28268V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.9609 9.15826H10.0393"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.72412 18.6074C9.72412 17.3505 10.7431 16.3316 12 16.3316C13.2569 16.3316 14.2759 17.3505 14.2759 18.6074V22H9.72412V18.6074Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
