import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ChurchIcon, GiftIcon, MinistryIcon, SermonIcon, Icon } from "./index";

describe("Icon components", () => {
  it("ChurchIcon renders an SVG and respects numeric size", () => {
    render(<ChurchIcon size={32} aria-label="Church icon" />);

    const svg = screen.getByRole("img", { name: "Church icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");
    expect(svg).toHaveAttribute("width", "32");
    expect(svg).toHaveAttribute("height", "32");
  });

  it("GiftIcon renders an SVG and respects string size", () => {
    render(<GiftIcon size="1.5rem" aria-label="Gift icon" />);

    const svg = screen.getByRole("img", { name: "Gift icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");
    expect(svg).toHaveAttribute("width", "1.5rem");
    expect(svg).toHaveAttribute("height", "1.5rem");
  });

  it("MinistryIcon is aria-hidden by default when no aria-label is provided", () => {
    const { container } = render(<MinistryIcon />);

    const svg = container.querySelector("svg") as SVGSVGElement | null;
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("role", "presentation");
  });

  it("SermonIcon uses currentColor for stroke", () => {
    const { container } = render(<SermonIcon aria-label="Sermon icon" />);

    const svg = screen.getByRole("img", { name: "Sermon icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("stroke", "currentColor");
  });

  it("<Icon /> registry renders ChurchIcon when name='church'", () => {
    render(
      <Icon name="church" size={24} aria-label="Church icon from registry" />
    );

    const svg = screen.getByRole("img", { name: "Church icon from registry" });
    expect(svg.tagName.toLowerCase()).toBe("svg");
    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");
  });

  it("<Icon /> registry renders GiftIcon when name='gift'", () => {
    render(<Icon name="gift" size={20} aria-label="Gift icon from registry" />);

    const svg = screen.getByRole("img", { name: "Gift icon from registry" });
    expect(svg.tagName.toLowerCase()).toBe("svg");
    expect(svg).toHaveAttribute("width", "20");
    expect(svg).toHaveAttribute("height", "20");
  });
});
