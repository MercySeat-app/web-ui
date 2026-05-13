"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  isBefore,
  startOfDay,
  format,
} from "date-fns";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "../../lib/utils";

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

type DatePickerProps = {
  value: string; // YYYY-MM-DD or ""
  onChange: (value: string) => void;
  "data-testid"?: string;
};

export function DatePicker({
  value,
  onChange,
  "data-testid": testId,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [popupStyle, setPopupStyle] = useState<React.CSSProperties>({});
  const [viewDate, setViewDate] = useState<Date>(() =>
    value ? new Date(`${value}T00:00:00`) : new Date(),
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selectedDate = value ? new Date(`${value}T00:00:00`) : null;
  const today = startOfDay(new Date());

  // Uses fixed positioning so the calendar escapes any overflow-hidden ancestor
  // (e.g. the Section component has overflow-hidden baked into its cva).
  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPopupStyle({
      position: "fixed",
      top: rect.bottom + 4,
      left: rect.left,
      zIndex: 9999,
    });
  }, []);

  const openPicker = () => {
    // Jump to the selected month when re-opening (e.g. editing an existing event)
    if (value) setViewDate(new Date(`${value}T00:00:00`));
    updatePosition();
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    // Capture-phase scroll catches scroll in any ancestor
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, updatePosition]);

  const calendarDays = eachDayOfInterval({
    start: startOfWeek(startOfMonth(viewDate)),
    end: endOfWeek(endOfMonth(viewDate)),
  });

  const handleSelectDay = (day: Date) => {
    if (isBefore(day, today)) return;
    onChange(format(day, "yyyy-MM-dd"));
    setIsOpen(false);
  };

  const displayValue = selectedDate ? format(selectedDate, "MMMM d, yyyy") : "";

  return (
    <div ref={containerRef} className="relative" data-testid={testId}>
      <button
        ref={triggerRef}
        type="button"
        onClick={openPicker}
        className="flex h-10 w-full items-center gap-2 rounded-md border border-gray-200 bg-white px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <CalendarIcon className="size-4 shrink-0 text-gray-400" />
        <span className={cn(displayValue ? "text-gray-900" : "text-gray-400")}>
          {displayValue || "Select a date"}
        </span>
      </button>

      {isOpen && (
        <div
          style={popupStyle}
          className="w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-lg"
        >
          {/* Month navigation */}
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setViewDate((d) => subMonths(d, 1))}
              className="flex size-7 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100"
              aria-label="Previous month"
            >
              <ChevronLeftIcon className="size-4" />
            </button>
            <span className="text-sm font-semibold text-gray-900">
              {format(viewDate, "MMMM yyyy")}
            </span>
            <button
              type="button"
              onClick={() => setViewDate((d) => addMonths(d, 1))}
              className="flex size-7 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100"
              aria-label="Next month"
            >
              <ChevronRightIcon className="size-4" />
            </button>
          </div>

          {/* Weekday labels */}
          <div className="mb-1 grid grid-cols-7">
            {DAY_LABELS.map((label) => (
              <div
                key={label}
                className="flex h-8 items-center justify-center text-xs font-medium text-gray-400"
              >
                {label}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7">
            {calendarDays.map((day) => {
              const isSelected = !!selectedDate && isSameDay(day, selectedDate);
              const isCurrentMonth = isSameMonth(day, viewDate);
              const isPast = isBefore(day, today);
              const isTodayDate = isToday(day);

              return (
                <button
                  key={day.toISOString()}
                  type="button"
                  onClick={() => handleSelectDay(day)}
                  disabled={isPast}
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full text-sm transition-colors",
                    (!isCurrentMonth || isPast) && "text-gray-300",
                    !isPast && isCurrentMonth && !isSelected && "hover:bg-gray-100",
                    isTodayDate && !isSelected && "font-semibold text-blue-600",
                    isSelected && "bg-blue-600 font-semibold text-white",
                  )}
                >
                  {format(day, "d")}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
