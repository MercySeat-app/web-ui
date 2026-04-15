"use client";

import type { ComponentProps } from "react";

import { cn } from "../../lib/utils";

/**
 * Props for the {@link Shimmer} component.
 *
 * Extends the native HTML `<div>` element props so callers can pass any
 * standard `div` attribute (e.g. `style`, `id`, event handlers).
 *
 * @see {@link Shimmer} for usage details.
 */
type ShimmerProps = ComponentProps<"div">;

/**
 * A skeleton loading placeholder with a horizontal shimmer animation.
 *
 * Use `Shimmer` to indicate that content is loading. It renders a single
 * `<div>` with a left-to-right gradient animation that loops indefinitely.
 *
 * The element is hidden from assistive technologies via `aria-hidden="true"`
 * and exposes a `data-slot="shimmer"` attribute for styling or testing hooks.
 *
 * @remarks
 * - Default dimensions are `h-4 w-full`; override with `className`.
 * - The animation runs via the `shimmer` keyframe defined in the Tailwind theme.
 * - All extra props are spread onto the root `<div>`.
 *
 * @example
 * ```tsx
 * // Basic usage — full-width, 16 px tall
 * <Shimmer />
 *
 * // Custom size
 * <Shimmer className="h-8 w-48 rounded-full" />
 *
 * // Multiple lines to mimic a text block
 * <div className="space-y-2">
 *   <Shimmer className="h-4 w-3/4" />
 *   <Shimmer className="h-4 w-full" />
 *   <Shimmer className="h-4 w-5/6" />
 * </div>
 * ```
 *
 * @param props - Standard HTML div attributes plus optional `className` overrides.
 * @returns A shimmer placeholder `<div>` element.
 */
export function Shimmer({ className, ...props }: ShimmerProps) {
  return (
    <div
      data-slot="shimmer"
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-md",
        "bg-linear-to-r from-gray-50 via-gray-50/25 to-gray-50",
        "bg-size-[200%_100%] animate-[shimmer_2.5s_ease-in-out_infinite]",
        "h-4 w-full",
        className,
      )}
      {...props}
    />
  );
}
