import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    variant: {
      control: { type: "select" },
      options: [
        "blue-hepatica-solid",
        "blue-hepatica-outline",
        "blue-hepatica-ghost",
        "gray-solid",
        "gray-outline",
        "gray-ghost",
        "bright-red-solid",
        "bright-red-outline",
        "bright-red-ghost",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  args: {
    children: "Button",
    variant: "blue-hepatica-solid",
  },
};

export const BlueHepatica: Story = {
  render: () => (
    <div className="flex flex gap-2">
      <Button variant="blue-hepatica-solid">Solid</Button>
      <Button variant="blue-hepatica-outline">Outline</Button>
      <Button variant="blue-hepatica-ghost">Ghost</Button>
    </div>
  ),
};

export const Gray: Story = {
  render: () => (
    <div className="flex flex gap-2">
      <Button variant="gray-solid">Solid</Button>
      <Button variant="gray-outline">Outline</Button>
      <Button variant="gray-ghost">Ghost</Button>
    </div>
  ),
};

export const BrightRed: Story = {
  render: () => (
    <div className="flex flex gap-2">
      <Button variant="bright-red-solid">Solid</Button>
      <Button variant="bright-red-outline">Outline</Button>
      <Button variant="bright-red-ghost">Ghost</Button>
    </div>
  ),
};
