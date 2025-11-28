import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";

describe("<Button />", () => {
  it("renders a native button by default", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("data-slot", "button");
  });

  it("uses the default variant and size when none are provided", () => {
    render(<Button>Default</Button>);

    const button = screen.getByRole("button", { name: "Default" });

    // defaultVariants: variant: "blue-hepatica-ghost", size: "md"
    // we check for a couple of characteristic classes
    expect(button.className).toContain("bg-transparent");
    expect(button.className).toContain("hover:bg-blue-hepatica-100");
    expect(button.className).toContain("h-10");
    expect(button.className).toContain("text-sm");
  });

  it("applies the correct classes for a solid variant and size", () => {
    render(
      <Button variant="bright-red-solid" size="lg">
        Delete
      </Button>
    );

    const button = screen.getByRole("button", { name: "Delete" });

    // From your cva config:
    // "bright-red-solid": "bg-bright-red-600 hover:bg-bright-red-800 text-white disabled:bg-gray-100",
    // size "lg": "h-12 text-base"
    expect(button.className).toContain("bg-bright-red-600");
    expect(button.className).toContain("hover:bg-bright-red-800");
    expect(button.className).toContain("text-white");
    expect(button.className).toContain("h-12");
    expect(button.className).toContain("text-base");
  });

  it("merges custom className with variant classes", () => {
    render(
      <Button variant="gray-outline" className="custom-class">
        Custom
      </Button>
    );

    const button = screen.getByRole("button", { name: "Custom" });

    // from variant
    expect(button.className).toContain("border-gray-700");
    // from custom className
    expect(button.className).toContain("custom-class");
  });

  it("calls onClick when clicked and not disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Click</Button>);

    const button = screen.getByRole("button", { name: "Click" });
    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button onClick={onClick} disabled>
        Disabled
      </Button>
    );

    const button = screen.getByRole("button", { name: "Disabled" });
    await user.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders as child component when asChild is true", () => {
    render(
      <Button asChild variant="gray-ghost">
        <a href="/test-link">Go to link</a>
      </Button>
    );

    const link = screen.getByRole("link", { name: "Go to link" });

    // still gets the button styles & data attributes
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test-link");
    expect(link).toHaveAttribute("data-slot", "button");
    expect(link.className).toContain("hover:bg-gray-25");
  });

  it("supports rendering icons (svg children) without crashing", () => {
    render(
      <Button aria-label="Icon button">
        <svg data-testid="icon" />
      </Button>
    );

    const button = screen.getByRole("button", { name: "Icon button" });
    const icon = screen.getByTestId("icon");

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    // from your base class: "[&_svg]:pointer-events-none"
    expect(button.className).toContain("[&_svg]:pointer-events-none");
  });
});
