import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { TimePicker } from "./time-picker";

describe("<TimePicker />", () => {
  it("renders the trigger with placeholder when no value is set", () => {
    render(<TimePicker value="" onChange={() => {}} />);
    expect(screen.getByText("Select a time")).toBeInTheDocument();
  });

  it("shows a formatted 12-hour time in the trigger when value is set", () => {
    render(<TimePicker value="14:30" onChange={() => {}} />);
    expect(screen.getByText("2:30 PM")).toBeInTheDocument();
  });

  it("opens the time slot list when the trigger is clicked", async () => {
    const user = userEvent.setup();
    render(<TimePicker value="" onChange={() => {}} />);

    await user.click(screen.getByRole("button"));
    expect(screen.getByText("12:00 AM")).toBeInTheDocument();
  });

  it("clicking a slot calls onChange with HH:mm 24-hour string and closes the list", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimePicker value="" onChange={onChange} />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText("2:00 PM"));

    expect(onChange).toHaveBeenCalledWith("14:00");
    expect(screen.queryByText("12:00 AM")).not.toBeInTheDocument();
  });

  it("the active slot is highlighted when value is set", async () => {
    const user = userEvent.setup();
    render(<TimePicker value="09:00" onChange={() => {}} />);

    await user.click(screen.getByRole("button"));

    // Both the trigger span and the slot button contain "9:00 AM" — find the slot button
    const allMatches = screen.getAllByText("9:00 AM");
    const slotButton = allMatches.find((el) => el.tagName === "BUTTON");
    expect(slotButton).toBeDefined();
    expect(slotButton!.className).toContain("text-blue-600");
  });

  it("pressing Escape closes the list", async () => {
    const user = userEvent.setup();
    render(<TimePicker value="" onChange={() => {}} />);

    await user.click(screen.getByRole("button"));
    expect(screen.getByText("12:00 AM")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByText("12:00 AM")).not.toBeInTheDocument();
  });

  it("clicking outside closes the list", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <TimePicker value="" onChange={() => {}} />
        <button>Outside</button>
      </div>,
    );

    await user.click(screen.getByRole("button", { name: /Select a time/i }));
    expect(screen.getByText("12:00 AM")).toBeInTheDocument();

    await user.click(screen.getByText("Outside"));
    expect(screen.queryByText("12:00 AM")).not.toBeInTheDocument();
  });
});
