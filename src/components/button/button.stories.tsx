// src/components/button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The primary action button for MercySeat. It supports multiple color variants, sizes, and can render as a Radix Slot via `asChild`.",
      },
    },
  },
  argTypes: {
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
      control: { type: "inline-radio" },
      options: ["sm", "md", "lg", "icon"],
    },
    asChild: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Playground: this is what appears first on the Docs page
export const Playground: Story = {
  args: {
    children: "Click me",
    variant: "blue-hepatica-solid",
    size: "md",
    disabled: false,
  },
};

export const BlueHepaticaVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...args} variant="blue-hepatica-solid">
        Solid
      </Button>
      <Button {...args} variant="blue-hepatica-outline">
        Outline
      </Button>
      <Button {...args} variant="blue-hepatica-ghost">
        Ghost
      </Button>
    </div>
  ),
  args: {
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Blue Hepatica is the primary MercySeat brand color. Use the solid variant for primary actions, outline for secondary actions, and ghost for tertiary actions.",
      },
    },
  },
};

export const GrayVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...args} variant="gray-solid">
        Solid
      </Button>
      <Button {...args} variant="gray-outline">
        Outline
      </Button>
      <Button {...args} variant="gray-ghost">
        Ghost
      </Button>
    </div>
  ),
  args: {
    size: "md",
  },
};

export const BrightRedVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...args} variant="bright-red-solid">
        Solid
      </Button>
      <Button {...args} variant="bright-red-outline">
        Outline
      </Button>
      <Button {...args} variant="bright-red-ghost">
        Ghost
      </Button>
    </div>
  ),
  args: {
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Bright red variants are used for destructive or high-attention actions (e.g. delete, cancel subscription).",
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="icon" aria-label="Icon button">
        {/* you can drop an icon here later */}•
      </Button>
    </div>
  ),
  args: {
    variant: "blue-hepatica-solid",
  },
};

export const AsChildLink: Story = {
  render: (args) => (
    <Button {...args} asChild>
      <a href="#docs">Go to docs section</a>
    </Button>
  ),
  args: {
    variant: "gray-ghost",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story:
          "`asChild` allows the button styles to be applied to a different underlying element (like a link) using Radix `Slot`.",
      },
    },
  },
};
