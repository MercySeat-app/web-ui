import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { Shimmer } from "./shimmer";

describe("<Shimmer />", () => {
  it("renders a div with data-slot and default classes", () => {
    const { container } = render(<Shimmer />);

    const shimmer = container.firstElementChild;

    expect(shimmer?.tagName.toLowerCase()).toBe("div");
    expect(shimmer).toHaveAttribute("data-slot", "shimmer");
    expect(shimmer).toHaveClass("bg-linear-to-r");
    expect(shimmer).toHaveClass("h-4");
  });

  it("merges className overrides", () => {
    const { container } = render(<Shimmer className="h-8 w-24" />);

    const shimmer = container.firstElementChild;

    expect(shimmer).toHaveClass("h-8");
    expect(shimmer).toHaveClass("w-24");
  });

  it("is hidden from assistive technologies", () => {
    const { container } = render(<Shimmer />);

    const shimmer = container.firstElementChild;

    expect(shimmer).toHaveAttribute("aria-hidden", "true");
  });

  it("applies the shimmer animation class", () => {
    const { container } = render(<Shimmer />);

    const shimmer = container.firstElementChild;

    expect(shimmer).toHaveClass(
      "animate-[shimmer_2.5s_ease-in-out_infinite]",
    );
  });

  it("applies overflow-hidden and rounded-md by default", () => {
    const { container } = render(<Shimmer />);

    const shimmer = container.firstElementChild;

    expect(shimmer).toHaveClass("overflow-hidden");
    expect(shimmer).toHaveClass("rounded-md");
  });

  it("forwards additional HTML attributes to the root div", () => {
    const { container } = render(
      <Shimmer id="skeleton-1" data-testid="my-shimmer" />,
    );

    const shimmer = container.firstElementChild;

    expect(shimmer).toHaveAttribute("id", "skeleton-1");
    expect(shimmer).toHaveAttribute("data-testid", "my-shimmer");
  });

  it("forwards inline styles", () => {
    const { container } = render(
      <Shimmer style={{ maxWidth: "200px" }} />,
    );

    const shimmer = container.firstElementChild as HTMLElement;

    expect(shimmer.style.maxWidth).toBe("200px");
  });

  it("renders without children by default", () => {
    const { container } = render(<Shimmer />);

    const shimmer = container.firstElementChild;

    expect(shimmer?.childNodes).toHaveLength(0);
  });
});
