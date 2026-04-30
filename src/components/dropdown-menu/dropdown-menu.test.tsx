import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./dropdown-menu";

/**
 * Test helper that renders a basic dropdown menu fixture.
 */
function BasicDropdown({
  defaultOpen = false,
  onSelect,
}: {
  defaultOpen?: boolean;
  onSelect?: () => void;
}) {
  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={onSelect}>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

describe("<DropdownMenu />", () => {
  it("renders the trigger with correct data-slot", () => {
    render(<BasicDropdown />);

    const trigger = screen.getByRole("button", { name: "Open Menu" });
    expect(trigger).toHaveAttribute("data-slot", "dropdown-menu-trigger");
  });

  it("does not render content when closed", () => {
    render(<BasicDropdown />);

    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });

  it("renders content when defaultOpen is true", () => {
    render(<BasicDropdown defaultOpen />);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("opens the menu when trigger is clicked", async () => {
    const user = userEvent.setup();
    render(<BasicDropdown />);

    await user.click(screen.getByRole("button", { name: "Open Menu" }));

    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("renders content with correct data-slot", () => {
    render(<BasicDropdown defaultOpen />);

    const content = screen.getByText("Item 1").closest('[data-slot="dropdown-menu-content"]');
    expect(content).not.toBeNull();
  });

  it("merges custom className on content", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent className="custom-content">
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const content = screen.getByText("Item").closest('[data-slot="dropdown-menu-content"]');
    expect(content).toHaveClass("custom-content");
  });
});

describe("<DropdownMenuItem />", () => {
  it("renders items with correct data-slot", () => {
    render(<BasicDropdown defaultOpen />);

    const item = screen.getByText("Item 1").closest('[data-slot="dropdown-menu-item"]');
    expect(item).not.toBeNull();
  });

  it("sets data-variant to default by default", () => {
    render(<BasicDropdown defaultOpen />);

    const item = screen.getByText("Item 1").closest('[data-slot="dropdown-menu-item"]');
    expect(item).toHaveAttribute("data-variant", "default");
  });

  it("supports destructive variant", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const item = screen.getByText("Delete").closest('[data-slot="dropdown-menu-item"]');
    expect(item).toHaveAttribute("data-variant", "destructive");
  });

  it("sets data-inset when inset prop is true", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem inset>Inset Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const item = screen.getByText("Inset Item").closest('[data-slot="dropdown-menu-item"]');
    expect(item).toHaveAttribute("data-inset", "true");
  });

  it("merges custom className on item", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="custom-item">Custom</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const item = screen.getByText("Custom").closest('[data-slot="dropdown-menu-item"]');
    expect(item).toHaveClass("custom-item");
  });

  it("calls onSelect when item is clicked", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(<BasicDropdown defaultOpen onSelect={onSelect} />);

    await user.click(screen.getByText("Item 1"));

    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});

describe("<DropdownMenuCheckboxItem />", () => {
  it("renders checkbox item with correct data-slot", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={false}>Option A</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const item = screen
      .getByText("Option A")
      .closest('[data-slot="dropdown-menu-checkbox-item"]');
    expect(item).not.toBeNull();
  });

  it("renders the check indicator when checked", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked>Checked Item</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const indicator = document.querySelector(
      '[data-slot="dropdown-menu-checkbox-item-indicator"]',
    );
    expect(indicator).toBeInTheDocument();
  });

  it("sets data-inset when inset prop is provided", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={false} inset>
            Inset Checkbox
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const item = screen
      .getByText("Inset Checkbox")
      .closest('[data-slot="dropdown-menu-checkbox-item"]');
    expect(item).toHaveAttribute("data-inset", "true");
  });

  it("toggles checked state on click", async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();

    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={false} onCheckedChange={onCheckedChange}>
            Toggle Me
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    await user.click(screen.getByText("Toggle Me"));

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });
});

describe("<DropdownMenuRadioGroup /> and <DropdownMenuRadioItem />", () => {
  it("renders radio items with correct data-slots", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="a">
            <DropdownMenuRadioItem value="a">Option A</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="b">Option B</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    expect(document.querySelector('[data-slot="dropdown-menu-radio-group"]')).toBeInTheDocument();
    expect(
      screen.getByText("Option A").closest('[data-slot="dropdown-menu-radio-item"]'),
    ).not.toBeNull();
  });

  it("calls onValueChange when a radio item is selected", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="a" onValueChange={onValueChange}>
            <DropdownMenuRadioItem value="a">Option A</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="b">Option B</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    await user.click(screen.getByText("Option B"));

    expect(onValueChange).toHaveBeenCalledWith("b");
  });

  it("sets data-inset on radio item when inset prop is provided", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="a">
            <DropdownMenuRadioItem value="a" inset>
              Inset Radio
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const item = screen
      .getByText("Inset Radio")
      .closest('[data-slot="dropdown-menu-radio-item"]');
    expect(item).toHaveAttribute("data-inset", "true");
  });
});

describe("<DropdownMenuLabel />", () => {
  it("renders label with correct data-slot", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Section Title</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const label = screen.getByText("Section Title");
    expect(label.closest('[data-slot="dropdown-menu-label"]')).not.toBeNull();
  });

  it("sets data-inset when inset prop is true", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel inset>Inset Label</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const label = screen.getByText("Inset Label").closest('[data-slot="dropdown-menu-label"]');
    expect(label).toHaveAttribute("data-inset", "true");
  });

  it("merges custom className on label", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="custom-label">Label</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const label = screen.getByText("Label").closest('[data-slot="dropdown-menu-label"]');
    expect(label).toHaveClass("custom-label");
  });
});

describe("<DropdownMenuSeparator />", () => {
  it("renders separator with correct data-slot", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    expect(document.querySelector('[data-slot="dropdown-menu-separator"]')).toBeInTheDocument();
  });

  it("merges custom className on separator", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator className="custom-separator" />
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const separator = document.querySelector('[data-slot="dropdown-menu-separator"]');
    expect(separator).toHaveClass("custom-separator");
  });
});

describe("<DropdownMenuShortcut />", () => {
  it("renders shortcut text with correct data-slot", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Save
            <DropdownMenuShortcut>Ctrl+S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const shortcut = screen.getByText("Ctrl+S");
    expect(shortcut).toHaveAttribute("data-slot", "dropdown-menu-shortcut");
  });

  it("merges custom className on shortcut", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Action
            <DropdownMenuShortcut className="custom-shortcut">Ctrl+A</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    expect(screen.getByText("Ctrl+A")).toHaveClass("custom-shortcut");
  });
});

describe("<DropdownMenuGroup />", () => {
  it("renders group with correct data-slot", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>Grouped Item</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    expect(document.querySelector('[data-slot="dropdown-menu-group"]')).toBeInTheDocument();
  });
});

describe("<DropdownMenuSub />", () => {
  it("renders sub trigger with correct data-slot and chevron icon", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Sub Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const subTrigger = screen
      .getByText("More")
      .closest('[data-slot="dropdown-menu-sub-trigger"]');
    expect(subTrigger).not.toBeNull();

    // ChevronRightIcon should be rendered inside the sub trigger
    const svg = subTrigger?.querySelector("svg");
    expect(svg).not.toBeNull();
  });

  it("sets data-inset on sub trigger when inset prop is provided", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>Inset Sub</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Sub Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const subTrigger = screen
      .getByText("Inset Sub")
      .closest('[data-slot="dropdown-menu-sub-trigger"]');
    expect(subTrigger).toHaveAttribute("data-inset", "true");
  });

  it("merges custom className on sub trigger", () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="custom-sub-trigger">More</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Sub Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const subTrigger = screen
      .getByText("More")
      .closest('[data-slot="dropdown-menu-sub-trigger"]');
    expect(subTrigger).toHaveClass("custom-sub-trigger");
  });
});

describe("keyboard navigation", () => {
  it("closes the menu when Escape is pressed", async () => {
    const user = userEvent.setup();

    render(<BasicDropdown defaultOpen />);

    expect(screen.getByText("Item 1")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });

  it("navigates items with arrow keys", async () => {
    const user = userEvent.setup();

    render(<BasicDropdown defaultOpen />);

    // Arrow down should move focus through items
    await user.keyboard("{ArrowDown}");
    await user.keyboard("{ArrowDown}");

    // Items should still be visible (navigation doesn't close the menu)
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });
});
