import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AlertDialog, DialogAction, DialogCancel } from "./alert-dialog";
import { Button } from "../button";

describe("AlertDialog", () => {
  it("renders when open is true", () => {
    render(
      <AlertDialog
        open={true}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </DialogAction>
          </>
        }
      />
    );

    expect(screen.getByText("Test Dialog")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("does not render when open is false", () => {
    render(
      <AlertDialog
        open={false}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </DialogAction>
          </>
        }
      />
    );

    expect(screen.queryByText("Test Dialog")).not.toBeInTheDocument();
  });

  it("renders header content", () => {
    render(
      <AlertDialog
        open={true}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </DialogAction>
          </>
        }
      />
    );

    expect(screen.getByText("Test Dialog")).toBeInTheDocument();
  });

  it("renders content", () => {
    render(
      <AlertDialog
        open={true}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </DialogAction>
          </>
        }
      />
    );

    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("renders action buttons", () => {
    render(
      <AlertDialog
        open={true}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </DialogAction>
          </>
        }
      />
    );

    expect(
      screen.getByRole("button", { name: /confirm/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
  });

  it("renders custom action buttons", () => {
    render(
      <AlertDialog
        open={true}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Keep
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button type="button" variant="bright-red-solid">
                Delete
              </Button>
            </DialogAction>
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
      <AlertDialog
        open={true}
        onOpenChange={onOpenChange}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </DialogAction>
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
      <AlertDialog
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
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </DialogAction>
          </>
        }
      />
    );

    expect(screen.getByText("Warning")).toBeInTheDocument();
  });

  it("renders custom content with rich HTML", () => {
    render(
      <AlertDialog
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
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </DialogAction>
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
      <AlertDialog
        open={true}
        onOpenChange={onOpenChange}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </DialogAction>
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
      <AlertDialog
        open={true}
        onOpenChange={vi.fn()}
        header="Test Dialog"
        content="Test description"
        actions={
          <>
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button type="button" variant="blue-hepatica-solid">
                Confirm
              </Button>
            </DialogAction>
          </>
        }
      />
    );

    // Verify the dialog content is rendered
    expect(screen.getByText("Test Dialog")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });
});
