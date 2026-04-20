import { ComponentProps } from 'react';
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
export declare function Shimmer({ className, ...props }: ShimmerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=shimmer.d.ts.map