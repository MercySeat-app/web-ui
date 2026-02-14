"use client";

import { useCallback, useState, type ReactNode } from "react";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { cn } from "../../lib/utils";
import { Logo } from "../main-logo";

/**
 * Resolved background image URL for the sidebar.
 */
const backgroundImageUrl = new URL("./background.svg", import.meta.url).href;

/**
 * Props for the Sidebar component.
 */
type SidebarProps = {
  /**
   * Sidebar content (navigation, menus, etc.).
   */
  children: ReactNode;
};

/**
 * Sidebar renders the primary navigation container with a mobile toggle.
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
        <div className="w-full grid grid-rows-[112px_1fr]">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center gap-y-2">
              <Logo className="size-10.5" />
              <h1 className="font-manrope font-nromal text-base text-white tracking-[0.04em]">
                MercySeat
              </h1>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </aside>
    </>
  );
}
