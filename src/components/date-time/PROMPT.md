# Add DatePicker & TimePicker to `@mercyseat/web-ui`

## Context

The `DatePicker` and `TimePicker` components were built in `mercyseat-creator` to fix a Safari incompatibility (Safari does not support `<input type="date">` or `<input type="time">`). The TL requested they live in `web-ui` instead.

Key constraints:
- Tests use **vitest** + `@testing-library/react` + `@testing-library/user-event`
- Components use `"use client"`, the `cn` helper from `../../lib/utils`, and `lucide-react`
- `date-fns` is **not yet** in `package.json` — it must be added
- The `Section` component has `overflow-hidden` hardcoded in its `cva` base class. Both popups must use `position: fixed` + `getBoundingClientRect()` to escape it — **do not remove `overflow-hidden` from Section**, other components depend on it

---

## Step 1 — Install `date-fns`

```bash
npm install date-fns
```

---

## Step 2 — Create `src/components/date-time/date-picker.tsx`

```tsx
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
```

---

## Step 3 — Create `src/components/date-time/time-picker.tsx`

```tsx
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
      selectedItemRef.current.scrollIntoView({ block: "center" });
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
```

---

## Step 4 — Create `src/components/date-time/index.ts`

```ts
export * from "./date-picker";
export * from "./time-picker";
```

---

## Step 5 — Update `src/index.ts`

Append after the last `export *` line:

```ts
export * from "./components/date-time";
```

---

## Step 6 — Create `src/components/date-time/date-picker.test.tsx`

Write tests using **vitest** + `@testing-library/react` + `@testing-library/user-event` (same pattern as `src/components/input/input.test.tsx`).

Required cases:
- Renders the trigger with "Select a date" placeholder
- Shows a formatted date (e.g. "May 15, 2026") in the trigger when `value` is set
- Opens the calendar popup when the trigger is clicked
- Displays the correct month heading in the calendar
- Past day buttons are disabled
- Today is not disabled
- Clicking a future day calls `onChange` with the correct `YYYY-MM-DD` string and closes the popup
- Clicking the next-month arrow advances the month heading
- Clicking the prev-month arrow goes back
- Clicking outside the popup closes it
- Pressing Escape closes the popup

---

## Step 7 — Create `src/components/date-time/time-picker.test.tsx`

Required cases:
- Renders the trigger with "Select a time" placeholder
- Shows a formatted 12-hour time (e.g. "2:30 PM") in the trigger when `value` is set
- Opens the time slot list when the trigger is clicked
- Clicking a slot calls `onChange` with the correct `HH:mm` 24-hour string and closes the list
- The active slot is highlighted when `value` is set
- Pressing Escape closes the list
- Clicking outside closes the list

---

## Step 8 — Verify

```bash
npm test
npm run build
```

Both should pass with no errors.
