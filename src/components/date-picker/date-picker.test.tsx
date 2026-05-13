import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { DatePicker } from "./date-picker";

// Fix "today" to May 12, 2026 so tests are deterministic
const FIXED_TODAY = new Date("2026-05-12T00:00:00");

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(FIXED_TODAY);
});

afterEach(() => {
  vi.useRealTimers();
});

function openCalendar(triggerText = "Select a date") {
  fireEvent.click(screen.getByText(triggerText));
}

describe("<DatePicker />", () => {
  it("renders the trigger with placeholder when no value is set", () => {
    render(<DatePicker value="" onChange={() => {}} />);
    expect(screen.getByText("Select a date")).toBeInTheDocument();
  });

  it("shows a formatted date in the trigger when value is set", () => {
    render(<DatePicker value="2026-05-15" onChange={() => {}} />);
    expect(screen.getByText("May 15, 2026")).toBeInTheDocument();
  });

  it("opens the calendar popup when the trigger is clicked", () => {
    render(<DatePicker value="" onChange={() => {}} />);
    openCalendar();
    expect(screen.getByText("May 2026")).toBeInTheDocument();
  });

  it("displays the correct month heading in the calendar", () => {
    render(<DatePicker value="2026-07-04" onChange={() => {}} />);
    openCalendar("July 4, 2026");
    expect(screen.getByText("July 2026")).toBeInTheDocument();
  });

  it("past day buttons are disabled", () => {
    render(<DatePicker value="" onChange={() => {}} />);
    openCalendar();
    // May 11 is yesterday — should be disabled
    const pastDay = screen.getByRole("button", { name: "11" });
    expect(pastDay).toBeDisabled();
  });

  it("today is not disabled", () => {
    render(<DatePicker value="" onChange={() => {}} />);
    openCalendar();
    // May 12 is today — find the enabled "12" button
    const buttons = screen.getAllByRole("button", { name: "12" });
    const todayBtn = buttons.find((b) => !b.hasAttribute("disabled"));
    expect(todayBtn).toBeDefined();
    expect(todayBtn).not.toBeDisabled();
  });

  it("clicking a future day calls onChange with YYYY-MM-DD and closes popup", () => {
    const onChange = vi.fn();
    render(<DatePicker value="" onChange={onChange} />);
    openCalendar();
    fireEvent.click(screen.getByRole("button", { name: "20" }));
    expect(onChange).toHaveBeenCalledWith("2026-05-20");
    expect(screen.queryByText("May 2026")).not.toBeInTheDocument();
  });

  it("clicking the next-month arrow advances the month heading", () => {
    render(<DatePicker value="" onChange={() => {}} />);
    openCalendar();
    fireEvent.click(screen.getByRole("button", { name: "Next month" }));
    expect(screen.getByText("June 2026")).toBeInTheDocument();
  });

  it("clicking the prev-month arrow goes back", () => {
    render(<DatePicker value="" onChange={() => {}} />);
    openCalendar();
    fireEvent.click(screen.getByRole("button", { name: "Previous month" }));
    expect(screen.getByText("April 2026")).toBeInTheDocument();
  });

  it("clicking outside the popup closes it", () => {
    render(
      <div>
        <DatePicker value="" onChange={() => {}} />
        <button>Outside</button>
      </div>,
    );
    openCalendar();
    expect(screen.getByText("May 2026")).toBeInTheDocument();
    fireEvent.mouseDown(screen.getByText("Outside"));
    expect(screen.queryByText("May 2026")).not.toBeInTheDocument();
  });

  it("pressing Escape closes the popup", () => {
    render(<DatePicker value="" onChange={() => {}} />);
    openCalendar();
    expect(screen.getByText("May 2026")).toBeInTheDocument();
    act(() => {
      fireEvent.keyDown(document, { key: "Escape" });
    });
    expect(screen.queryByText("May 2026")).not.toBeInTheDocument();
  });
});
