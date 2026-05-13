import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { TimePicker, parseTimeInput } from "./time-picker";

// ---------------------------------------------------------------------------
// parseTimeInput unit tests
// ---------------------------------------------------------------------------

describe("parseTimeInput()", () => {
  it("returns '' for empty string", () => {
    expect(parseTimeInput("")).toBe("");
    expect(parseTimeInput("  ")).toBe("");
  });

  it("parses 24-hour HH:mm strings", () => {
    expect(parseTimeInput("14:30")).toBe("14:30");
    expect(parseTimeInput("00:00")).toBe("00:00");
    expect(parseTimeInput("23:59")).toBe("23:59");
    expect(parseTimeInput("9:05")).toBe("09:05");
  });

  it("parses 12-hour strings with AM/PM", () => {
    expect(parseTimeInput("2:30 PM")).toBe("14:30");
    expect(parseTimeInput("2:30PM")).toBe("14:30");
    expect(parseTimeInput("12:00 AM")).toBe("00:00");
    expect(parseTimeInput("12:00 PM")).toBe("12:00");
    expect(parseTimeInput("9am")).toBe("09:00");
    expect(parseTimeInput("9 AM")).toBe("09:00");
    expect(parseTimeInput("3:00 PM")).toBe("15:00");
  });

  it("parses compact digit strings", () => {
    expect(parseTimeInput("930")).toBe("09:30");
    expect(parseTimeInput("1430")).toBe("14:30");
  });

  it("parses bare hour numbers", () => {
    expect(parseTimeInput("9")).toBe("09:00");
    expect(parseTimeInput("14")).toBe("14:00");
  });

  it("returns null for invalid input", () => {
    expect(parseTimeInput("not a time")).toBeNull();
    expect(parseTimeInput("25:00")).toBeNull();
    expect(parseTimeInput("abc")).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Component integration tests
// ---------------------------------------------------------------------------

describe("<TimePicker />", () => {
  it("renders the text input with placeholder when no value is set", () => {
    render(<TimePicker value="" onChange={() => {}} />);
    expect(screen.getByPlaceholderText("e.g. 2:30 PM")).toBeInTheDocument();
  });

  it("shows a formatted 12-hour time in the input when value is set", () => {
    render(<TimePicker value="14:30" onChange={() => {}} />);
    expect(screen.getByRole("textbox")).toHaveValue("2:30 PM");
  });

  it("opens the slot dropdown when the chevron button is clicked", async () => {
    const user = userEvent.setup();
    render(<TimePicker value="" onChange={() => {}} />);

    await user.click(screen.getByRole("button", { name: "Open time picker" }));
    expect(screen.getByText("12:00 AM")).toBeInTheDocument();
  });

  it("clicking a slot calls onChange with HH:mm and closes the dropdown", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimePicker value="" onChange={onChange} />);

    await user.click(screen.getByRole("button", { name: "Open time picker" }));
    await user.click(screen.getByText("2:00 PM"));

    expect(onChange).toHaveBeenCalledWith("14:00");
    expect(screen.queryByText("12:00 AM")).not.toBeInTheDocument();
  });

  it("the active slot is highlighted in the dropdown when value is set", async () => {
    const user = userEvent.setup();
    render(<TimePicker value="09:00" onChange={() => {}} />);

    await user.click(screen.getByRole("button", { name: "Open time picker" }));

    const allMatches = screen.getAllByText("9:00 AM");
    const slotButton = allMatches.find((el) => el.tagName === "BUTTON");
    expect(slotButton).toBeDefined();
    expect(slotButton!.className).toContain("text-blue-600");
  });

  it("typing a valid time and blurring calls onChange with HH:mm", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimePicker value="" onChange={onChange} />);

    const input = screen.getByRole("textbox");
    await user.type(input, "3:00 PM");
    await user.tab();

    expect(onChange).toHaveBeenCalledWith("15:00");
  });

  it("formats the input to 12-hour after a valid typed value is committed", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn((v) => v);
    // Simulate a controlled component that applies the new value
    const { rerender } = render(<TimePicker value="" onChange={onChange} />);

    const input = screen.getByRole("textbox");
    await user.type(input, "14:30");
    await user.tab();

    expect(onChange).toHaveBeenCalledWith("14:30");
    rerender(<TimePicker value="14:30" onChange={onChange} />);
    expect(input).toHaveValue("2:30 PM");
  });

  it("clears the value when the input is emptied and blurred", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimePicker value="14:30" onChange={onChange} />);

    const input = screen.getByRole("textbox");
    await user.clear(input);
    await user.tab();

    expect(onChange).toHaveBeenCalledWith("");
  });

  it("reverts to the last valid value when invalid text is typed and blurred", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimePicker value="14:30" onChange={onChange} />);

    const input = screen.getByRole("textbox");
    await user.clear(input);
    await user.type(input, "not a time");
    await user.tab();

    expect(onChange).not.toHaveBeenCalled();
    expect(input).toHaveValue("2:30 PM");
  });

  it("pressing Escape closes the dropdown", async () => {
    const user = userEvent.setup();
    render(<TimePicker value="" onChange={() => {}} />);

    await user.click(screen.getByRole("button", { name: "Open time picker" }));
    expect(screen.getByText("12:00 AM")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByText("12:00 AM")).not.toBeInTheDocument();
  });

  it("clicking outside closes the dropdown", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <TimePicker value="" onChange={() => {}} />
        <button>Outside</button>
      </div>,
    );

    await user.click(screen.getByRole("button", { name: "Open time picker" }));
    expect(screen.getByText("12:00 AM")).toBeInTheDocument();

    await user.click(screen.getByText("Outside"));
    expect(screen.queryByText("12:00 AM")).not.toBeInTheDocument();
  });
});
