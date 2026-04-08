import { ComponentProps } from 'react';
import { Tooltip as TooltipPrimitive, TooltipContent as TooltipPrimitiveContent, TooltipProvider as TooltipPrimitiveProvider, TooltipTrigger as TooltipPrimitiveTrigger } from '@radix-ui/react-tooltip';
/**
 * Provider that wraps the app or a section to configure shared tooltip behavior
 * such as open/close delay and skip-delay duration.
 *
 * Place this near the root of your app or around a group of tooltips that should
 * share the same timing configuration.
 *
 * @example
 * ```tsx
 * <TooltipProvider delayDuration={200}>
 *   <Tooltip>
 *     <TooltipTrigger>Hover me</TooltipTrigger>
 *     <TooltipContent>Hello!</TooltipContent>
 *   </Tooltip>
 * </TooltipProvider>
 * ```
 *
 * @param delayDuration - Milliseconds to wait before showing the tooltip. Defaults to `0`.
 */
declare function TooltipProvider({ delayDuration, ...props }: ComponentProps<typeof TooltipPrimitiveProvider>): import("react/jsx-runtime").JSX.Element;
/**
 * Root wrapper for a single tooltip instance.
 *
 * Manages the open/close state of the tooltip and connects the trigger to its content.
 * Must be rendered inside a `TooltipProvider`.
 *
 * @example
 * ```tsx
 * <Tooltip>
 *   <TooltipTrigger asChild>
 *     <button>Save</button>
 *   </TooltipTrigger>
 *   <TooltipContent>Save your changes</TooltipContent>
 * </Tooltip>
 * ```
 */
declare function Tooltip({ ...props }: ComponentProps<typeof TooltipPrimitive>): import("react/jsx-runtime").JSX.Element;
/**
 * The element that triggers the tooltip on hover or keyboard focus.
 *
 * By default it renders as a `button`. Use the `asChild` prop to compose the
 * trigger behavior onto your own element (e.g. an icon button or link).
 *
 * @example
 * ```tsx
 * <TooltipTrigger asChild>
 *   <IconButton aria-label="Settings" />
 * </TooltipTrigger>
 * ```
 */
declare function TooltipTrigger({ ...props }: ComponentProps<typeof TooltipPrimitiveTrigger>): import("react/jsx-runtime").JSX.Element;
/**
 * The popup content displayed when the tooltip is open.
 *
 * Renders inside a Radix portal so it is not clipped by overflow containers.
 * Includes entrance/exit animations and automatically positions itself relative
 * to the trigger based on the `side` and `align` props.
 *
 * @example
 * ```tsx
 * <TooltipContent side="right" align="center">
 *   This action cannot be undone.
 * </TooltipContent>
 * ```
 *
 * @param sideOffset - Distance in pixels between the tooltip and the trigger. Defaults to `6`.
 * @param className  - Additional CSS classes merged with the default tooltip styles.
 */
declare function TooltipContent({ className, sideOffset, ...props }: ComponentProps<typeof TooltipPrimitiveContent>): import("react/jsx-runtime").JSX.Element;
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
//# sourceMappingURL=tooltip.d.ts.map