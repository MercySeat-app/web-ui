import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Textarea } from "./textarea";

describe("<Textarea />", () => {
  it("renders a textarea with the correct data-slot", () => {
    render(<Textarea placeholder="Write something..." />);

    const textarea = screen.getByPlaceholderText("Write something...");
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName.toLowerCase()).toBe("textarea");
    expect(textarea).toHaveAttribute("data-slot", "textarea");
  });

  it("merges custom className with base classes", () => {
    render(
      <Textarea
        placeholder="Your bio"
        className="custom-textarea"
      />
    );

    const textarea = screen.getByPlaceholderText("Your bio");

    expect(textarea.className).toContain("border-gray-200");
    expect(textarea.className).toContain("rounded-sm");
    expect(textarea.className).toContain("text-base");
    expect(textarea.className).toContain("shadow-xs");

    expect(textarea.className).toContain("custom-textarea");
  });

  it("supports disabled state", () => {
    render(
      <Textarea
        disabled
        placeholder="Disabled field"
      />
    );

    const textarea = screen.getByPlaceholderText("Disabled field");
    expect(textarea).toBeDisabled();
  });

  it("includes aria-invalid variant classes for error styling", () => {
    render(
      <Textarea
        aria-invalid="true"
        placeholder="With error"
      />
    );

    const textarea = screen.getByPlaceholderText("With error");

    expect(textarea.className).toContain("aria-invalid:border-bright-red-600");
    expect(textarea.className).toContain("aria-invalid:ring-0");
  });

  it("accepts native textarea props like rows and defaultValue", () => {
    render(
      <Textarea
        rows={5}
        defaultValue="Pre-filled content"
      />
    );

    const textarea = screen.getByDisplayValue("Pre-filled content");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute("rows", "5");
  });
});
