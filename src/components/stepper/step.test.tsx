import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Step } from "./step";

describe("<Step />", () => {
  it("renders the step number and label", () => {
    render(
      <Step index={0} label="Profile" current={false} onClick={() => {}} />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  it("calls onClick when not current and not disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Step index={1} label="Address" current={false} onClick={onClick} />
    );

    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when current", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Step index={1} label="Address" current onClick={onClick} />);

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
        disabled
        onClick={onClick}
      />
    );

    await user.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("sets data-slot and data-current correctly", () => {
    render(<Step index={0} label="Profile" current onClick={() => {}} />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-slot", "step");
    expect(button).toHaveAttribute("data-current", "true");
  });
});
