import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { Shimmer } from "./shimmer";

/**
 * Tests for the Shimmer component.
 */
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
});
