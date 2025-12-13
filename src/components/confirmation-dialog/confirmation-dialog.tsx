"use client";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export interface ConfirmationDialogProps {
  /**
   * Whether the dialog is open
   */
  open: boolean;
  /**
   * Callback fired when the open state changes
   */
  onOpenChange: (open: boolean) => void;
  /**
   * Header content (typically the title)
   */
  header: ReactNode;
  /**
   * Body/content of the dialog (will be wrapped in AlertDialog.Description for accessibility)
   */
  content: ReactNode;
  /**
   * Action buttons (typically Cancel and Confirm buttons)
   */
  actions: ReactNode;
  /**
   * Additional CSS classes for the dialog content
   */
  className?: string;
}

function ConfirmationDialog({
  open,
  onOpenChange,
  header,
  content,
  actions,
  className,
}: ConfirmationDialogProps) {
  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <AlertDialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
            className
          )}
        >
          <div className="flex flex-col space-y-2">
            <AlertDialogPrimitive.Title className="text-lg font-semibold text-gray-900">
              {header}
            </AlertDialogPrimitive.Title>
            {typeof content === "string" ? (
              <AlertDialogPrimitive.Description className="text-sm text-gray-600">
                {content}
              </AlertDialogPrimitive.Description>
            ) : (
              <>
                <AlertDialogPrimitive.Description asChild>
                  <VisuallyHidden.Root>
                    <span>Confirmation dialog content</span>
                  </VisuallyHidden.Root>
                </AlertDialogPrimitive.Description>
                <div className="text-sm text-gray-600">{content}</div>
              </>
            )}
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0">
            {actions}
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}

export { ConfirmationDialog };
