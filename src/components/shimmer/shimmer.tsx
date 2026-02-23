"use client";

import type { ComponentProps } from "react";

import { cn } from "../../lib/utils";

/**
 * Props for the Shimmer component.
 */
type ShimmerProps = ComponentProps<"div">;

/**
 * Shimmer renders a single animated skeleton block.
 */
export function Shimmer({ className, ...props }: ShimmerProps) {
  return (
    <div
      data-slot="shimmer"
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-md",
        "bg-linear-to-r from-gray-50 via-gray-100 to-gray-50",
        "bg-size-[200%_100%] animate-[shimmer_2.5s_ease-in-out_infinite]",
        "h-4 w-full",
        className,
      )}
      {...props}
    />
  );
}
