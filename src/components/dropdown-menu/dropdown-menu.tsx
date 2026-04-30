"use client";

import React, { type ComponentProps } from "react";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import {
  DropdownMenu as DropdownMenuPrimitive,
  DropdownMenuCheckboxItem as DropdownMenuPrimitiveCheckboxItem,
  DropdownMenuContent as DropdownMenuPrimitiveContent,
  DropdownMenuGroup as DropdownMenuPrimitiveGroup,
  DropdownMenuItem as DropdownMenuPrimitiveItem,
  DropdownMenuItemIndicator as DropdownMenuPrimitiveItemIndicator,
  DropdownMenuLabel as DropdownMenuPrimitiveLabel,
  DropdownMenuPortal as DropdownMenuPrimitivePortal,
  DropdownMenuRadioGroup as DropdownMenuPrimitiveRadioGroup,
  DropdownMenuRadioItem as DropdownMenuPrimitiveRadioItem,
  DropdownMenuSeparator as DropdownMenuPrimitiveSeparator,
  DropdownMenuSub as DropdownMenuPrimitiveSub,
  DropdownMenuSubContent as DropdownMenuPrimitiveSubContent,
  DropdownMenuSubTrigger as DropdownMenuPrimitiveSubTrigger,
  DropdownMenuTrigger as DropdownMenuPrimitiveTrigger,
} from "@radix-ui/react-dropdown-menu";

import { cn } from "../../lib/utils";

/**
 * Root component for a dropdown menu. Manages the open/close state and provides
 * context to all child components.
 *
 * @example
 * ```tsx
 * <DropdownMenu>
 *   <DropdownMenuTrigger>Open</DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuItem>Item 1</DropdownMenuItem>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 * ```
 */
function DropdownMenu({ ...props }: ComponentProps<typeof DropdownMenuPrimitive>) {
  return <DropdownMenuPrimitive data-slot="dropdown-menu" {...props} />;
}

/**
 * Portal component that renders dropdown menu content into a React portal,
 * ensuring the menu is rendered outside the DOM hierarchy of its parent.
 * Used internally by {@link DropdownMenuContent}.
 */
function DropdownMenuPortal({ ...props }: ComponentProps<typeof DropdownMenuPrimitivePortal>) {
  return <DropdownMenuPrimitivePortal data-slot="dropdown-menu-portal" {...props} />;
}

/**
 * The button or element that toggles the dropdown menu open/closed.
 * Must be a direct child of {@link DropdownMenu}.
 *
 * @example
 * ```tsx
 * <DropdownMenuTrigger asChild>
 *   <Button variant="outline">Options</Button>
 * </DropdownMenuTrigger>
 * ```
 */
function DropdownMenuTrigger({ ...props }: ComponentProps<typeof DropdownMenuPrimitiveTrigger>) {
  return <DropdownMenuPrimitiveTrigger data-slot="dropdown-menu-trigger" {...props} />;
}

/**
 * Container for the dropdown menu items. Renders inside a portal with animation
 * and positioning styles. Matches the width of the trigger element by default.
 *
 * @param props.className - Additional CSS classes to merge with default styles.
 * @param props.align - Horizontal alignment relative to the trigger. Defaults to `"start"`.
 * @param props.sideOffset - Distance in pixels between the trigger and the content. Defaults to `4`.
 *
 * @example
 * ```tsx
 * <DropdownMenuContent align="end" sideOffset={8}>
 *   <DropdownMenuItem>Action</DropdownMenuItem>
 * </DropdownMenuContent>
 * ```
 */
function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitiveContent>) {
  return (
    <DropdownMenuPrimitivePortal>
      <DropdownMenuPrimitiveContent
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        align={align}
        className={cn(
          "z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-2xl bg-white p-1 text-popover-foreground shadow-dropdown duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitivePortal>
  );
}

/**
 * Groups related dropdown menu items together. Useful for visually and
 * semantically grouping menu items that share a common purpose.
 */
function DropdownMenuGroup({ ...props }: ComponentProps<typeof DropdownMenuPrimitiveGroup>) {
  return <DropdownMenuPrimitiveGroup data-slot="dropdown-menu-group" {...props} />;
}

/**
 * An interactive item within the dropdown menu. Supports an optional `inset`
 * prop for left padding alignment and a `variant` prop for destructive styling.
 *
 * @param props.className - Additional CSS classes to merge with default styles.
 * @param props.inset - When `true`, adds left padding to align with items that have icons.
 * @param props.variant - Visual variant. `"destructive"` applies red/danger styling. Defaults to `"default"`.
 *
 * @example
 * ```tsx
 * <DropdownMenuItem>Edit</DropdownMenuItem>
 * <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
 * ```
 */
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: ComponentProps<typeof DropdownMenuPrimitiveItem> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <DropdownMenuPrimitiveItem
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        className,
      )}
      {...props}
    />
  );
}

/**
 * A menu item that can be toggled on/off with a checkbox indicator.
 * Displays a {@link CheckIcon} when the item is checked.
 *
 * @param props.className - Additional CSS classes to merge with default styles.
 * @param props.children - The label content of the checkbox item.
 * @param props.checked - Whether the checkbox item is currently checked.
 * @param props.inset - When `true`, adds left padding to align with other inset items.
 *
 * @example
 * ```tsx
 * <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
 *   Status Bar
 * </DropdownMenuCheckboxItem>
 * ```
 */
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitiveCheckboxItem> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitiveCheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <DropdownMenuPrimitiveItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitiveItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitiveCheckboxItem>
  );
}

/**
 * Groups radio items together, ensuring only one can be selected at a time.
 * Must wrap {@link DropdownMenuRadioItem} components.
 *
 * @example
 * ```tsx
 * <DropdownMenuRadioGroup value={color} onValueChange={setColor}>
 *   <DropdownMenuRadioItem value="red">Red</DropdownMenuRadioItem>
 *   <DropdownMenuRadioItem value="blue">Blue</DropdownMenuRadioItem>
 * </DropdownMenuRadioGroup>
 * ```
 */
function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitiveRadioGroup>) {
  return <DropdownMenuPrimitiveRadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

/**
 * A menu item that behaves as a radio button within a {@link DropdownMenuRadioGroup}.
 * Displays a {@link CheckIcon} when selected.
 *
 * @param props.className - Additional CSS classes to merge with default styles.
 * @param props.children - The label content of the radio item.
 * @param props.inset - When `true`, adds left padding to align with other inset items.
 *
 * @example
 * ```tsx
 * <DropdownMenuRadioItem value="ascending">Ascending</DropdownMenuRadioItem>
 * ```
 */
function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitiveRadioItem> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitiveRadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <DropdownMenuPrimitiveItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitiveItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitiveRadioItem>
  );
}

/**
 * A non-interactive label used to title a section of menu items.
 * Styled with the Manrope font and semibold weight.
 *
 * @param props.className - Additional CSS classes to merge with default styles.
 * @param props.inset - When `true`, adds left padding to align with inset items.
 *
 * @example
 * ```tsx
 * <DropdownMenuLabel>Appearance</DropdownMenuLabel>
 * ```
 */
function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitiveLabel> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitiveLabel
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-7 py-4 text-base leading-5 font-manrope font-semibold text-gray-900 data-inset:pl-7",
        className,
      )}
      {...props}
    />
  );
}

/**
 * A visual divider between groups of menu items.
 * Renders as a horizontal line with subtle background color.
 *
 * @param props.className - Additional CSS classes to merge with default styles.
 *
 * @example
 * ```tsx
 * <DropdownMenuItem>Settings</DropdownMenuItem>
 * <DropdownMenuSeparator />
 * <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
 * ```
 */
function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitiveSeparator>) {
  return (
    <DropdownMenuPrimitiveSeparator
      data-slot="dropdown-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-gray-50", className)}
      {...props}
    />
  );
}

/**
 * Displays a keyboard shortcut hint aligned to the right side of a menu item.
 * Intended to be used inside a {@link DropdownMenuItem}.
 *
 * @param props.className - Additional CSS classes to merge with default styles.
 *
 * @example
 * ```tsx
 * <DropdownMenuItem>
 *   Save
 *   <DropdownMenuShortcut>Ctrl+S</DropdownMenuShortcut>
 * </DropdownMenuItem>
 * ```
 */
function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Root component for a nested submenu. Manages the open/close state of the
 * submenu independently from the parent menu.
 *
 * @example
 * ```tsx
 * <DropdownMenuSub>
 *   <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
 *   <DropdownMenuSubContent>
 *     <DropdownMenuItem>Sub Item</DropdownMenuItem>
 *   </DropdownMenuSubContent>
 * </DropdownMenuSub>
 * ```
 */
function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitiveSub>) {
  return <DropdownMenuPrimitiveSub data-slot="dropdown-menu-sub" {...props} />;
}

/**
 * The item within a parent menu that opens a submenu when hovered or focused.
 * Renders a chevron-right icon to indicate the presence of a nested menu.
 *
 * @param props.className - Additional CSS classes to merge with default styles.
 * @param props.inset - When `true`, adds left padding to align with other inset items.
 * @param props.children - The label content of the sub-trigger.
 *
 * @example
 * ```tsx
 * <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
 * ```
 */
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitiveSubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitiveSubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="cn-rtl-flip ml-auto" />
    </DropdownMenuPrimitiveSubTrigger>
  );
}

/**
 * Container for the submenu items that appears when the corresponding
 * {@link DropdownMenuSubTrigger} is activated. Includes animation and
 * positioning styles similar to {@link DropdownMenuContent}.
 *
 * @param props.className - Additional CSS classes to merge with default styles.
 */
function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitiveSubContent>) {
  return (
    <DropdownMenuPrimitiveSubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className,
      )}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
