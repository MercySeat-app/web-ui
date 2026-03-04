"use client";

import React, { type ComponentProps } from "react";
import {
  Dialog as DialogPrimitive,
  DialogClose as DialogPrimitiveClose,
  DialogContent as DialogPrimitiveContent,
  DialogDescription as DialogPrimitiveDescription,
  DialogOverlay as DialogPrimitiveOverlay,
  DialogPortal as DialogPrimitivePortal,
  DialogTitle as DialogPrimitiveTitle,
  DialogTrigger as DialogPrimitiveTrigger,
} from "@radix-ui/react-dialog";

import { cn } from "../../lib/utils";
import { Button } from "../button";
import { XIcon } from "lucide-react";

/**
 * Root wrapper for the Radix dialog primitive.
 */
function Dialog({ ...props }: ComponentProps<typeof DialogPrimitive>) {
  return <DialogPrimitive data-slot="dialog" {...props} />;
}

/**
 * Trigger that opens the dialog.
 */
function DialogTrigger({ ...props }: ComponentProps<typeof DialogPrimitiveTrigger>) {
  return <DialogPrimitiveTrigger data-slot="dialog-trigger" {...props} />;
}

/**
 * Portal container for dialog content.
 */
function DialogPortal({ ...props }: ComponentProps<typeof DialogPrimitivePortal>) {
  return <DialogPrimitivePortal data-slot="dialog-portal" {...props} />;
}

/**
 * Close control for the dialog.
 */
function DialogClose({ ...props }: ComponentProps<typeof DialogPrimitiveClose>) {
  return <DialogPrimitiveClose data-slot="dialog-close" {...props} />;
}

/**
 * Backdrop overlay rendered behind the dialog.
 */
function DialogOverlay({ className, ...props }: ComponentProps<typeof DialogPrimitiveOverlay>) {
  return (
    <DialogPrimitiveOverlay
      data-slot="dialog-overlay"
      className={cn(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/50 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Main dialog content container with an optional icon close button.
 */
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: ComponentProps<typeof DialogPrimitiveContent> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitiveContent
        data-slot="dialog-content"
        className={cn(
          "bg-white data-open:animate-in data-closed:animate-out",
          "data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95",
          "data-open:zoom-in-95 grid max-w-[calc(100%-2rem)]",
          "gap-4 rounded-2xl text-sm duration-100 sm:max-w-sm shadow-dialog",
          "fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitiveClose data-slot="dialog-close" asChild>
            <Button
              variant="gray-ghost"
              className="absolute top-6 right-8 size-10 flex items-center justify-center"
              size="sm"
            >
              <XIcon />
              <span className="sr-only">Close</span>
            </Button>
          </DialogPrimitiveClose>
        )}
      </DialogPrimitiveContent>
    </DialogPortal>
  );
}

/**
 * Header section for dialog title and description.
 */
function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "min-h-22 px-8 justify-center gap-2 flex flex-col border-b border-b-gray-25",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Footer section for dialog actions with an optional close action.
 */
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("px-8 pb-8 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitiveClose asChild>
          <Button variant="gray-outline" size="sm">
            Close
          </Button>
        </DialogPrimitiveClose>
      )}
    </div>
  );
}

/**
 * Accessible dialog title.
 */
function DialogTitle({ className, ...props }: ComponentProps<typeof DialogPrimitiveTitle>) {
  return (
    <DialogPrimitiveTitle
      data-slot="dialog-title"
      className={cn("font-manrope text-base leading-5 font-semibold text-gray-900", className)}
      {...props}
    />
  );
}

/**
 * Accessible dialog description text.
 */
function DialogDescription({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitiveDescription>) {
  return (
    <DialogPrimitiveDescription
      data-slot="dialog-description"
      className={cn(
        "text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3",
        className,
      )}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
