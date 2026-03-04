import { default as React, ComponentProps } from 'react';
import { Dialog as DialogPrimitive, DialogClose as DialogPrimitiveClose, DialogContent as DialogPrimitiveContent, DialogDescription as DialogPrimitiveDescription, DialogOverlay as DialogPrimitiveOverlay, DialogPortal as DialogPrimitivePortal, DialogTitle as DialogPrimitiveTitle, DialogTrigger as DialogPrimitiveTrigger } from '@radix-ui/react-dialog';
/**
 * Root wrapper for the Radix dialog primitive.
 */
declare function Dialog({ ...props }: ComponentProps<typeof DialogPrimitive>): import("react/jsx-runtime").JSX.Element;
/**
 * Trigger that opens the dialog.
 */
declare function DialogTrigger({ ...props }: ComponentProps<typeof DialogPrimitiveTrigger>): import("react/jsx-runtime").JSX.Element;
/**
 * Portal container for dialog content.
 */
declare function DialogPortal({ ...props }: ComponentProps<typeof DialogPrimitivePortal>): import("react/jsx-runtime").JSX.Element;
/**
 * Close control for the dialog.
 */
declare function DialogClose({ ...props }: ComponentProps<typeof DialogPrimitiveClose>): import("react/jsx-runtime").JSX.Element;
/**
 * Backdrop overlay rendered behind the dialog.
 */
declare function DialogOverlay({ className, ...props }: ComponentProps<typeof DialogPrimitiveOverlay>): import("react/jsx-runtime").JSX.Element;
/**
 * Main dialog content container with an optional icon close button.
 */
declare function DialogContent({ className, children, showCloseButton, ...props }: ComponentProps<typeof DialogPrimitiveContent> & {
    showCloseButton?: boolean;
}): import("react/jsx-runtime").JSX.Element;
/**
 * Header section for dialog title and description.
 */
declare function DialogHeader({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
/**
 * Footer section for dialog actions with an optional close action.
 */
declare function DialogFooter({ className, showCloseButton, children, ...props }: React.ComponentProps<"div"> & {
    showCloseButton?: boolean;
}): import("react/jsx-runtime").JSX.Element;
/**
 * Accessible dialog title.
 */
declare function DialogTitle({ className, ...props }: ComponentProps<typeof DialogPrimitiveTitle>): import("react/jsx-runtime").JSX.Element;
/**
 * Accessible dialog description text.
 */
declare function DialogDescription({ className, ...props }: ComponentProps<typeof DialogPrimitiveDescription>): import("react/jsx-runtime").JSX.Element;
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, };
//# sourceMappingURL=dialog.d.ts.map