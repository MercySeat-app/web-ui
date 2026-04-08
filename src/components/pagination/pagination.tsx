"use client";

import type { ComponentProps } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";

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

export function Pagination({
  page,
  pageSize,
  totalItems,
  pageSizeOptions = [5, 10, 25, 50],
  onPageChange,
  onPageSizeChange,
  disabled = false,
  className,
  ...props
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / Math.max(pageSize, 1)));

  // Clamp page for safety
  const safePage = Math.min(Math.max(page, 1), totalPages);

  const startIndex = totalItems === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const endIndex = totalItems === 0 ? 0 : Math.min(totalItems, safePage * pageSize);

  const canGoPrev = !disabled && safePage > 1;
  const canGoNext = !disabled && safePage < totalPages;

  const handlePrev = () => {
    if (canGoPrev) {
      onPageChange(safePage - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      onPageChange(safePage + 1);
    }
  };

  const handlePageSizeChange = (value: string) => {
    if (Number.isNaN(Number(value))) return;
    onPageSizeChange?.(Number(value));
  };

  return (
    <div
      data-slot="pagination"
      className={cn(
        "flex w-full items-center justify-end gap-4 py-3 text-sm text-gray-700",
        "border-t border-gray-50",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className="font-manrope text-xs text-gray-700">Rows per page:</span>

        <div className="w-16">
          <Select
            disabled={disabled || !onPageSizeChange}
            defaultValue={`${pageSize}`}
            onValueChange={handlePageSizeChange}
            data-testid="pagination--items-per-page"
          >
            <SelectTrigger variant="ghost" disabled={disabled}>
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptions.map((option) => (
                <SelectItem key={option} value={`${option}`}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Range + pagination controls */}
      <div className="flex items-center gap-4">
        <p data-slot="pagination-range" className="text-xs text-gray-600 whitespace-nowrap">
          {totalItems === 0 ? "0 of 0" : `${startIndex} – ${endIndex} of ${totalItems}`}
        </p>

        <div className="flex items-center gap-x-1">
          <button
            data-slot="pagination-prev"
            type="button"
            onClick={handlePrev}
            disabled={!canGoPrev}
            aria-label="Previous page"
            className="size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45"
          >
            <ChevronLeft className="size-4" />
          </button>

          <button
            data-slot="pagination-next"
            type="button"
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next page"
            className="size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
