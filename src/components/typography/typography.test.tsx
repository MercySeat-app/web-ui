import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Typography } from "./typography";

describe("<Typography />", () => {
  it("renders body-md by default as a <p>", () => {
    render(<Typography>Default text</Typography>);

    const el = screen.getByText("Default text");
    expect(el.tagName.toLowerCase()).toBe("p");
    expect(el.className).toContain("font-sans");
    expect(el.className).toContain("text-gray-900");
    expect(el.className).toContain("text-[1rem]");
    expect(el.className).toContain("leading-[1.5]");
  });

  it("renders heading-1 as an <h1> with correct styles", () => {
    render(<Typography variant="heading-1">Heading 1</Typography>);

    const el = screen.getByText("Heading 1");
    expect(el.tagName.toLowerCase()).toBe("h1");
    expect(el.className).toContain("font-semibold");
    expect(el.className).toContain("text-[2.5rem]");
    expect(el.className).toContain("leading-[3rem]");
  });

  it("renders heading-4 as an <h4> with correct styles", () => {
    render(<Typography variant="heading-4">Heading 4</Typography>);

    const el = screen.getByText("Heading 4");
    expect(el.tagName.toLowerCase()).toBe("h4");
    expect(el.className).toContain("font-semibold");
    expect(el.className).toContain("text-[1.25rem]");
    expect(el.className).toContain("leading-[1.5rem]");
  });

  it("renders body-sm as a <p> with correct styles", () => {
    render(<Typography variant="body-sm">Small body</Typography>);

    const el = screen.getByText("Small body");
    expect(el.tagName.toLowerCase()).toBe("p");
    expect(el.className).toContain("font-normal");
    expect(el.className).toContain("text-[0.875rem]");
    expect(el.className).toContain("leading-[1.5]");
  });

  it("renders caption as a <span> with tracking and line-height", () => {
    render(<Typography variant="caption">Caption text</Typography>);

    const el = screen.getByText("Caption text");
    expect(el.tagName.toLowerCase()).toBe("span");
    expect(el.className).toContain("text-[0.75rem]");
    expect(el.className).toContain("leading-[1.66]");
    expect(el.className).toContain("tracking-[0.025rem]");
  });

  it("renders overline as uppercase span with correct tracking and line-height", () => {
    render(<Typography variant="overline">overline text</Typography>);

    const el = screen.getByText(/overline text/i);
    expect(el.tagName.toLowerCase()).toBe("span");
    expect(el.className).toContain("uppercase");
    expect(el.className).toContain("text-[0.75rem]");
    expect(el.className).toContain("leading-[2.66]");
    expect(el.className).toContain("tracking-[0.0625rem]");
  });

  it("allows overriding the underlying tag with `as`", () => {
    render(
      <Typography as="div" variant="heading-2">
        Div heading
      </Typography>
    );

    const el = screen.getByText("Div heading");
    expect(el.tagName.toLowerCase()).toBe("div");
    expect(el.className).toContain("text-[2rem]");
  });

  it("merges custom className with variant styles", () => {
    render(
      <Typography variant="body-md" className="custom-class">
        Custom
      </Typography>
    );

    const el = screen.getByText("Custom");
    expect(el.className).toContain("text-[1rem]");
    expect(el.className).toContain("custom-class");
  });
});
