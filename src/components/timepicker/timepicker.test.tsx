import { describe, it, expect, vi } from "vitest";
import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TimePicker, type TimePickerProps } from "./timepicker";

/**
 * Controlled wrapper used by tests so the component behaves like it would in
 * a real consumer (where `value` flows back from state after `onChange`).
 */
function ControlledTimePicker({
  initialValue,
  onChange,
  ...rest
}: Omit<TimePickerProps, "value" | "onChange"> & {
  initialValue?: string;
  onChange?: (date: string) => void;
}) {
  const [time, setTime] = useState<string | undefined>(initialValue);
  return (
    <TimePicker
      {...rest}
      value={time}
      onChange={(t) => {
        setTime(t || undefined);
        onChange?.(t);
      }}
    />
  );
}

describe("<TimePicker /> — display", () => {
  it("renders an empty input when no value is set", () => {
    render(<ControlledTimePicker placeholder="hh:mm" />);

    const input = screen.getByPlaceholderText("hh:mm") as HTMLInputElement;
    expect(input.value).toBe("");
    expect(input).toHaveAttribute("data-empty", "true");
  });

  it("renders a preset 24h value as 12h AM/PM", () => {
    render(<ControlledTimePicker initialValue="14:30" />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("02:30 PM");
    expect(input).toHaveAttribute("data-empty", "false");
  });

  it("renders midnight as 12:00 AM", () => {
    render(<ControlledTimePicker initialValue="00:00" />);
    expect((screen.getByRole("textbox") as HTMLInputElement).value).toBe("12:00 AM");
  });

  it("renders noon as 12:00 PM", () => {
    render(<ControlledTimePicker initialValue="12:00" />);
    expect((screen.getByRole("textbox") as HTMLInputElement).value).toBe("12:00 PM");
  });

  it("falls back to empty when the incoming value is not a valid 24h time", () => {
    render(<ControlledTimePicker initialValue="not-a-time" />);
    expect((screen.getByRole("textbox") as HTMLInputElement).value).toBe("");
  });
});

describe("<TimePicker /> — typing", () => {
  it("emits the 24h form when a valid 24h time is typed", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker onChange={onChange} />);

    await user.type(screen.getByRole("textbox"), "14:30");

    // onChange fires the moment the value parses to a complete time.
    expect(onChange).toHaveBeenLastCalledWith("14:30");
  });

  it("emits the 24h form when a 12h AM/PM time is typed", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker onChange={onChange} />);

    await user.type(screen.getByRole("textbox"), "2:30 PM");

    expect(onChange).toHaveBeenLastCalledWith("14:30");
  });

  it("reformats the display to 12h on blur", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    await user.type(input, "14:30");
    expect(input.value).toBe("14:30");

    await user.tab();
    expect(input.value).toBe("02:30 PM");
  });

  it("auto-inserts the colon after the second digit", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker onChange={onChange} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    await user.type(input, "2222");

    expect(input.value).toBe("22:22");
    expect(onChange).toHaveBeenLastCalledWith("22:22");
  });

  it("preserves a user-typed colon at an earlier position", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    await user.type(input, "1:30");

    expect(input.value).toBe("1:30");
  });

  it("rejects a fifth digit", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker onChange={onChange} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    await user.type(input, "11111");

    expect(input.value).toBe("11:11");
    expect(onChange).toHaveBeenLastCalledWith("11:11");
  });

  it("drops non-time characters as the user types", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    await user.type(input, "1q4w:e3r0!");

    expect(input.value).toBe("14:30");
  });

  it("emits an empty string when the field is cleared", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker initialValue="14:30" onChange={onChange} />);

    const input = screen.getByRole("textbox");
    await user.clear(input);

    expect(onChange).toHaveBeenLastCalledWith("");
  });

  it("does not emit onChange while the typed input is incomplete", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker onChange={onChange} />);

    await user.type(screen.getByRole("textbox"), "14:3");

    expect(onChange).not.toHaveBeenCalled();
  });

  it("does not emit onChange when hours exceed 23 in 24h input", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker onChange={onChange} />);

    await user.type(screen.getByRole("textbox"), "2500");

    expect(onChange).not.toHaveBeenCalled();
  });

  it("does not emit onChange when 12h input has hours outside 1–12", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker onChange={onChange} />);

    const input = screen.getByRole("textbox");
    // Typing "1300" alone fires `onChange("13:00")` because that's a valid
    // 24h time. Clear the mock and then append "AM" — the masked value
    // becomes "13:00 AM", which `parseTime12` rejects (hours > 12), so no
    // further `onChange` should fire.
    await user.type(input, "1300");
    onChange.mockClear();
    await user.type(input, "AM");

    expect(onChange).not.toHaveBeenCalled();
  });

  it("does not emit onChange when 12h input has minutes greater than 59", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker onChange={onChange} />);

    // Typing the colon explicitly keeps the user's split (1:60), then "AM"
    // makes the input match the 12h regex with out-of-range minutes.
    await user.type(screen.getByRole("textbox"), "1:60 AM");

    expect(onChange).not.toHaveBeenCalled();
  });

  it("emits 00:00 when the user types 12:00 AM (12h midnight)", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker onChange={onChange} />);

    await user.type(screen.getByRole("textbox"), "1200AM");

    expect(onChange).toHaveBeenLastCalledWith("00:00");
  });

  it("emits 12:00 when the user types 12:00 PM (12h noon)", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker onChange={onChange} />);

    await user.type(screen.getByRole("textbox"), "1200PM");

    expect(onChange).toHaveBeenLastCalledWith("12:00");
  });

  it("emits 01:00 when the user types 1:00 AM (12h non-noon AM)", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker onChange={onChange} />);

    await user.type(screen.getByRole("textbox"), "1:00 AM");

    expect(onChange).toHaveBeenLastCalledWith("01:00");
  });

  it("ignores digits typed after the meridiem", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    await user.type(input, "1:30 PM5");

    // The trailing "5" is rejected; the value stays at "1:30 PM".
    expect(input.value).toBe("1:30 PM");
  });

  it("accepts a meridiem letter typed alone, with no digits", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    await user.type(input, "P");

    expect(input.value).toBe("P");
  });

  it("keeps only the first user-typed colon and ignores subsequent ones", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    await user.type(input, "1::30");

    expect(input.value).toBe("1:30");
  });

  it("keeps only the first meridiem letter and ignores extra A/P typed after it", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    await user.type(input, "1:30AP");

    expect(input.value).toBe("1:30 A");
  });

  it("ignores an `M` typed before any `A` or `P`", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    await user.type(input, "M1:30");

    // The leading "M" is dropped because there's no preceding "A"/"P".
    expect(input.value).toBe("1:30");
  });

  it("ignores a leading space typed with no preceding digits", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    await user.type(input, " 1:30");

    expect(input.value).toBe("1:30");
  });
});

describe("<TimePicker /> — validation range", () => {
  it("is not aria-invalid when value falls within [minTime, maxTime]", () => {
    render(<ControlledTimePicker initialValue="10:00" minTime="09:00" maxTime="17:00" />);

    expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-invalid", "true");
  });

  it("is aria-invalid when value is before minTime", () => {
    render(<ControlledTimePicker initialValue="08:00" minTime="09:00" maxTime="17:00" />);

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("is aria-invalid when value is after maxTime", () => {
    render(<ControlledTimePicker initialValue="19:00" minTime="09:00" maxTime="17:00" />);

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("ignores invalid minTime/maxTime strings", () => {
    render(<ControlledTimePicker initialValue="08:00" minTime="not-a-time" maxTime="also-bad" />);

    expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-invalid", "true");
  });

  it("respects an explicit aria-invalid override", () => {
    render(
      <ControlledTimePicker
        initialValue="10:00"
        minTime="09:00"
        maxTime="17:00"
        aria-invalid={true}
      />,
    );

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });
});

describe("<TimePicker /> — typeahead options", () => {
  const OPTIONS = ["09:00", "09:30", "10:00", "13:00", "14:30"];

  it("renders as a combobox when options are provided", () => {
    render(<ControlledTimePicker options={OPTIONS} />);

    const input = screen.getByRole("combobox");
    expect(input).toHaveAttribute("aria-autocomplete", "list");
    expect(input).toHaveAttribute("aria-expanded", "false");
  });

  it("opens the listbox on focus", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker options={OPTIONS} />);

    await user.click(screen.getByRole("combobox"));

    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-expanded", "true");
  });

  it("renders option labels in the 12-hour form", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker options={OPTIONS} />);

    await user.click(screen.getByRole("combobox"));

    const optionLabels = screen.getAllByRole("option").map((el) => el.textContent);
    expect(optionLabels).toEqual([
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "01:00 PM",
      "02:30 PM",
    ]);
  });

  it("filters options by case-insensitive `startsWith` against either 12h or 24h forms", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker options={OPTIONS} />);

    const input = screen.getByRole("combobox");
    await user.click(input);
    await user.type(input, "14");

    // Only "14:30" (whose 24h form starts with "14") should remain.
    const optionLabels = screen.getAllByRole("option").map((el) => el.textContent);
    expect(optionLabels).toEqual(["02:30 PM"]);
  });

  it("silently drops options whose string is not a valid 24h time", async () => {
    const user = userEvent.setup();
    render(
      <ControlledTimePicker options={["not-a-time", "10:00", "garbage"]} />,
    );

    await user.click(screen.getByRole("combobox"));

    const optionLabels = screen.getAllByRole("option").map((el) => el.textContent);
    expect(optionLabels).toEqual(["10:00 AM"]);
  });

  it("hides options outside [minTime, maxTime]", async () => {
    const user = userEvent.setup();
    render(
      <ControlledTimePicker options={OPTIONS} minTime="10:00" maxTime="13:00" />,
    );

    await user.click(screen.getByRole("combobox"));

    const optionLabels = screen.getAllByRole("option").map((el) => el.textContent);
    expect(optionLabels).toEqual(["10:00 AM", "01:00 PM"]);
  });

  it("selects an option on click and emits the 24h form", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker options={OPTIONS} onChange={onChange} />);

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "02:30 PM" }));

    expect(onChange).toHaveBeenLastCalledWith("14:30");
    expect((screen.getByRole("combobox") as HTMLInputElement).value).toBe("02:30 PM");
  });

  it("navigates options with arrow keys and selects with Enter", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker options={OPTIONS} onChange={onChange} />);

    const input = screen.getByRole("combobox");
    await user.click(input);
    await user.keyboard("{ArrowDown}{ArrowDown}{Enter}");

    // First ArrowDown opens & moves to index 0 ("09:00 AM"); second ArrowDown
    // moves to index 1 ("09:30 AM"); Enter selects it.
    expect(onChange).toHaveBeenLastCalledWith("09:30");
  });

  it("closes the listbox on Escape", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker options={OPTIONS} />);

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("re-opens the listbox with ArrowDown after Escape", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker options={OPTIONS} />);

    await user.click(screen.getByRole("combobox"));
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("wraps from the first option to the last with ArrowUp", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker options={OPTIONS} onChange={onChange} />);

    const input = screen.getByRole("combobox");
    await user.click(input);
    // First ArrowDown moves to index 0 ("09:00"). ArrowUp from index 0 wraps
    // to the last option ("14:30"). Enter selects.
    await user.keyboard("{ArrowDown}{ArrowUp}{Enter}");

    expect(onChange).toHaveBeenLastCalledWith("14:30");
  });

  it("moves to the previous option with ArrowUp from a middle index", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker options={OPTIONS} onChange={onChange} />);

    const input = screen.getByRole("combobox");
    await user.click(input);
    // 0 -> 1 -> 2 -> back to 1 -> select "09:30".
    await user.keyboard("{ArrowDown}{ArrowDown}{ArrowDown}{ArrowUp}{Enter}");

    expect(onChange).toHaveBeenLastCalledWith("09:30");
  });

  it("does not re-open the listbox on non-ArrowDown keys after Escape", async () => {
    const user = userEvent.setup();
    render(<ControlledTimePicker options={OPTIONS} />);

    await user.click(screen.getByRole("combobox"));
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    // ArrowUp / Enter / Escape should not re-open the listbox — only ArrowDown does.
    await user.keyboard("{ArrowUp}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("ignores ArrowUp / ArrowDown when no options match the typed filter", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ControlledTimePicker options={OPTIONS} onChange={onChange} />);

    const input = screen.getByRole("combobox");
    await user.click(input);
    await user.type(input, "23"); // No option starts with "23".

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    await user.keyboard("{ArrowDown}{ArrowUp}{Enter}");

    // No option was selectable, so onChange shouldn't have been called with a picked option.
    expect(onChange).not.toHaveBeenCalledWith("09:00");
  });
});

describe("<TimePicker /> — accessibility", () => {
  it("forwards `id` so external <label htmlFor> works", () => {
    render(
      <>
        <label htmlFor="meeting">Meeting</label>
        <ControlledTimePicker id="meeting" />
      </>,
    );

    expect(screen.getByLabelText("Meeting")).toBeInTheDocument();
  });

  it("forwards aria-label, aria-labelledby, and aria-describedby", () => {
    render(
      <>
        <span id="lbl">Custom label</span>
        <ControlledTimePicker
          aria-label="Pick a time"
          aria-labelledby="lbl"
          aria-describedby="hint"
        />
        <p id="hint">Hint</p>
      </>,
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-label", "Pick a time");
    expect(input).toHaveAttribute("aria-labelledby", "lbl");
    expect(input).toHaveAttribute("aria-describedby", "hint");
  });

  it("forwards `name` and `disabled` to the underlying input", () => {
    render(<ControlledTimePicker name="meeting" disabled />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("name", "meeting");
    expect(input).toBeDisabled();
  });
});
