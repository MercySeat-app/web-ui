import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { PasswordInput } from "./password-input";

describe("<PasswordInput />", () => {
  it("renders an input of type password by default", () => {
    render(<PasswordInput placeholder="Enter password" />);

    const input = screen.getByPlaceholderText("Enter password");
    expect(input).toBeInTheDocument();
    expect(input.tagName.toLowerCase()).toBe("input");
    expect(input).toHaveAttribute("type", "password");
    expect(input).toHaveAttribute("data-slot", "input");
  });

  it("toggles visibility between password and text when the button is clicked", async () => {
    const user = userEvent.setup();
    render(<PasswordInput placeholder="Password" />);

    const input = screen.getByPlaceholderText("Password");
    const toggleButton = screen.getByRole("button");

    expect(input).toHaveAttribute("type", "password");

    await user.click(toggleButton);
    expect(input).toHaveAttribute("type", "text");

    await user.click(toggleButton);
    expect(input).toHaveAttribute("type", "password");
  });

  it("renders the correct icon depending on visibility state", async () => {
    const user = userEvent.setup();
    render(<PasswordInput placeholder="Password" />);

    const toggleButton = screen.getByRole("button");

    const initialIcon = toggleButton.querySelector("svg");
    expect(initialIcon).toBeInTheDocument();

    await user.click(toggleButton);

    const toggledIcon = toggleButton.querySelector("svg");
    expect(toggledIcon).toBeInTheDocument();

    expect(toggledIcon).not.toBe(initialIcon);
  });

  it("merges custom className into the underlying Input", () => {
    render(
      <PasswordInput
        className="custom-input"
        placeholder="With custom class"
      />
    );

    const input = screen.getByPlaceholderText("With custom class");
    expect(input.className).toContain("custom-input");
    expect(input.className).toContain("pr-10");
  });

  it("supports disabled state", () => {
    render(<PasswordInput disabled placeholder="Disabled password" />);

    const input = screen.getByPlaceholderText("Disabled password");
    expect(input).toBeDisabled();
  });
});
