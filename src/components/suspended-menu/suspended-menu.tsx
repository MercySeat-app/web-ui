"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export interface SuspendedMenuItem {
  /**
   * The label text for the menu item
   */
  label: string;
  /**
   * Optional icon element (React component) to display before the label
   */
  icon?: ReactNode;
  /**
   * Click handler for the menu item
   */
  onClick?: () => void;
  /**
   * Variant style for the menu item
   * - "default": standard gray text
   * - "destructive": red text for destructive actions
   */
  variant?: "default" | "destructive";
  /**
   * Whether the item is disabled
   */
  disabled?: boolean;
}

export interface SuspendedMenuProps {
  /**
   * The trigger element that opens the menu when clicked
   */
  children: ReactNode;
  /**
   * Array of menu items to display
   */
  items: SuspendedMenuItem[];
  /**
   * Additional CSS classes for the menu content
   */
  className?: string;
  /**
   * Alignment of the menu relative to the trigger
   * @default "end"
   */
  align?: "start" | "center" | "end";
  /**
   * Side of the trigger where the menu appears
   * @default "bottom"
   */
  side?: "top" | "right" | "bottom" | "left";
}

function SuspendedMenu({ children, items, className, align = "end", side = "bottom" }: SuspendedMenuProps) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        {children}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className={cn(
            "min-w-[180px] rounded-md bg-white border border-gray-100 shadow-md p-1 z-50",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2",
            "data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2",
            "data-[side=top]:slide-in-from-bottom-2",
            className
          )}
          align={align}
          side={side}
          sideOffset={4}
        >
          {items.map((item, index) => (
            <DropdownMenuPrimitive.Item
              key={index}
              className={cn(
                "relative flex items-center gap-2 px-3 py-2 text-sm rounded-sm outline-none cursor-pointer",
                "focus:bg-gray-25 data-disabled:pointer-events-none data-disabled:opacity-50",
                "transition-colors",
                item.variant === "destructive"
                  ? "text-bright-red-600 focus:text-bright-red-700"
                  : "text-gray-700 focus:text-gray-900"
              )}
              disabled={item.disabled}
              onSelect={() => {
                if (item.onClick && !item.disabled) {
                  item.onClick();
                }
              }}
            >
              {item.icon && (
                <span className="shrink-0 w-4 h-4 flex items-center justify-center">
                  {item.icon}
                </span>
              )}
              <span>{item.label}</span>
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}

export { SuspendedMenu };

