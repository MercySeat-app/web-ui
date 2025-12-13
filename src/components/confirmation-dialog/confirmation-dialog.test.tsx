import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { ConfirmationDialog } from "./confirmation-dialog";
import { Button } from "../button";

describe("ConfirmationDialog", () => {
  it("renders when open is true", () => {
    render(
      <ConfirmationDialog
        open={true}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <AlertDialog.Cancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </AlertDialog.Action>
          </>
        }
      />
    );

    expect(screen.getByText("Test Dialog")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("does not render when open is false", () => {
    render(
      <ConfirmationDialog
        open={false}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <AlertDialog.Cancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </AlertDialog.Action>
          </>
        }
      />
    );

    expect(screen.queryByText("Test Dialog")).not.toBeInTheDocument();
  });

  it("renders header content", () => {
    render(
      <ConfirmationDialog
        open={true}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <AlertDialog.Cancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </AlertDialog.Action>
          </>
        }
      />
    );

    expect(screen.getByText("Test Dialog")).toBeInTheDocument();
  });

  it("renders content", () => {
    render(
      <ConfirmationDialog
        open={true}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <AlertDialog.Cancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </AlertDialog.Action>
          </>
        }
      />
    );

    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("renders action buttons", () => {
    render(
      <ConfirmationDialog
        open={true}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <AlertDialog.Cancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </AlertDialog.Action>
          </>
        }
      />
    );

    expect(screen.getByRole("button", { name: /confirm/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
  });

  it("renders custom action buttons", () => {
    render(
      <ConfirmationDialog
        open={true}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <AlertDialog.Cancel asChild>
              <Button type="button" variant="gray-outline">
                Keep
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button type="button" variant="bright-red-solid">
                Delete
              </Button>
            </AlertDialog.Action>
          </>
        }
      />
    );

    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /keep/i })).toBeInTheDocument();
  });

  it("calls onOpenChange when cancel button is clicked", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    render(
      <ConfirmationDialog
        open={true}
        onOpenChange={onOpenChange}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <AlertDialog.Cancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </AlertDialog.Action>
          </>
        }
      />
    );

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    await user.click(cancelButton);

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("renders custom header content", () => {
    render(
      <ConfirmationDialog
        open={true}
        onOpenChange={vi.fn()}
        header={
          <div>
            <span>⚠️</span> <span>Warning</span>
          </div>
        }
        content="Test description"
        actions={
          <>
            <AlertDialog.Cancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </AlertDialog.Action>
          </>
        }
      />
    );

    expect(screen.getByText("Warning")).toBeInTheDocument();
  });

  it("renders custom content with rich HTML", () => {
    render(
      <ConfirmationDialog
        open={true}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content={
          <div>
            <p>This action will affect:</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </div>
        }
        actions={
          <>
            <AlertDialog.Cancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </AlertDialog.Action>
          </>
        }
      />
    );

    expect(screen.getByText("This action will affect:")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("can be closed with ESC key", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    render(
      <ConfirmationDialog
        open={true}
        onOpenChange={onOpenChange}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <AlertDialog.Cancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </AlertDialog.Action>
          </>
        }
      />
    );

    // Press ESC key to close
    await user.keyboard("{Escape}");

    // AlertDialog closes on ESC, which triggers onOpenChange
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("renders dialog content when open", () => {
    render(
      <ConfirmationDialog
        open={true}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <AlertDialog.Cancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </AlertDialog.Action>
          </>
        }
      />
    );

    // Verify the dialog content is rendered
    expect(screen.getByText("Test Dialog")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });
});
