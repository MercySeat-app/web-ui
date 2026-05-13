import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { DateRange } from "react-day-picker";

import { Calendar } from "./calendar";

/**
 * Fixed "today" used as the default month for every render so tests are
 * deterministic regardless of when they run.
 */
const TODAY = new Date(2026, 4, 13);

describe("<Calendar />", () => {
  it("renders inside a `data-slot=\"calendar\"` root", () => {
    render(<Calendar defaultMonth={TODAY} />);

    expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument();
  });

  it("renders the current month caption and weekday headers", () => {
    render(<Calendar defaultMonth={TODAY} />);

    // "May 2026" caption — react-day-picker renders the full month name by default.
    expect(screen.getByText(/May 2026/i)).toBeInTheDocument();

    // Weekday headers — react-day-picker defaults to 2-letter abbreviations.
    // Use `getAllByText` for those that can collide with day numbers (e.g. "M").
    expect(screen.getAllByText(/Mo|Tu|We|Th|Fr|Sa|Su/i).length).toBeGreaterThan(0);
  });

  it("renders the previous and next month navigation buttons", () => {
    render(<Calendar defaultMonth={TODAY} />);

    expect(screen.getByRole("button", { name: /previous month/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next month/i })).toBeInTheDocument();
  });

  it("forwards `className` to the underlying DayPicker root", () => {
    render(<Calendar defaultMonth={TODAY} className="custom-calendar" />);

    // The class is applied to the DayPicker root (which contains our custom Root slot).
    expect(document.querySelector(".custom-calendar")).toBeInTheDocument();
  });

  it("respects `showOutsideDays={false}`", () => {
    const { rerender } = render(<Calendar defaultMonth={TODAY} showOutsideDays />);

    const outsideWithFlag = document.querySelectorAll("[data-outside]");

    rerender(<Calendar defaultMonth={TODAY} showOutsideDays={false} />);

    const outsideWithoutFlag = document.querySelectorAll("[data-outside]");

    // When outside days are hidden, react-day-picker omits or marks them differently,
    // so the count should drop (or stay zero on months where the grid aligns perfectly).
    expect(outsideWithoutFlag.length).toBeLessThanOrEqual(outsideWithFlag.length);
  });

  it("renders week numbers when `showWeekNumber` is true", () => {
    render(<Calendar defaultMonth={TODAY} showWeekNumber />);

    // The week-number column header is added when `showWeekNumber` is true.
    // Each row contains a numeric week label — assert at least one week number is rendered.
    const weekNumberCells = document.querySelectorAll("th[scope='row'], [role='rowheader']");
    expect(weekNumberCells.length).toBeGreaterThan(0);
  });

  it("renders dropdown navigation when `captionLayout=\"dropdown\"`", () => {
    render(
      <Calendar
        defaultMonth={TODAY}
        captionLayout="dropdown"
        startMonth={new Date(2020, 0)}
        endMonth={new Date(2030, 11)}
      />,
    );

    // Month and year selects are rendered as native <select> elements.
    const selects = document.querySelectorAll("select");
    expect(selects.length).toBeGreaterThanOrEqual(2);
  });
});

describe("<Calendar /> — navigation", () => {
  it("advances to the next month when the next button is clicked", async () => {
    const user = userEvent.setup();
    render(<Calendar defaultMonth={TODAY} />);

    expect(screen.getByText(/May 2026/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /next month/i }));

    expect(screen.getByText(/June 2026/i)).toBeInTheDocument();
  });

  it("goes back to the previous month when the previous button is clicked", async () => {
    const user = userEvent.setup();
    render(<Calendar defaultMonth={TODAY} />);

    await user.click(screen.getByRole("button", { name: /previous month/i }));

    expect(screen.getByText(/April 2026/i)).toBeInTheDocument();
  });
});

describe("<Calendar /> — single date selection", () => {
  it("calls `onSelect` with the clicked date", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(
      <Calendar
        mode="single"
        defaultMonth={TODAY}
        onSelect={onSelect}
        showOutsideDays={false}
      />,
    );

    // react-day-picker sets the day button's accessible name to the formatted date,
    // e.g. "Friday, May 15th, 2026" — match the unique day-of-month + year fragment.
    await user.click(screen.getByRole("button", { name: /May 15(th)?,? 2026/i }));

    expect(onSelect).toHaveBeenCalledTimes(1);
    const [selected] = onSelect.mock.calls[0];
    expect(selected).toBeInstanceOf(Date);
    expect((selected as Date).getDate()).toBe(15);
  });

  it("marks the selected day with `data-selected-single`", () => {
    const selected = new Date(2026, 4, 13);

    render(<Calendar mode="single" defaultMonth={TODAY} selected={selected} />);

    const selectedButton = document.querySelector('[data-selected-single="true"]');
    expect(selectedButton).not.toBeNull();
  });

  it("does not call `onSelect` for disabled days", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(
      <Calendar
        mode="single"
        defaultMonth={TODAY}
        onSelect={onSelect}
        showOutsideDays={false}
        disabled={{ before: TODAY }}
      />,
    );

    // The 1st of May is before "today" (13th May) — should be disabled.
    await user.click(screen.getByRole("button", { name: /May 1(st)?,? 2026/i }));

    expect(onSelect).not.toHaveBeenCalled();
  });
});

describe("<Calendar /> — range selection", () => {
  it("marks range start, middle, and end via data attributes", () => {
    const range: DateRange = {
      from: new Date(2026, 4, 6),
      to: new Date(2026, 4, 10),
    };

    render(<Calendar mode="range" defaultMonth={TODAY} selected={range} />);

    expect(document.querySelector('[data-range-start="true"]')).not.toBeNull();
    expect(document.querySelector('[data-range-end="true"]')).not.toBeNull();
    expect(document.querySelectorAll('[data-range-middle="true"]').length).toBeGreaterThan(0);
  });

  it("calls `onSelect` with a DateRange when a day is clicked in range mode", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(
      <Calendar
        mode="range"
        defaultMonth={TODAY}
        onSelect={onSelect}
        showOutsideDays={false}
      />,
    );

    await user.click(screen.getByRole("button", { name: /May 5(th)?,? 2026/i }));

    expect(onSelect).toHaveBeenCalledTimes(1);
    const [selected] = onSelect.mock.calls[0];
    expect((selected as DateRange).from).toBeInstanceOf(Date);
    expect((selected as DateRange).from?.getDate()).toBe(5);
  });
});

describe("<Calendar /> — multiple date selection", () => {
  it("calls `onSelect` with an array of dates", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(
      <Calendar
        mode="multiple"
        defaultMonth={TODAY}
        onSelect={onSelect}
        showOutsideDays={false}
      />,
    );

    await user.click(screen.getByRole("button", { name: /May 5(th)?,? 2026/i }));

    expect(onSelect).toHaveBeenCalledTimes(1);
    const [selected] = onSelect.mock.calls[0];
    expect(Array.isArray(selected)).toBe(true);
    expect((selected as Date[])[0]).toBeInstanceOf(Date);
  });
});

describe("<Calendar /> — today indicator", () => {
  it("renders the `today` matcher onto the configured today date", () => {
    render(<Calendar defaultMonth={TODAY} today={TODAY} />);

    // The "today" cell carries data-today (set by react-day-picker on the gridcell).
    expect(document.querySelector('[data-today="true"]')).not.toBeNull();
  });
});
