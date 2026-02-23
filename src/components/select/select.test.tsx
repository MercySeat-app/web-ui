import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from "./select";

/**
 * Test helpers for Select stories.
 */
function ExampleSelect({
  variant = "default",
  size = "default",
  disabled = false,
}: {
  variant?: "default" | "ghost";
  size?: "sm" | "default";
  disabled?: boolean;
}) {
  return (
    <Select>
      <SelectTrigger
        aria-label="Example select"
        variant={variant}
        size={size}
        disabled={disabled}
      >
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
        <SelectItem value="option-2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  );
}

/**
 * Controlled select fixture for value rendering checks.
 */
function ControlledSelect({ value }: { value?: string }) {
  return (
    <Select value={value} onValueChange={() => {}}>
      <SelectTrigger aria-label="Controlled select">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
        <SelectItem value="option-2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  );
}

/**
 * Tests for Select composition and variants.
 */
describe("<Select />", () => {
  beforeAll(() => {
    if (!Element.prototype.scrollIntoView) {
      Object.defineProperty(Element.prototype, "scrollIntoView", {
        value: vi.fn(),
        writable: true,
      });
    }
  });

  it("renders a trigger with data-slot and default variant styles", () => {
    render(<ExampleSelect />);

    // Radix SelectTrigger is exposed as a combobox
    const trigger = screen.getByRole("combobox", {
      name: "Example select",
    });

    expect(trigger).toHaveAttribute("data-slot", "select-trigger");
    expect(trigger).toHaveAttribute("data-size", "default");

    // Default variant styling
    expect(trigger).toHaveClass("flex");
    expect(trigger).toHaveClass("h-10");
    expect(trigger).toHaveClass("border");
    expect(trigger).toHaveClass("border-gray-50");

    // Starts with placeholder text
    expect(trigger).toHaveTextContent("Select an option");
  });

  it("supports ghost variant and small size", () => {
    render(<ExampleSelect variant="ghost" size="sm" />);

    const trigger = screen.getByRole("combobox", {
      name: "Example select",
    });

    expect(trigger).toHaveAttribute("data-size", "sm");
    expect(trigger).toHaveClass("h-6");
    expect(trigger).toHaveClass("text-xs");
    expect(trigger).toHaveClass("border-none");
  });

  it("renders the content and items when the select is open by default", () => {
    render(
      <Select defaultOpen>
        <SelectTrigger aria-label="Example select">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectItem value="option-2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );

    const option1 = screen.getByText("Option 1");
    const option2 = screen.getByText("Option 2");

    const content = option1.closest('[data-slot="select-content"]');
    expect(content).not.toBeNull();

    expect(option1.closest('[data-slot="select-item"]')).not.toBeNull();
    expect(option2.closest('[data-slot="select-item"]')).not.toBeNull();
  });

  it("renders group label and separator with data slots", () => {
    render(
      <Select defaultOpen>
        <SelectTrigger aria-label="Grouped select">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Main</SelectLabel>
            <SelectItem value="option-1">Option 1</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Other</SelectLabel>
            <SelectItem value="option-2">Option 2</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    expect(document.querySelector('[data-slot="select-label"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="select-separator"]')).toBeInTheDocument();
  });

  it("supports non-popper content positioning", () => {
    render(
      <Select defaultOpen>
        <SelectTrigger aria-label="Positioned select">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent position="item-aligned" align="end">
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectItem value="option-2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );

    const option = screen.getByText("Option 1");
    const content = option.closest('[data-slot="select-content"]');
    expect(content).not.toBeNull();
    expect(content).not.toHaveClass("data-[side=bottom]:translate-y-1");
  });

  it("shows the placeholder when no value is selected (controlled)", () => {
    render(<ControlledSelect />);

    const trigger = screen.getByRole("combobox", {
      name: "Controlled select",
    });

    expect(trigger).toHaveTextContent("Select an option");
  });

  it("shows the selected label when a value is provided (controlled)", () => {
    render(<ControlledSelect value="option-2" />);

    const trigger = screen.getByRole("combobox", {
      name: "Controlled select",
    });

    expect(trigger).toHaveTextContent("Option 2");
  });

  it("respects the disabled prop on the trigger", () => {
    render(<ExampleSelect disabled />);

    const trigger = screen.getByRole("combobox", {
      name: "Example select",
    });

    expect(trigger).toBeDisabled();
  });

  it("merges custom className on trigger", () => {
    render(
      <Select>
        <SelectTrigger aria-label="Custom select" className="custom-trigger">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );

    const trigger = screen.getByRole("combobox", { name: "Custom select" });
    expect(trigger).toHaveClass("custom-trigger");
  });
});
