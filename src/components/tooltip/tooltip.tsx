"use client";

import { type ComponentProps } from "react";
import {
  Tooltip as TooltipPrimitive,
  TooltipContent as TooltipPrimitiveContent,
  TooltipProvider as TooltipPrimitiveProvider,
  TooltipTrigger as TooltipPrimitiveTrigger,
} from "@radix-ui/react-tooltip";

import { cn } from "../../lib/utils";

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
function TooltipProvider({
  delayDuration = 0,
  ...props
}: ComponentProps<typeof TooltipPrimitiveProvider>) {
  return (
    <TooltipPrimitiveProvider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

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
function Tooltip({ ...props }: ComponentProps<typeof TooltipPrimitive>) {
  return <TooltipPrimitive data-slot="tooltip" {...props} />;
}

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
function TooltipTrigger({ ...props }: ComponentProps<typeof TooltipPrimitiveTrigger>) {
  return <TooltipPrimitiveTrigger data-slot="tooltip-trigger" {...props} />;
}

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
function TooltipContent({
  className,
  sideOffset = 6,
  ...props
}: ComponentProps<typeof TooltipPrimitiveContent>) {
  return (
    <TooltipPrimitiveContent
      data-slot="tooltip-content"
      sideOffset={sideOffset}
      className={cn(
        "bg-gray-25 text-gray-700 z-50 overflow-hidden rounded-sm px-3 py-1.5 text-xs font-medium tracking-[0.02em]",
        "animate-in fade-in-0 zoom-in-95",
        "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  );
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
