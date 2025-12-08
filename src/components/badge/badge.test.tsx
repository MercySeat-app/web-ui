import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "./badge";

describe("<Badge />", () => {
  it("renders as a span with role=status and data-slot=badge", () => {
    render(<Badge>Active</Badge>);

    const badge = screen.getByText("Active");
    expect(badge.tagName.toLowerCase()).toBe("span");
    expect(badge).toHaveAttribute("role", "status");
    expect(badge).toHaveAttribute("data-slot", "badge");
  });

  it("uses the default variant and size when none are provided", () => {
    render(<Badge>Default badge</Badge>);

    const badge = screen.getByText("Default badge");

    expect(badge).toHaveClass("inline-flex");
    expect(badge).toHaveClass("h-6");
    expect(badge).toHaveClass("bg-gray-50");
    expect(badge).toHaveClass("text-gray-700");
  });

  it("applies the primary-outline / md variant styles when specified", () => {
    render(
      <Badge variant="primary-outline" size="md">
        Primary outline
      </Badge>
    );

    const badge = screen.getByText("Primary outline");

    expect(badge).toHaveClass("h-8");

    expect(badge).toHaveClass("border-blue-hepatica-600");
    expect(badge).toHaveClass("text-blue-hepatica-600");
  });

  it("applies the error-filled variant styles", () => {
    render(<Badge variant="error-filled">Error</Badge>);

    const badge = screen.getByText("Error");

    expect(badge).toHaveClass("bg-bright-red-600");
    expect(badge).toHaveClass("text-white");
  });

  it("merges custom className with variant classes", () => {
    render(
      <Badge className="custom-badge-class" variant="success-outline">
        Success
      </Badge>
    );

    const badge = screen.getByText("Success");

    expect(badge).toHaveClass("custom-badge-class");
    expect(badge).toHaveClass("border-turquoise-green-700");
  });
});
