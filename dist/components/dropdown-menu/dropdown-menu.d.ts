import { default as React, ComponentProps } from 'react';
import { DropdownMenu as DropdownMenuPrimitive, DropdownMenuCheckboxItem as DropdownMenuPrimitiveCheckboxItem, DropdownMenuContent as DropdownMenuPrimitiveContent, DropdownMenuGroup as DropdownMenuPrimitiveGroup, DropdownMenuItem as DropdownMenuPrimitiveItem, DropdownMenuLabel as DropdownMenuPrimitiveLabel, DropdownMenuPortal as DropdownMenuPrimitivePortal, DropdownMenuRadioGroup as DropdownMenuPrimitiveRadioGroup, DropdownMenuRadioItem as DropdownMenuPrimitiveRadioItem, DropdownMenuSeparator as DropdownMenuPrimitiveSeparator, DropdownMenuSub as DropdownMenuPrimitiveSub, DropdownMenuSubContent as DropdownMenuPrimitiveSubContent, DropdownMenuSubTrigger as DropdownMenuPrimitiveSubTrigger, DropdownMenuTrigger as DropdownMenuPrimitiveTrigger } from '@radix-ui/react-dropdown-menu';
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
declare function DropdownMenu({ ...props }: ComponentProps<typeof DropdownMenuPrimitive>): import("react/jsx-runtime").JSX.Element;
/**
 * Portal component that renders dropdown menu content into a React portal,
 * ensuring the menu is rendered outside the DOM hierarchy of its parent.
 * Used internally by {@link DropdownMenuContent}.
 */
declare function DropdownMenuPortal({ ...props }: ComponentProps<typeof DropdownMenuPrimitivePortal>): import("react/jsx-runtime").JSX.Element;
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
declare function DropdownMenuTrigger({ ...props }: ComponentProps<typeof DropdownMenuPrimitiveTrigger>): import("react/jsx-runtime").JSX.Element;
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
declare function DropdownMenuContent({ className, align, sideOffset, ...props }: ComponentProps<typeof DropdownMenuPrimitiveContent>): import("react/jsx-runtime").JSX.Element;
/**
 * Groups related dropdown menu items together. Useful for visually and
 * semantically grouping menu items that share a common purpose.
 */
declare function DropdownMenuGroup({ ...props }: ComponentProps<typeof DropdownMenuPrimitiveGroup>): import("react/jsx-runtime").JSX.Element;
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
declare function DropdownMenuItem({ className, inset, variant, ...props }: ComponentProps<typeof DropdownMenuPrimitiveItem> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): import("react/jsx-runtime").JSX.Element;
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
declare function DropdownMenuCheckboxItem({ className, children, checked, inset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitiveCheckboxItem> & {
    inset?: boolean;
}): import("react/jsx-runtime").JSX.Element;
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
declare function DropdownMenuRadioGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitiveRadioGroup>): import("react/jsx-runtime").JSX.Element;
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
declare function DropdownMenuRadioItem({ className, children, inset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitiveRadioItem> & {
    inset?: boolean;
}): import("react/jsx-runtime").JSX.Element;
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
declare function DropdownMenuLabel({ className, inset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitiveLabel> & {
    inset?: boolean;
}): import("react/jsx-runtime").JSX.Element;
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
declare function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitiveSeparator>): import("react/jsx-runtime").JSX.Element;
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
declare function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">): import("react/jsx-runtime").JSX.Element;
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
declare function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitiveSub>): import("react/jsx-runtime").JSX.Element;
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
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React.ComponentProps<typeof DropdownMenuPrimitiveSubTrigger> & {
    inset?: boolean;
}): import("react/jsx-runtime").JSX.Element;
/**
 * Container for the submenu items that appears when the corresponding
 * {@link DropdownMenuSubTrigger} is activated. Includes animation and
 * positioning styles similar to {@link DropdownMenuContent}.
 *
 * @param props.className - Additional CSS classes to merge with default styles.
 */
declare function DropdownMenuSubContent({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitiveSubContent>): import("react/jsx-runtime").JSX.Element;
export { DropdownMenu, DropdownMenuPortal, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, };
//# sourceMappingURL=dropdown-menu.d.ts.map