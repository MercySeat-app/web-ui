import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Stepper } from "./stepper";

/**
 * Tests for the Stepper component.
 */
describe("<Stepper />", () => {
  const steps = [
    { id: "profile", label: "Profile" },
    { id: "address", label: "Address" },
    { id: "billing", label: "Billing", disabled: true },
  ];

  it("renders nav with aria-label and data-slot", () => {
    render(
      <Stepper steps={steps} currentId="profile" onStepChange={() => {}} />
    );

    const nav = screen.getByRole("navigation", { name: /steps/i });
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("data-slot", "steps");
  });

  it("renders all step labels", () => {
    render(
      <Stepper steps={steps} currentId="profile" onStepChange={() => {}} />
    );

    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("Billing")).toBeInTheDocument();
  });

  it("calls onStepChange when clicking a non-current, non-disabled step", async () => {
    const user = userEvent.setup();
    const onStepChange = vi.fn();

    render(
      <Stepper steps={steps} currentId="profile" onStepChange={onStepChange} />
    );

    const buttons = screen.getAllByRole("button");
    await user.click(buttons[1]);

    expect(onStepChange).toHaveBeenCalledTimes(1);
    expect(onStepChange).toHaveBeenCalledWith("address");
  });

  it("does not call onStepChange when clicking the current step", async () => {
    const user = userEvent.setup();
    const onStepChange = vi.fn();

    render(
      <Stepper steps={steps} currentId="profile" onStepChange={onStepChange} />
    );

    const buttons = screen.getAllByRole("button");
    await user.click(buttons[0]);

    expect(onStepChange).not.toHaveBeenCalled();
  });

  it("does not call onStepChange when clicking a disabled step", async () => {
    const user = userEvent.setup();
    const onStepChange = vi.fn();

    render(
      <Stepper steps={steps} currentId="profile" onStepChange={onStepChange} />
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons[2]).toBeDisabled();
    await user.click(buttons[2]);

    expect(onStepChange).not.toHaveBeenCalled();
  });

  it("marks steps before the current one as completed", () => {
    const { container } = render(
      <Stepper steps={steps} currentId="billing" onStepChange={() => {}} />
    );

    const buttons = container.querySelectorAll("button");

    expect(buttons[0]).toHaveClass("bg-blue-hepatica-600");
    expect(buttons[1]).toHaveClass("bg-blue-hepatica-600");
    expect(buttons[2]).toHaveClass("bg-blue-hepatica-600");
  });
});
