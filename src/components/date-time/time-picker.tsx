"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ClockIcon } from "lucide-react";
import { cn } from "../../lib/utils";

// Every 15 minutes → 96 slots covering the full day
const TIME_SLOTS = Array.from({ length: 96 }, (_, i) => {
  const totalMinutes = i * 15;
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  const value = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  const period = h < 12 ? "AM" : "PM";
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  const label = `${hour12}:${String(m).padStart(2, "0")} ${period}`;
  return { value, label };
});

function formatDisplay(value: string): string {
  if (!value) return "";
  const [hStr, mStr] = value.split(":");
  const h = Number(hStr);
  const m = Number(mStr);
  const period = h < 12 ? "AM" : "PM";
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

// Snap a HH:mm value to the nearest 15-min slot for highlight purposes
function nearestSlotValue(value: string): string {
  if (!value) return "";
  const [hStr, mStr] = value.split(":");
  const totalMinutes = Number(hStr) * 60 + Number(mStr);
  const rounded = Math.round(totalMinutes / 15) * 15;
  const clamped = Math.min(rounded, 23 * 60 + 45);
  const h = Math.floor(clamped / 60);
  const m = clamped % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

type TimePickerProps = {
  value: string; // HH:mm (24-hour) or ""
  onChange: (value: string) => void;
  "data-testid"?: string;
};

export function TimePicker({
  value,
  onChange,
  "data-testid": testId,
}: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [popupStyle, setPopupStyle] = useState<React.CSSProperties>({});

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const selectedItemRef = useRef<HTMLButtonElement>(null);

  // Uses fixed positioning so the dropdown escapes any overflow-hidden ancestor
  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPopupStyle({
      position: "fixed",
      top: rect.bottom + 4,
      left: rect.left,
      width: rect.width,
      zIndex: 9999,
    });
  }, []);

  const openPicker = () => {
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
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, updatePosition]);

  // Scroll the active slot into view when the list opens
  useEffect(() => {
    if (isOpen && selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView?.({ block: "center" });
    }
  }, [isOpen]);

  const displayValue = formatDisplay(value);
  const activeSlot = nearestSlotValue(value);

  return (
    <div ref={containerRef} className="relative" data-testid={testId}>
      <button
        ref={triggerRef}
        type="button"
        onClick={openPicker}
        className="flex h-10 w-full items-center gap-2 rounded-md border border-gray-200 bg-white px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <ClockIcon className="size-4 shrink-0 text-gray-400" />
        <span className={cn(displayValue ? "text-gray-900" : "text-gray-400")}>
          {displayValue || "Select a time"}
        </span>
      </button>

      {isOpen && (
        <div
          style={popupStyle}
          className="max-h-56 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg"
        >
          {TIME_SLOTS.map((slot) => {
            const isActive = slot.value === activeSlot && !!value;
            return (
              <button
                key={slot.value}
                ref={isActive ? selectedItemRef : undefined}
                type="button"
                onClick={() => {
                  onChange(slot.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex w-full items-center px-4 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-gray-700 hover:bg-gray-50",
                )}
              >
                {slot.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
