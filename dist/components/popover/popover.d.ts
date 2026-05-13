import { ComponentProps } from 'react';
import { Anchor as PopoverPrimitiveAnchor, Content as PopoverPrimitiveContent, Root as PopoverPrimitive, Trigger as PopoverPrimitiveTrigger } from '@radix-ui/react-popover';
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
declare function Popover({ ...props }: ComponentProps<typeof PopoverPrimitive>): import("react/jsx-runtime").JSX.Element;
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
declare function PopoverTrigger({ ...props }: ComponentProps<typeof PopoverPrimitiveTrigger>): import("react/jsx-runtime").JSX.Element;
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
declare function PopoverContent({ className, align, sideOffset, ...props }: ComponentProps<typeof PopoverPrimitiveContent>): import("react/jsx-runtime").JSX.Element;
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
declare function PopoverAnchor({ ...props }: ComponentProps<typeof PopoverPrimitiveAnchor>): import("react/jsx-runtime").JSX.Element;
export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };
//# sourceMappingURL=popover.d.ts.map