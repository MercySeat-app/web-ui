import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

import { Checkbox } from "./checkbox";

describe("<Checkbox />", () => {
  it("renders a native checkbox input with data-slot=checkbox", () => {
    render(<Checkbox name="agree" value="yes" checked={false} aria-label="Agree" />);

    const input = screen.getByRole("checkbox", { name: "Agree" });
    expect(input).toHaveAttribute("data-slot", "checkbox");
  });

  it("applies disabled checked styles when checked=true and disabled=true", () => {
    render(<Checkbox name="agree" value="yes" checked disabled aria-label="Agree" />);

    const input = screen.getByRole("checkbox", { name: "Agree" });
    const label = input.closest("label") as HTMLLabelElement;
    const box = label.querySelector('[data-slot="checkbox-box"]') as HTMLElement;

    expect(box.className).toContain("bg-gray-200");
  });

  it("reflects checked state on the input", () => {
    render(<Checkbox name="agree" value="yes" checked aria-label="Agree" />);

    const input = screen.getByRole("checkbox", { name: "Agree" }) as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it("calls onChange(true) when clicking an unchecked checkbox", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <Checkbox name="agree" value="yes" checked={false} onChange={onChange} aria-label="Agree" />,
    );

    const input = screen.getByRole("checkbox", { name: "Agree" });
    await user.click(input);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("does not call onChange when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <Checkbox
        name="agree"
        value="yes"
        checked={false}
        disabled
        onChange={onChange}
        aria-label="Agree"
      />,
    );

    const input = screen.getByRole("checkbox", { name: "Agree" });
    await user.click(input);

    expect(onChange).not.toHaveBeenCalled();
  });

  it("sets data-slot attributes on the label and box", () => {
    render(<Checkbox name="agree" value="yes" checked={false} aria-label="Agree" />);

    const input = screen.getByRole("checkbox", { name: "Agree" });
    const label = input.closest("label") as HTMLLabelElement;
    const box = label.querySelector('[data-slot="checkbox-box"]') as HTMLElement;

    expect(label).toHaveAttribute("data-slot", "checkbox-label");
    expect(box).toHaveAttribute("data-slot", "checkbox-box");
    expect(box).toHaveAttribute("aria-hidden", "true");
  });

  it("applies checked styling classes when checked=true", () => {
    render(<Checkbox name="agree" value="yes" checked aria-label="Agree" />);

    const input = screen.getByRole("checkbox", { name: "Agree" });
    const label = input.closest("label") as HTMLLabelElement;
    const box = label.querySelector('[data-slot="checkbox-box"]') as HTMLElement;

    // Your checked + not disabled state includes bg-blue-hepatica-600
    expect(box.className).toContain("bg-blue-hepatica-600");
  });

  it("adds cursor-not-allowed to the label when disabled", () => {
    render(<Checkbox name="agree" value="yes" checked={false} disabled aria-label="Agree" />);

    const input = screen.getByRole("checkbox", { name: "Agree" });
    const label = input.closest("label") as HTMLLabelElement;

    expect(label.className).toContain("cursor-not-allowed");
  });

  it("merges custom className into the checkbox box", () => {
    render(
      <Checkbox
        name="agree"
        value="yes"
        checked={false}
        aria-label="Agree"
        className="custom-box"
      />,
    );

    const input = screen.getByRole("checkbox", { name: "Agree" });
    const label = input.closest("label") as HTMLLabelElement;
    const box = label.querySelector('[data-slot="checkbox-box"]') as HTMLElement;

    expect(box.className).toContain("custom-box");
  });
});
