import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Step } from "./step";

/**
 * Tests for the Step component.
 */
describe("<Step />", () => {
  it("renders the step number and label", () => {
    render(
      <Step
        index={0}
        label="Profile"
        current={false}
        completed={false}
        onClick={() => {}}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  it("calls onClick when not current and not disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Step
        index={1}
        label="Address"
        current={false}
        completed={false}
        onClick={onClick}
      />
    );

    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when current", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Step
        index={1}
        label="Address"
        current
        completed={false}
        onClick={onClick}
      />
    );

    await user.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("does not call onClick when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Step
        index={2}
        label="Billing"
        current={false}
        completed={false}
        disabled
        onClick={onClick}
      />
    );

    await user.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("sets data-slot and data-current correctly", () => {
    render(
      <Step
        index={0}
        label="Profile"
        current
        completed={false}
        onClick={() => {}}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-slot", "step");
    expect(button).toHaveAttribute("data-current", "true");
  });

  it("renders a check icon for completed steps", () => {
    const { container } = render(
      <Step
        index={0}
        label="Profile"
        current={false}
        completed
        onClick={() => {}}
      />
    );

    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
