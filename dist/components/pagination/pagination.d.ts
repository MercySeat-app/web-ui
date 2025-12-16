import { ComponentProps } from 'react';
export type PaginationProps = {
    /** Current page (1-based) */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Total number of items in the collection */
    totalItems: number;
    /** Available options for the "items per page" dropdown */
    pageSizeOptions?: number[];
    /** Called when the page changes */
    onPageChange: (page: number) => void;
    /** Called when the user changes the page size */
    onPageSizeChange?: (pageSize: number) => void;
    /** Optional: disable all controls (e.g. while loading) */
    disabled?: boolean;
    className?: string;
} & Omit<ComponentProps<"div">, "children">;
export declare function Pagination({ page, pageSize, totalItems, pageSizeOptions, onPageChange, onPageSizeChange, disabled, className, ...props }: PaginationProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=pagination.d.ts.map