import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

function renderTooltip(props?: {
  triggerText?: string;
  contentText?: string;
  delayDuration?: number;
  side?: "top" | "right" | "bottom" | "left";
}) {
  const {
    triggerText = "Hover me",
    contentText = "Tooltip text",
    delayDuration = 0,
    side,
  } = props ?? {};

  return render(
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger>{triggerText}</TooltipTrigger>
        <TooltipContent side={side}>{contentText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>,
  );
}

describe("<Tooltip />", () => {
  it("renders the trigger with the correct data-slot", () => {
    renderTooltip();

    const trigger = screen.getByText("Hover me");
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute("data-slot", "tooltip-trigger");
  });

  it("does not show tooltip content by default", () => {
    renderTooltip();

    expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
  });

  it("shows tooltip content on hover", async () => {
    const user = userEvent.setup();
    renderTooltip();

    const trigger = screen.getByText("Hover me");
    await user.hover(trigger);

    expect(await screen.findByRole("tooltip")).toHaveTextContent("Tooltip text");
  });

  it("is not visible when the tooltip is closed", () => {
    renderTooltip();

    const trigger = screen.getByText("Hover me");
    expect(trigger).toHaveAttribute("data-state", "closed");
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("shows tooltip content on keyboard focus", async () => {
    const user = userEvent.setup();
    renderTooltip();

    await user.tab();

    expect(await screen.findByRole("tooltip")).toHaveTextContent("Tooltip text");
  });

  it("applies the correct data-slot to the content", async () => {
    const user = userEvent.setup();
    renderTooltip();

    await user.hover(screen.getByText("Hover me"));
    await screen.findByRole("tooltip");

    const content = document.querySelector("[data-slot='tooltip-content']");
    expect(content).toBeInTheDocument();
  });

  it("merges custom className with base styles", async () => {
    const user = userEvent.setup();

    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent className="custom-class">Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    await user.hover(screen.getByText("Hover me"));
    await screen.findByRole("tooltip");

    const content = document.querySelector("[data-slot='tooltip-content']");
    expect(content).toBeInTheDocument();
    expect(content!.className).toContain("custom-class");
    expect(content!.className).toContain("bg-gray-25");
  });

  it("supports the asChild prop on the trigger", async () => {
    const user = userEvent.setup();

    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button type="button">Custom trigger</button>
          </TooltipTrigger>
          <TooltipContent>Composed tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    await user.hover(screen.getByText("Custom trigger"));

    expect(await screen.findByRole("tooltip")).toHaveTextContent("Composed tooltip");
  });
});
