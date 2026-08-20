"use client";

import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
} from "@radix-ui/react-alert-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { XIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Button } from "../button";

export interface AlertDialogProps {
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
  /**
   * Renders a close button aligned with the header title. Clicking it dismisses
   * the dialog, same as the cancel action.
   */
  showCloseButton?: boolean;
}

function AlertDialog({
  open,
  onOpenChange,
  header,
  content,
  actions,
  className,
  showCloseButton = false,
}: AlertDialogProps) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Portal>
        <Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
            className
          )}
        >
          <div className="flex flex-col space-y-2">
            <div
              className={cn(
                "flex items-center justify-between gap-4",
                showCloseButton && "border-b border-b-gray-25 pb-4",
              )}
            >
              <Title className="font-manrope text-lg font-semibold text-gray-900 min-w-0 flex-1">
                {header}
              </Title>
              {showCloseButton && (
                <Cancel asChild>
                  <Button
                    type="button"
                    variant="gray-ghost"
                    size="sm"
                    className="size-10 shrink-0 flex items-center justify-center"
                  >
                    <XIcon />
                    <span className="sr-only">Close</span>
                  </Button>
                </Cancel>
              )}
            </div>
            {typeof content === "string" ? (
              <Description className="font-manrope text-sm text-gray-700">
                {content}
              </Description>
            ) : (
              <>
                <Description asChild>
                  <VisuallyHidden.Root>
                    <span>Confirmation dialog content</span>
                  </VisuallyHidden.Root>
                </Description>
                <div className="text-sm text-gray-700">{content}</div>
              </>
            )}
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0">
            {actions}
          </div>
        </Content>
      </Portal>
    </Root>
  );
}

export { AlertDialog, Action as DialogAction, Cancel as DialogCancel };
