"use client";

import { useCallback, useState, type ReactNode } from "react";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { cn } from "../../lib/utils";
import { Logo } from "../main-logo";

/**
 * Resolved background image URL for the sidebar background decoration.
 *
 * Uses `import.meta.url` so the bundler can resolve the SVG asset at build
 * time regardless of the deployment base path.
 *
 * @constant
 */
const backgroundImageUrl = new URL("./background.svg", import.meta.url).href;

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
export function Sidebar({ children }: SidebarProps) {
  const [open, setOpen] = useState(false);

  const handleToggle = useCallback(() => setOpen((prev) => !prev), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      {/* Mobile toggle button (hidden on >= 912px) */}
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          "fixed left-4 top-4 z-40 inline-flex size-12 items-center justify-center",
          "rounded-lg bg-black",
          "lg:hidden", // hide the button when viewport >= 912px
        )}
        aria-label={open ? "Close sidebar" : "Open sidebar"}
      >
        <RiMenuUnfold4Line className="size-6 text-white" />
      </button>

      {/* Mobile overlay (click to close) */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-black/40 transition-opacity sidebar:hidden lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={handleClose}
      />

      {/* Sidebar itself */}
      <aside
        className={cn(
          "relative",
          "fixed inset-y-0 left-0 z-40 w-[315px]",
          "bg-no-repeat bg-cover bg-top",
          "transition-transform duration-200 ease-out",
          open ? "translate-x-0" : "-translate-x-full",

          // desktop (>= 912px): always visible, static, no transform
          "lg:relative! lg:translate-x-0 lg:shadow-none",
          "lg:flex lg:flex-col px-6 overflow-hidden",
        )}
      >
        <img
          src={backgroundImageUrl}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div className="w-66.75 grid grid-rows-[112px_1fr]">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center gap-y-2">
              <Logo className="size-10.5" />
              <h1 className="font-manrope font-nromal text-base text-white tracking-[0.04em]">
                MercySeat
              </h1>
            </div>
          </div>
          <div className="overflow-hidden w-66.75">{children}</div>
        </div>
      </aside>
    </>
  );
}
