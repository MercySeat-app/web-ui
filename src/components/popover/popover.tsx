"use client";

import { type ComponentProps } from "react";
import {
  Anchor as PopoverPrimitiveAnchor,
  Content as PopoverPrimitiveContent,
  Portal as PopoverPrimitivePortal,
  Root as PopoverPrimitive,
  Trigger as PopoverPrimitiveTrigger,
} from "@radix-ui/react-popover";

import { cn } from "../../lib/utils";

/**
 * Root component for a popover. Wraps Radix's `Popover.Root` and manages the
 * open/closed state and context for all child components.
 *
 * A popover is a non-modal floating panel that anchors to a trigger element.
 * Use it for content that should appear contextually (e.g. settings, filters,
 * inline forms) — for confirmation dialogs prefer {@link AlertDialog}, and for
 * menu-style selection prefer {@link DropdownMenu}.
 *
 * @example
 * ```tsx
 * <Popover>
 *   <PopoverTrigger asChild>
 *     <Button>Open</Button>
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     <p>Popover content</p>
 *   </PopoverContent>
 * </Popover>
 * ```
 */
function Popover({ ...props }: ComponentProps<typeof PopoverPrimitive>) {
  return <PopoverPrimitive data-slot="popover" {...props} />;
}

/**
 * The element that toggles the popover open/closed. Must be a direct child of
 * {@link Popover}.
 *
 * Use `asChild` to merge the trigger behaviour onto an existing button or
 * interactive element (e.g. a MercySeat {@link Button}) without nesting two
 * focusable elements.
 *
 * @example
 * ```tsx
 * <PopoverTrigger asChild>
 *   <Button variant="blue-hepatica-outline">Filters</Button>
 * </PopoverTrigger>
 * ```
 */
function PopoverTrigger({ ...props }: ComponentProps<typeof PopoverPrimitiveTrigger>) {
  return <PopoverPrimitiveTrigger data-slot="popover-trigger" {...props} />;
}

/**
 * The floating panel rendered when the popover is open. Wrapped in a portal so
 * it escapes overflow/stacking contexts, with Radix handling positioning,
 * collision detection, and focus management.
 *
 * Carries `data-slot="popover-content"` so descendant components can adapt
 * their styling when nested inside a popover (e.g. the {@link Calendar} drops
 * its background when used inline).
 *
 * @param props.align - Horizontal alignment relative to the trigger. Defaults to `"center"`.
 * @param props.sideOffset - Distance in pixels between trigger and content. Defaults to `4`.
 *
 * @example
 * ```tsx
 * <PopoverContent align="end" sideOffset={8}>
 *   <ProfileForm />
 * </PopoverContent>
 * ```
 */
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: ComponentProps<typeof PopoverPrimitiveContent>) {
  return (
    <PopoverPrimitivePortal>
      <PopoverPrimitiveContent
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-2xl bg-white p-4 text-popover-foreground shadow-dropdown outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className,
        )}
        {...props}
      />
    </PopoverPrimitivePortal>
  );
}

/**
 * Optional anchor element used to position the popover content independently
 * of the trigger. Use when the visual anchor and the interactive trigger are
 * different elements (e.g. a button toggles a popover that anchors to a chip).
 *
 * @example
 * ```tsx
 * <Popover>
 *   <PopoverAnchor asChild>
 *     <div ref={anchorRef}>Anchor target</div>
 *   </PopoverAnchor>
 *   <PopoverTrigger asChild>
 *     <Button>Toggle</Button>
 *   </PopoverTrigger>
 *   <PopoverContent>…</PopoverContent>
 * </Popover>
 * ```
 */
function PopoverAnchor({ ...props }: ComponentProps<typeof PopoverPrimitiveAnchor>) {
  return <PopoverPrimitiveAnchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };
