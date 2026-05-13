import { describe, it, expect, vi } from "vitest";
import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DatePicker, type DatePickerProps } from "./datepicker";

/**
 * Controlled wrapper used by tests so the picker behaves like it would in a
 * real consumer (where `value` flows back from state after `onChange`).
 */
function ControlledDatePicker({
  initialValue,
  onChange,
  ...rest
}: Omit<DatePickerProps, "value" | "onChange"> & {
  initialValue?: Date;
  onChange?: (date: Date | undefined) => void;
}) {
  const [date, setDate] = useState<Date | undefined>(initialValue);
  return (
    <DatePicker
      {...rest}
      value={date}
      onChange={(d) => {
        setDate(d);
        onChange?.(d);
      }}
    />
  );
}

describe("<DatePicker /> — trigger", () => {
  it("renders the placeholder when no date is selected", () => {
    render(<ControlledDatePicker placeholder="Pick a date" />);

    expect(screen.getByText("Pick a date")).toBeInTheDocument();
  });

  it("marks the trigger as empty via `data-empty` when no date is selected", () => {
    render(<ControlledDatePicker placeholder="Pick a date" />);

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveAttribute("data-empty", "true");
    expect(trigger).toHaveAttribute("data-slot", "datepicker-trigger");
  });

  it("renders the formatted date when a value is provided", () => {
    render(<ControlledDatePicker initialValue={new Date(2026, 4, 13)} />);

    // Default format token is "PPP" — e.g. "May 13th, 2026".
    expect(screen.getByText(/May 13(th)?,? 2026/i)).toBeInTheDocument();
  });

  it("clears the `data-empty` flag once a value is provided", () => {
    render(<ControlledDatePicker initialValue={new Date(2026, 4, 13)} />);

    expect(screen.getByRole("button")).toHaveAttribute("data-empty", "false");
  });

  it("uses the custom `dateFormat` when rendering the selected date", () => {
    render(
      <ControlledDatePicker
        initialValue={new Date(2026, 4, 13)}
        dateFormat="yyyy-MM-dd"
      />,
    );

    expect(screen.getByText("2026-05-13")).toBeInTheDocument();
  });

  it("renders the trigger as a non-submitting button", () => {
    render(<ControlledDatePicker />);

    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("merges custom className on the trigger", () => {
    render(<ControlledDatePicker className="custom-trigger" />);

    expect(screen.getByRole("button")).toHaveClass("custom-trigger");
  });
});

describe("<DatePicker /> — popover behavior", () => {
  it("does not render the calendar when closed", () => {
    render(<ControlledDatePicker />);

    // The Calendar's root slot is only present in the portal when open.
    expect(document.querySelector('[data-slot="calendar"]')).not.toBeInTheDocument();
  });

  it("opens the calendar popover when the trigger is clicked", async () => {
    const user = userEvent.setup();
    render(<ControlledDatePicker />);

    await user.click(screen.getByRole("button"));

    expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument();
  });

  it("closes the popover on Escape", async () => {
    const user = userEvent.setup();
    render(<ControlledDatePicker />);

    await user.click(screen.getByRole("button"));
    expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(document.querySelector('[data-slot="calendar"]')).not.toBeInTheDocument();
  });

  it("does not open the popover when disabled", async () => {
    const user = userEvent.setup();
    render(<ControlledDatePicker disabled />);

    await user.click(screen.getByRole("button"));

    expect(document.querySelector('[data-slot="calendar"]')).not.toBeInTheDocument();
  });
});

describe("<DatePicker /> — selection", () => {
  it("calls `onChange` with the clicked date and updates the trigger label", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <ControlledDatePicker
        initialValue={new Date(2026, 4, 1)}
        onChange={onChange}
      />,
    );

    await user.click(screen.getByRole("button"));

    // Click "May 20th, 2026" — the day buttons expose the formatted date as
    // their accessible name.
    await user.click(screen.getByRole("button", { name: /May 20(th)?,? 2026/i }));

    expect(onChange).toHaveBeenCalledTimes(1);
    const [selected] = onChange.mock.calls[0];
    expect(selected).toBeInstanceOf(Date);
    expect((selected as Date).getDate()).toBe(20);

    // The trigger label updates to reflect the new value.
    expect(screen.getByText(/May 20(th)?,? 2026/i)).toBeInTheDocument();
  });

  it("closes the popover after a date is selected", async () => {
    const user = userEvent.setup();

    render(<ControlledDatePicker initialValue={new Date(2026, 4, 1)} />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("button", { name: /May 20(th)?,? 2026/i }));

    expect(document.querySelector('[data-slot="calendar"]')).not.toBeInTheDocument();
  });
});

describe("<DatePicker /> — accessibility", () => {
  it("forwards `id` to the trigger so external <label htmlFor> works", () => {
    render(
      <>
        <label htmlFor="dob">Date of birth</label>
        <ControlledDatePicker id="dob" />
      </>,
    );

    const trigger = screen.getByLabelText("Date of birth");
    expect(trigger.tagName).toBe("BUTTON");
    expect(trigger).toHaveAttribute("id", "dob");
  });

  it("forwards `aria-label` for label-less usage", () => {
    render(<ControlledDatePicker aria-label="Pick an appointment date" />);

    expect(
      screen.getByRole("button", { name: "Pick an appointment date" }),
    ).toBeInTheDocument();
  });

  it("forwards `aria-invalid` and `aria-describedby` for error states", () => {
    render(
      <>
        <ControlledDatePicker aria-invalid aria-describedby="err-msg" />
        <p id="err-msg">Required</p>
      </>,
    );

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveAttribute("aria-invalid", "true");
    expect(trigger).toHaveAttribute("aria-describedby", "err-msg");
  });

  it("forwards `name` so the trigger can be targeted by form helpers", () => {
    render(<ControlledDatePicker name="dob" />);

    expect(screen.getByRole("button")).toHaveAttribute("name", "dob");
  });
});
