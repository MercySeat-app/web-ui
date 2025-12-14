"use client";

import type { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

type MenuItemProps = {
  collapsed?: boolean;
  active: boolean;
  children: ReactNode;
  disabled?: boolean;
};

export function MenuItem({
  active,
  children,
  collapsed,
  disabled = false,
}: MenuItemProps) {
  return (
    <Slot
      className={cn(
        "flex w-full h-10 items-center justify-start gap-x-3 px-3 text-sm font-sans font-semibold text-white bg-transparent [&>svg:size-4] hover:bg-blue-hepatica-600 rounded-lg transition-all duration-200",
        {
          "[&>span]:hidden w-10": collapsed,
          "bg-blue-hepatica-800": active,
          "disabled:text-gray-600 disabled:pointer-events-none": disabled,
        }
      )}
    >
      {children}
    </Slot>
  );
}
