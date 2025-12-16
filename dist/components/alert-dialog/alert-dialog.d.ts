import { Action, Cancel } from '@radix-ui/react-alert-dialog';
import { ReactNode } from 'react';
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
}
declare function AlertDialog({ open, onOpenChange, header, content, actions, className, }: AlertDialogProps): import("react/jsx-runtime").JSX.Element;
export { AlertDialog, Action as DialogAction, Cancel as DialogCancel };
//# sourceMappingURL=alert-dialog.d.ts.map