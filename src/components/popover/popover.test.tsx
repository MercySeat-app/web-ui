import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "./popover";

/**
 * Test helper that renders a basic popover fixture.
 */
function BasicPopover({
  defaultOpen = false,
  onOpenChange,
}: {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  return (
    <Popover defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Popover body</PopoverContent>
    </Popover>
  );
}

describe("<Popover />", () => {
  it("renders the trigger with correct data-slot", () => {
    render(<BasicPopover />);

    const trigger = screen.getByRole("button", { name: "Open" });
    expect(trigger).toHaveAttribute("data-slot", "popover-trigger");
  });

  it("does not render content when closed", () => {
    render(<BasicPopover />);

    expect(screen.queryByText("Popover body")).not.toBeInTheDocument();
  });

  it("renders content when defaultOpen is true", () => {
    render(<BasicPopover defaultOpen />);

    expect(screen.getByText("Popover body")).toBeInTheDocument();
  });

  it("opens the popover when the trigger is clicked", async () => {
    const user = userEvent.setup();
    render(<BasicPopover />);

    await user.click(screen.getByRole("button", { name: "Open" }));

    expect(screen.getByText("Popover body")).toBeInTheDocument();
  });

  it("fires onOpenChange when the trigger is clicked", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    render(<BasicPopover onOpenChange={onOpenChange} />);

    await user.click(screen.getByRole("button", { name: "Open" }));

    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("closes when Escape is pressed", async () => {
    const user = userEvent.setup();
    render(<BasicPopover defaultOpen />);

    expect(screen.getByText("Popover body")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByText("Popover body")).not.toBeInTheDocument();
  });

  it("respects controlled `open` prop", () => {
    const { rerender } = render(
      <Popover open={false}>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Controlled body</PopoverContent>
      </Popover>,
    );

    expect(screen.queryByText("Controlled body")).not.toBeInTheDocument();

    rerender(
      <Popover open={true}>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Controlled body</PopoverContent>
      </Popover>,
    );

    expect(screen.getByText("Controlled body")).toBeInTheDocument();
  });
});

describe("<PopoverContent />", () => {
  it("renders content with correct data-slot", () => {
    render(<BasicPopover defaultOpen />);

    const content = screen
      .getByText("Popover body")
      .closest('[data-slot="popover-content"]');
    expect(content).not.toBeNull();
  });

  it("merges custom className on content", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className="custom-content">Body</PopoverContent>
      </Popover>,
    );

    const content = screen
      .getByText("Body")
      .closest('[data-slot="popover-content"]');
    expect(content).toHaveClass("custom-content");
  });

  it("forwards `align` to the underlying primitive", () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent align="end">Aligned end</PopoverContent>
      </Popover>,
    );

    const content = screen
      .getByText("Aligned end")
      .closest('[data-slot="popover-content"]');

    // Radix exposes the resolved alignment via data-align.
    expect(content).toHaveAttribute("data-align", "end");
  });

  it("renders content inside a portal (outside the original DOM subtree)", () => {
    const { container } = render(<BasicPopover defaultOpen />);

    // The content is portalled, so it should not be a descendant of the
    // component's root render container.
    const portaled = screen
      .getByText("Popover body")
      .closest('[data-slot="popover-content"]');

    expect(portaled).not.toBeNull();
    expect(container.contains(portaled)).toBe(false);
  });
});

describe("<PopoverAnchor />", () => {
  it("renders the anchor with correct data-slot when `asChild` is used", () => {
    render(
      <Popover>
        <PopoverAnchor asChild>
          <div data-testid="anchor-target">Anchor</div>
        </PopoverAnchor>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Body</PopoverContent>
      </Popover>,
    );

    expect(screen.getByTestId("anchor-target")).toHaveAttribute(
      "data-slot",
      "popover-anchor",
    );
  });
});
