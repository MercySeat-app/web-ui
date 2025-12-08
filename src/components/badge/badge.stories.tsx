import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Default badge",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default-filled",
        "default-outline",
        "primary-filled",
        "primary-outline",
        "error-filled",
        "error-outline",
        "warning-filled",
        "warning-outline",
        "success-filled",
        "success-outline",
      ],
    },
    size: {
      control: { type: "inline-radio" },
      options: ["sm", "md"],
    },
    className: {
      control: { type: "text" },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Status / pill badge component used across MercySeat for states, tags, and metadata.",
      },
    },
    backgrounds: {
      default: "white",
      values: [
        { name: "surface", value: "#EFF1F5" },
        { name: "white", value: "#FFFFFF" },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Playground: Story = {
  args: {
    variant: "default-filled",
    size: "sm",
    children: "Draft",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground for the `Badge` component. Use the controls to switch variant, size, and label.",
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="p-6 space-y-4">
      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-500">Default</p>
        <div className="flex flex-wrap gap-3">
          <Badge variant="default-filled">Default filled</Badge>
          <Badge variant="default-outline">Default outline</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-500">Primary</p>
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary-filled">Primary filled</Badge>
          <Badge variant="primary-outline">Primary outline</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-500">Semantic</p>
        <div className="flex flex-wrap gap-3">
          <Badge variant="success-filled">Success filled</Badge>
          <Badge variant="success-outline">Success outline</Badge>
          <Badge variant="warning-filled">Warning filled</Badge>
          <Badge variant="warning-outline">Warning outline</Badge>
          <Badge variant="error-filled">Error filled</Badge>
          <Badge variant="error-outline">Error outline</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Overview of all badge variants on the surface background.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="p-6 space-y-4">
      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-500">Small (sm)</p>
        <div className="flex flex-wrap items-center gap-3">
          <Badge size="sm" variant="primary-filled">
            124 subscribers
          </Badge>
          <Badge size="sm" variant="default-outline">
            Free tier
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-500">Medium (md)</p>
        <div className="flex flex-wrap items-center gap-3">
          <Badge size="md" variant="primary-filled">
            124 subscribers
          </Badge>
          <Badge size="md" variant="default-outline">
            Free tier
          </Badge>
          <Badge size="md" variant="success-outline">
            Live
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Shows the available badge sizes. Use `size="sm"` for compact UI and `size="md"` for slightly more prominent labels.',
      },
    },
  },
};
