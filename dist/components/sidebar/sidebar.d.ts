import { ReactNode } from 'react';
/**
 * Props accepted by the {@link Sidebar} component.
 */
type SidebarProps = {
    /**
     * Content rendered inside the sidebar panel (e.g. navigation links,
     * menus, user profile sections). The content is placed in a scrollable
     * container below the MercySeat logo lockup.
     */
    children: ReactNode;
};
/**
 * Primary application sidebar that contains navigation and branding.
 *
 * **Responsive behaviour:**
 * - **Mobile (< 912 px):** The sidebar is hidden off-screen by default.
 *   A floating hamburger button toggles it in/out with a slide animation,
 *   and a semi-transparent overlay is shown behind it. Clicking the overlay
 *   or the toggle button again closes the sidebar.
 * - **Desktop (≥ 912 px):** The sidebar is always visible in the normal
 *   document flow (no toggle, no overlay).
 *
 * The component renders three sibling elements:
 * 1. A `<button>` for the mobile toggle (hidden on desktop).
 * 2. A `<div>` overlay (hidden on desktop, visible when open on mobile).
 * 3. An `<aside>` containing the logo lockup, a decorative background
 *    image, and the provided {@link SidebarProps.children | children}.
 *
 * @example
 * ```tsx
 * <Sidebar>
 *   <NavLinks />
 *   <UserProfile />
 * </Sidebar>
 * ```
 */
export declare function Sidebar({ children }: SidebarProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=sidebar.d.ts.map