import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Logo } from "./logo";

describe("<Logo />", () => {
  it("renders an SVG with default size", () => {
    const { container } = render(<Logo />);

    const svg = container.querySelector("svg") as SVGSVGElement | null;
    expect(svg).not.toBeNull();
    expect(svg!.getAttribute("width")).toBe("48");
    expect(svg!.getAttribute("height")).toBe("48");
  });

  it("accepts a numeric size and applies it to width and height", () => {
    const { container } = render(<Logo size={32} />);

    const svg = container.querySelector("svg") as SVGSVGElement | null;
    expect(svg).not.toBeNull();
    expect(svg!.getAttribute("width")).toBe("32");
    expect(svg!.getAttribute("height")).toBe("32");
  });

  it("accepts a string size (e.g., rem) and applies it to width and height", () => {
    const { container } = render(<Logo size="2.5rem" />);

    const svg = container.querySelector("svg") as SVGSVGElement | null;
    expect(svg).not.toBeNull();
    expect(svg!.getAttribute("width")).toBe("2.5rem");
    expect(svg!.getAttribute("height")).toBe("2.5rem");
  });

  it("is aria-hidden by default and has role presentation", () => {
    const { container } = render(<Logo />);

    const svg = container.querySelector("svg") as SVGSVGElement | null;
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("role", "presentation");
  });

  it("uses aria-label when provided", () => {
    const { container } = render(
      <Logo size={40} aria-label="MercySeat logo" />
    );

    const svg = container.querySelector("svg") as SVGSVGElement | null;
    expect(svg).not.toBeNull();
    expect(svg).not.toHaveAttribute("aria-hidden");
    expect(svg).toHaveAttribute("aria-label", "MercySeat logo");
  });

  it("merges custom className", () => {
    const { container } = render(<Logo className="text-red-500" />);

    const svg = container.querySelector("svg") as SVGSVGElement | null;
    expect(svg).not.toBeNull();
    expect(
      svg!.className.baseVal || svg!.getAttribute("class") || ""
    ).toContain("inline-block");
    expect(
      svg!.className.baseVal || svg!.getAttribute("class") || ""
    ).toContain("text-red-500");
  });
});
