"use client";

/**
 * @file time-picker.tsx
 * @description Safari-compatible time picker built on top of the Radix UI
 * Popover primitive, following the same composition pattern used by the
 * shadcn/ui DatePicker (`Popover` + `PopoverTrigger` + `PopoverContent`).
 *
 * **Why not `<input type="time">`?**
 * Safari (iOS and macOS) does not support the native `<input type="time">`
 * element. This component replaces it with a scrollable list of 15-minute
 * slots rendered inside a Radix Popover so that:
 * - The popup is rendered in a Portal, escaping any `overflow-hidden` ancestor
 *   (e.g. the `Section` component's `cva` base class).
 * - Keyboard dismissal (Escape) and click-outside dismissal are handled natively
 *   by Radix `DismissableLayer` — no manual event listeners needed.
 */

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { ClockIcon } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Time slot data
// ---------------------------------------------------------------------------

/** A single selectable time slot (15-minute interval). */
interface TimeSlot {
  /** 24-hour value string, e.g. `"14:30"`. */
  value: string;
  /** Human-readable 12-hour label, e.g. `"2:30 PM"`. */
  label: string;
}

/**
 * Pre-built array of 96 time slots covering a full 24-hour day in
 * 15-minute increments (00:00 → 23:45).
 */
const TIME_SLOTS: TimeSlot[] = Array.from({ length: 96 }, (_, i) => {
  const totalMinutes = i * 15;
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  const value = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  const period = h < 12 ? "AM" : "PM";
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  const label = `${hour12}:${String(m).padStart(2, "0")} ${period}`;
  return { value, label };
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Converts a 24-hour `HH:mm` string to a 12-hour display string.
 *
 * @param value - A 24-hour time string (`"14:30"`) or an empty string.
 * @returns A formatted 12-hour string (`"2:30 PM"`) or `""` when `value` is empty.
 *
 * @example
 * formatDisplay("09:00"); // → "9:00 AM"
 * formatDisplay("13:45"); // → "1:45 PM"
 * formatDisplay("");      // → ""
 */
function formatDisplay(value: string): string {
  if (!value) return "";
  const [hStr, mStr] = value.split(":");
  const h = Number(hStr);
  const m = Number(mStr);
  const period = h < 12 ? "AM" : "PM";
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

/**
 * Rounds a `HH:mm` value to the nearest 15-minute slot for highlight purposes.
 * Clamps the result to the last available slot (`23:45`).
 *
 * @param value - A 24-hour time string or `""`.
 * @returns The nearest slot value string, e.g. `"14:30"`, or `""` when empty.
 */
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

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/** Props for the {@link TimePicker} component. */
export interface TimePickerProps {
  /**
   * The currently selected time as a 24-hour `HH:mm` string (e.g. `"14:30"`),
   * or an empty string when no time has been selected.
   */
  value: string;
  /**
   * Callback fired when the user selects a time slot.
   * Receives the selected time as a 24-hour `HH:mm` string.
   */
  onChange: (value: string) => void;
  /**
   * Optional `data-testid` attribute forwarded to the root element,
   * useful for targeting the component in tests.
   */
  "data-testid"?: string;
}

/**
 * A Safari-compatible time picker that presents a scrollable list of
 * 15-minute time slots inside a Radix UI Popover.
 *
 * Follows the same shadcn/ui composition pattern as the `DatePicker`:
 * `Popover` → `PopoverTrigger` → `PopoverContent`.
 *
 * The popover is rendered via a Portal so the dropdown always escapes any
 * `overflow-hidden` ancestor (such as the `Section` component).
 *
 * @example
 * ```tsx
 * const [time, setTime] = useState("");
 *
 * <TimePicker value={time} onChange={setTime} />
 * ```
 */
export function TimePicker({
  value,
  onChange,
  "data-testid": testId,
}: TimePickerProps) {
  const [open, setOpen] = React.useState(false);
  const selectedItemRef = React.useRef<HTMLButtonElement>(null);

  const displayValue = formatDisplay(value);
  const activeSlot = nearestSlotValue(value);

  // Scroll the active slot into the centre of the list each time the
  // popover opens so the user sees the current selection immediately.
  React.useEffect(() => {
    if (open && selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView?.({ block: "center" });
    }
  }, [open]);

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        {/*
         * The trigger is a plain <button> styled to match the library's
         * other input-like controls (same height/border as <Input>).
         */}
        <button
          type="button"
          data-testid={testId}
          className="flex h-10 w-full items-center gap-2 rounded-md border border-gray-200 bg-white px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <ClockIcon className="size-4 shrink-0 text-gray-400" />
          <span className={cn(displayValue ? "text-gray-900" : "text-gray-400")}>
            {displayValue || "Select a time"}
          </span>
        </button>
      </PopoverPrimitive.Trigger>

      {/*
       * Portal renders the content outside any overflow-hidden ancestor.
       * Radix DismissableLayer handles Escape and click-outside dismissal.
       */}
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={4}
          className={cn(
            "z-50 max-h-56 w-[var(--radix-popover-trigger-width)]",
            "overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          )}
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
                  setOpen(false);
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
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
