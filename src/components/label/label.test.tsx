import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "./label";

describe("<Label />", () => {
  it("renders children text", () => {
    render(<Label>Email</Label>);

    const label = screen.getByText("Email");
    expect(label).toBeInTheDocument();
    expect(label.parentElement?.tagName.toLowerCase()).toBe("label");
    expect(label.parentElement).toHaveAttribute("data-slot", "label");
  });

  it("renders a required asterisk when required is true", () => {
    render(<Label required>Email</Label>);

    const label = screen.getByText("Email");
    const star = screen.getByText("*");

    expect(label).toBeInTheDocument();
    expect(star).toBeInTheDocument();
    expect(star).toHaveClass("text-base", "font-normal", "text-bright-red-600", "ml-1");
  });

  it("does not render a required asterisk when required is false", () => {
    render(<Label required={false}>Email</Label>);

    const label = screen.getByText("Email");
    expect(label).toBeInTheDocument();

    const star = screen.queryByText("*");
    expect(star).not.toBeInTheDocument();
  });

  it("merges custom className with base classes", () => {
    render(<Label className="custom-class">Name</Label>);

    const label = screen.getByText("Name").parentElement!;
    expect(label.className).toContain("font-manrope");
    expect(label.className).toContain("font-medium");
    expect(label.className).toContain("text-sm");
    expect(label.className).toContain("text-gray-700");
    expect(label.className).toContain("custom-class");
  });

  it("passes through native label attributes (e.g. htmlFor)", () => {
    render(
      <>
        <Label htmlFor="email-input">Email</Label>
        <input id="email-input" />
      </>,
    );

    const label = screen.getByText("Email").parentElement!;
    expect(label).toHaveAttribute("for", "email-input");
  });

  it("forwards refs to the underlying label element", () => {
    const ref = { current: null as HTMLLabelElement | null };

    render(
      <Label
        ref={(node) => {
          ref.current = node;
        }}
      >
        With ref
      </Label>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName.toLowerCase()).toBe("label");
  });
});
