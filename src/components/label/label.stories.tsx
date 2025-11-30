import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A text label for form controls. Supports a `required` flag to visually indicate mandatory fields with a red asterisk."
      }
    }
  },
  argTypes: {
    required: {
      control: "boolean"
    },
    htmlFor: {
      control: "text"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Playground: Story = {
  args: {
    children: "Email address",
    required: false,
    htmlFor: "email"
  }
};

export const Required: Story = {
  args: {
    children: "Email address",
    required: true,
    htmlFor: "email-required"
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use `required` to show a red asterisk after the label text, indicating the field is mandatory."
      }
    }
  }
};

export const WithInputExample: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2 max-w-sm">
      <Label {...args} htmlFor="name-input">
        Name
      </Label>
      <input
        id="name-input"
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-hepatica-600"
        placeholder="Enter your name"
      />
    </div>
  ),
  args: {
    required: true
  },
  parameters: {
    docs: {
      description: {
        story:
          "Typical usage of `Label` paired with an input. The `htmlFor` attribute should match the input's `id`."
      }
    }
  }
};
