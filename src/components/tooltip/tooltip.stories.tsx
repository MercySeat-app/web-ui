import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

const meta: Meta<typeof TooltipContent> = {
  title: "Components/Tooltip",
  component: TooltipContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A popup label that appears on hover or keyboard focus, built on top of Radix UI Tooltip. Useful for providing supplementary information about an element without cluttering the UI.",
      },
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={0}>
        <div className="flex items-center justify-center p-16">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
  argTypes: {
    side: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
      description: "The preferred side of the trigger to render the tooltip.",
    },
    sideOffset: {
      control: { type: "number" },
      description: "Distance in pixels between the tooltip and the trigger.",
    },
    align: {
      control: { type: "select" },
      options: ["start", "center", "end"],
      description: "Alignment of the tooltip relative to the trigger.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TooltipContent>;

export const Playground: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-25"
        >
          Hover me
        </button>
      </TooltipTrigger>
      <TooltipContent {...args}>This is a tooltip</TooltipContent>
    </Tooltip>
  ),
  args: {
    side: "top",
    sideOffset: 6,
  },
};

export const Top: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Top
        </button>
      </TooltipTrigger>
      <TooltipContent side="top">Tooltip on top</TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tooltip positioned above the trigger element.",
      },
    },
  },
};

export const Right: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Right
        </button>
      </TooltipTrigger>
      <TooltipContent side="right">Tooltip on the right</TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tooltip positioned to the right of the trigger element.",
      },
    },
  },
};

export const Bottom: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Bottom
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom">Tooltip on the bottom</TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tooltip positioned below the trigger element.",
      },
    },
  },
};

export const Left: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Left
        </button>
      </TooltipTrigger>
      <TooltipContent side="left">Tooltip on the left</TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tooltip positioned to the left of the trigger element.",
      },
    },
  },
};

export const WithLongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Hover for details
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        This is a longer tooltip message that wraps across multiple lines to demonstrate how the
        component handles extended content.
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates a tooltip with longer text content. Use `max-w-xs` or similar to constrain width.",
      },
    },
  },
};

export const WithCustomDelay: Story = {
  render: () => (
    <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
          >
            500ms delay
          </button>
        </TooltipTrigger>
        <TooltipContent>This tooltip has a 500ms delay</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows how `TooltipProvider` can configure a custom delay before the tooltip appears. Useful when immediate tooltips feel too aggressive.",
      },
    },
  },
};
