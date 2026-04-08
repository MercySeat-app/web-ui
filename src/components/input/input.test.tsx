import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "./input";

describe("<Input />", () => {
  it("renders an input with the correct data-slot", () => {
    render(<Input placeholder="Type here" />);

    const input = screen.getByPlaceholderText("Type here");
    expect(input).toBeInTheDocument();
    expect(input.tagName.toLowerCase()).toBe("input");
    expect(input).toHaveAttribute("data-slot", "input");
  });

  it("respects the type prop", () => {
    render(<Input type="password" placeholder="Password" />);

    const input = screen.getByPlaceholderText("Password");
    expect(input).toHaveAttribute("type", "password");
  });

  it("merges custom className with base styles", () => {
    render(<Input className="custom-class" placeholder="Your name" />);

    const input = screen.getByPlaceholderText("Your name");

    expect(input.className).toContain("font-manrope");
    expect(input.className).toContain("border-gray-200");
    expect(input.className).toContain("h-10");
    expect(input.className).toContain("custom-class");
  });

  it("supports disabled state", () => {
    render(<Input disabled placeholder="Disabled field" />);

    const input = screen.getByPlaceholderText("Disabled field");
    expect(input).toBeDisabled();
  });

  it("includes aria-invalid variants in className for error styling", () => {
    render(<Input aria-invalid="true" placeholder="Email" />);

    const input = screen.getByPlaceholderText("Email");

    expect(input.className).toContain("aria-invalid:border-bright-red-600");
    expect(input.className).toContain("aria-invalid:focus-visible:border-bright-red-600");
  });
});
