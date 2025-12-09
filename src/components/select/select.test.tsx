import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./select";

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

describe("<Select />", () => {
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
});
