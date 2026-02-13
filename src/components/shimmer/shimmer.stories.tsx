import type { Meta, StoryObj } from "@storybook/react";

import { Shimmer } from "./shimmer";

/**
 * Storybook metadata for Shimmer.
 */
const meta: Meta<typeof Shimmer> = {
  title: "Components/Shimmer",
  component: Shimmer,
  tags: ["autodocs"],
  args: {
    className: "h-4 w-48",
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
  },
  parameters: {
    backgrounds: {
      default: "surface",
      values: [
        { name: "surface", value: "#EFF1F5" },
        { name: "white", value: "#FFFFFF" },
      ],
    },
  },
};

export default meta;

/**
 * Story type for Shimmer.
 */
type Story = StoryObj<typeof Shimmer>;

/**
 * Interactive playground for the Shimmer component.
 */
export const Playground: Story = {};

/**
 * Common skeleton shapes using Shimmer.
 */
export const Examples: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div className="space-y-2">
        <Shimmer className="h-6 w-1/2" />
        <Shimmer className="h-4 w-full" />
        <Shimmer className="h-4 w-4/5" />
      </div>

      <div className="flex gap-4 items-center">
        <Shimmer className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Shimmer className="h-4 w-3/4" />
          <Shimmer className="h-3 w-1/2" />
        </div>
      </div>
    </div>
  ),
};
