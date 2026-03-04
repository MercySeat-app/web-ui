import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

/**
 * Test fixture for rendering an open dialog.
 */
function OpenDialog({
  showContentCloseButton = true,
  showFooterCloseButton = false,
}: {
  showContentCloseButton?: boolean;
  showFooterCloseButton?: boolean;
}) {
  return (
    <Dialog defaultOpen>
      <DialogTrigger>Open dialog</DialogTrigger>
      <DialogContent showCloseButton={showContentCloseButton}>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>Dialog description</DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton={showFooterCloseButton}>
          <button type="button">Confirm</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Tests for the Dialog component set.
 */
describe("<Dialog />", () => {
  it("renders open dialog content with data slots", () => {
    render(<OpenDialog />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dialog-content"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dialog-overlay"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dialog-header"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dialog-footer"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dialog-title"]')).toBeInTheDocument();
    expect(document.querySelector('[data-slot="dialog-description"]')).toBeInTheDocument();
  });

  it("renders the default icon close button in dialog content", () => {
    render(<OpenDialog />);

    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  it("hides the content close button when showCloseButton is false", () => {
    render(<OpenDialog showContentCloseButton={false} />);

    expect(screen.queryByRole("button", { name: "Close" })).not.toBeInTheDocument();
  });

  it("renders the footer close button when requested", () => {
    render(<OpenDialog showContentCloseButton={false} showFooterCloseButton />);

    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument();
  });

  it("closes when the trigger is used and then the close button is clicked", () => {
    render(
      <Dialog>
        <DialogTrigger>Open dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogDescription>Dialog description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );

    fireEvent.click(screen.getByRole("button", { name: "Open dialog" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
