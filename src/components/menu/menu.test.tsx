import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Menu } from "./menu";
import { Pencil, Trash2 } from "lucide-react";

describe("Menu", () => {
  it("renders trigger element", () => {
    render(
      <Menu
        items={[]}
      >
        <button type="button">Open Menu</button>
      </Menu>
    );

    expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
  });

  it("opens menu when trigger is clicked", async () => {
    const user = userEvent.setup();
    
    render(
      <Menu
        items={[
          {
            label: "Edit",
            icon: <Pencil className="w-4 h-4" />,
            onClick: vi.fn(),
          },
        ]}
      >
        <button type="button">Open Menu</button>
      </Menu>
    );

    const trigger = screen.getByRole("button", { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Edit")).toBeInTheDocument();
    });
  });

  it("renders menu items with labels", async () => {
    const user = userEvent.setup();
    
    render(
      <Menu
        items={[
          {
            label: "Edit",
            onClick: vi.fn(),
          },
          {
            label: "Delete",
            onClick: vi.fn(),
          },
        ]}
      >
        <button type="button">Open Menu</button>
      </Menu>
    );

    const trigger = screen.getByRole("button", { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Edit")).toBeInTheDocument();
      expect(screen.getByText("Delete")).toBeInTheDocument();
    });
  });

  it("calls onClick when menu item is clicked", async () => {
    const user = userEvent.setup();
    const editHandler = vi.fn();
    const deleteHandler = vi.fn();
    
    render(
      <Menu
        items={[
          {
            label: "Edit",
            onClick: editHandler,
          },
          {
            label: "Delete",
            onClick: deleteHandler,
          },
        ]}
      >
        <button type="button">Open Menu</button>
      </Menu>
    );

    const trigger = screen.getByRole("button", { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Edit")).toBeInTheDocument();
    });

    const editItem = screen.getByText("Edit");
    await user.click(editItem);

    expect(editHandler).toHaveBeenCalledTimes(1);
    expect(deleteHandler).not.toHaveBeenCalled();
  });

  it("renders menu items with icons", async () => {
    const user = userEvent.setup();
    
    render(
      <Menu
        items={[
          {
            label: "Edit",
            icon: <Pencil className="w-4 h-4" data-testid="pencil-icon" />,
            onClick: vi.fn(),
          },
          {
            label: "Delete",
            icon: <Trash2 className="w-4 h-4" data-testid="trash-icon" />,
            onClick: vi.fn(),
          },
        ]}
      >
        <button type="button">Open Menu</button>
      </Menu>
    );

    const trigger = screen.getByRole("button", { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByTestId("pencil-icon")).toBeInTheDocument();
      expect(screen.getByTestId("trash-icon")).toBeInTheDocument();
    });
  });

  it("applies destructive variant styling", async () => {
    const user = userEvent.setup();
    
    render(
      <Menu
        items={[
          {
            label: "Delete",
            variant: "destructive",
            onClick: vi.fn(),
          },
        ]}
      >
        <button type="button">Open Menu</button>
      </Menu>
    );

    const trigger = screen.getByRole("button", { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      const deleteItem = screen.getByRole("menuitem", { name: "Delete" });
      expect(deleteItem).toHaveClass("text-bright-red-600");
    });
  });

  it("disables menu item when disabled prop is true", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    
    render(
      <Menu
        items={[
          {
            label: "Disabled Item",
            disabled: true,
            onClick,
          },
        ]}
      >
        <button type="button">Open Menu</button>
      </Menu>
    );

    const trigger = screen.getByRole("button", { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      const disabledItem = screen.getByRole("menuitem", { name: "Disabled Item" });
      expect(disabledItem).toHaveAttribute("aria-disabled", "true");
    });

    const disabledItem = screen.getByRole("menuitem", { name: "Disabled Item" });
    await user.click(disabledItem);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("closes menu after item click", async () => {
    const user = userEvent.setup();
    
    render(
      <Menu
        items={[
          {
            label: "Edit",
            onClick: vi.fn(),
          },
        ]}
      >
        <button type="button">Open Menu</button>
      </Menu>
    );

    const trigger = screen.getByRole("button", { name: /open menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole("menuitem", { name: "Edit" })).toBeInTheDocument();
    });

    const editItem = screen.getByRole("menuitem", { name: "Edit" });
    await user.click(editItem);

    // Radix UI dropdown menu closes after item selection
    await waitFor(
      () => {
        expect(screen.queryByRole("menuitem", { name: "Edit" })).not.toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});

