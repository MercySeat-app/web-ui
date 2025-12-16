import { ReactNode } from 'react';
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
declare function SuspendedMenu({ children, items, className, align, side }: SuspendedMenuProps): import("react/jsx-runtime").JSX.Element;
export { SuspendedMenu };
//# sourceMappingURL=suspended-menu.d.ts.map