/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Multi-line text input used for long-form user input such as descriptions, comments, or notes. Shares the same visual language as the `Input` component."
      }
    }
  },
  argTypes: {
    disabled: {
      control: "boolean"
    },
    placeholder: {
      control: "text"
    },
    rows: {
      control: { type: "number" }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {
  args: {
    placeholder: "Write something...",
    rows: 4
  }
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="max-w-md space-y-2">
      <label
        className="text-sm font-medium text-gray-700"
        htmlFor="about"
      >
        About you
      </label>
      <Textarea id="about" {...args} />
      <p className="text-xs text-gray-500">
        Share a short bio or anything you'd like others to know.
      </p>
    </div>
  ),
  args: {
    placeholder: "Tell us a bit about yourself...",
    rows: 4
  },
  parameters: {
    docs: {
      description: {
        story:
          "Textarea paired with a label and helper text, as commonly used in forms."
      }
    }
  }
};

export const Disabled: Story = {
  args: {
    placeholder: "This field is disabled",
    disabled: true,
    rows: 3
  },
  parameters: {
    docs: {
      description: {
        story: "Shows how the textarea looks and behaves when disabled."
      }
    }
  }
};

export const WithErrorState: Story = {
  render: (args) => (
    <div className="max-w-md space-y-1">
      <Textarea {...args} />
      <p className="text-sm text-bright-red-600">
        This field is required.
      </p>
    </div>
  ),
  args: {
    placeholder: "Describe the issue...",
    "aria-invalid": true,
    rows: 4
  } as any,
  parameters: {
    docs: {
      description: {
        story:
          "Example of using `aria-invalid` to trigger the error styling on the textarea, combined with an error message below."
      }
    }
  }
};
