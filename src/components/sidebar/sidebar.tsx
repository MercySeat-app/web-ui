"use client";

import { useCallback, useState, type ReactNode } from "react";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { cn } from "../../lib/utils";
import { LogoLockup } from "../main-logo";

const backgroundImageUrl = new URL("./background.svg", import.meta.url).href;

type SidebarProps = {
  children: ReactNode;
};

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
          "lg:hidden" // hide the button when viewport >= 912px
        )}
        aria-label={open ? "Close sidebar" : "Open sidebar"}
      >
        <RiMenuUnfold4Line className="size-6 text-white" />
      </button>

      {/* Mobile overlay (click to close) */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-black/40 transition-opacity sidebar:hidden lg:hidden",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
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
          "lg:relative lg:translate-x-0 lg:shadow-none",
          "lg:flex lg:flex-col px-6 overflow-hidden"
        )}
      >
        <img
          src={backgroundImageUrl}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div className="w-full flex flex-1 flex-col">
          <div className="flex justify-center pt-7 pb-12 border-b border-b border-b-white/15 mb-6">
            <div className="w-[8.75rem] flex items-center gap-x-1">
              <LogoLockup size={32} />
            </div>
          </div>
          <div className="flex flex-1">{children}</div>
        </div>
      </aside>
    </>
  );
}
