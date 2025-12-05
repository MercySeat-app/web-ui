import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LogoLockup } from "./logo-lockup";

describe("<LogoLockup />", () => {
  it("renders the MercySeat wordmark text", () => {
    render(<LogoLockup />);

    const text = screen.getByText("MercySeat");
    expect(text).toBeInTheDocument();
  });

  it("renders an SVG logo inside", () => {
    render(<LogoLockup />);

    const text = screen.getByText("MercySeat");
    const wrapper = text.closest("div") as HTMLDivElement | null;
    expect(wrapper).not.toBeNull();

    const svg = wrapper!.querySelector("svg");
    expect(svg).not.toBeNull();
  });

  it("passes size down to Logo", () => {
    render(<LogoLockup size={40} />);

    const text = screen.getByText("MercySeat");
    const wrapper = text.closest("div") as HTMLDivElement | null;
    expect(wrapper).not.toBeNull();

    const svg = wrapper!.querySelector("svg") as SVGSVGElement | null;
    expect(svg).not.toBeNull();
    expect(svg!.getAttribute("width")).toBe("40");
    expect(svg!.getAttribute("height")).toBe("40");
  });

  it("merges custom className on the wrapper", () => {
    render(<LogoLockup className="justify-center" />);

    const text = screen.getByText("MercySeat");
    const wrapper = text.closest("div") as HTMLDivElement | null;
    expect(wrapper).not.toBeNull();
    expect(wrapper!.className).toContain("inline-flex");
    expect(wrapper!.className).toContain("justify-center");
  });
});
