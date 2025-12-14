// src/components/button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "./menu-item";
import { Icon } from "../icons";

const meta: Meta<typeof MenuItem> = {
  title: "Components/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "app",
      values: [{ name: "app", value: "#EFF1F5" }],
    },
    docs: {
      description: {
        component: "The menu item seen in the sidebar menu",
      },
    },
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

// Playground: this is what appears first on the Docs page
export const Playground: Story = {
  args: {
    children: (
      <a href="#">
        <Icon name="church" />
        <span>Organization</span>
      </a>
    ),
    disabled: false,
  },
};
