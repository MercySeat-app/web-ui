import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioButton } from "./radio-button";

describe("<RadioButton />", () => {
  it("wires label htmlFor to input id using `${name}-${value}`", () => {
    render(
      <RadioButton name="billing" value="monthly" checked={false} onChange={() => {}}>
        Monthly
      </RadioButton>,
    );

    const input = screen.getByRole("radio") as HTMLInputElement;
    const label = input.closest("label") as HTMLLabelElement;

    expect(input).toHaveAttribute("id", "billing-monthly");
    expect(label).toHaveAttribute("for", "billing-monthly");
  });

  it("sets input name and value", () => {
    render(
      <RadioButton name="billing" value="yearly" checked={false} onChange={() => {}}>
        Yearly
      </RadioButton>,
    );

    const input = screen.getByRole("radio") as HTMLInputElement;
    expect(input).toHaveAttribute("name", "billing");
    expect(input).toHaveAttribute("value", "yearly");
  });

  it("reflects checked=true on the input", () => {
    render(
      <RadioButton name="billing" value="monthly" checked onChange={() => {}}>
        Monthly
      </RadioButton>,
    );

    const input = screen.getByRole("radio") as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it("calls onChange with the value when clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <RadioButton name="billing" value="monthly" checked={false} onChange={onChange}>
        Monthly
      </RadioButton>,
    );

    // Clicking the label should toggle the input and trigger onChange
    await user.click(screen.getByText("Monthly"));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("monthly");
  });

  it("does not call onChange when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <RadioButton name="billing" value="monthly" checked={false} disabled onChange={onChange}>
        Monthly
      </RadioButton>,
    );

    const input = screen.getByRole("radio") as HTMLInputElement;
    expect(input).toBeDisabled();

    await user.click(screen.getByText("Monthly"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("applies checked styles to the label when checked=true", () => {
    render(
      <RadioButton name="billing" value="monthly" checked onChange={() => {}}>
        Monthly
      </RadioButton>,
    );

    const input = screen.getByRole("radio");
    const label = input.closest("label") as HTMLLabelElement;

    // From your cn() call:
    // "border-2 border-blue-hepatica-600 bg-blue-hepatica-100"
    expect(label.className).toContain("border-2");
    expect(label.className).toContain("border-blue-hepatica-600");
    expect(label.className).toContain("bg-blue-hepatica-100");
  });

  it("applies disabled styles to the label when disabled=true", () => {
    render(
      <RadioButton name="billing" value="monthly" checked={false} disabled onChange={() => {}}>
        Monthly
      </RadioButton>,
    );

    const input = screen.getByRole("radio");
    const label = input.closest("label") as HTMLLabelElement;

    expect(label.className).toContain("opacity-60");
    expect(label.className).toContain("cursor-not-allowed");
  });

  it("renders children content", () => {
    render(
      <RadioButton name="billing" value="monthly" checked={false} onChange={() => {}}>
        <div>
          <div>Monthly plan</div>
          <div>$10 / month</div>
        </div>
      </RadioButton>,
    );

    expect(screen.getByText("Monthly plan")).toBeInTheDocument();
    expect(screen.getByText("$10 / month")).toBeInTheDocument();
  });
});
