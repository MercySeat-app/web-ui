/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Text input field used across forms in MercySeat. Supports different input types, disabled state, and integrates with the Form primitives via `FormControl`."
      }
    }
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "number"]
    },
    disabled: {
      control: "boolean"
    },
    placeholder: {
      control: "text"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  args: {
    type: "text",
    placeholder: "Enter some text"
  }
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "you@example.com"
  },
  parameters: {
    docs: {
      description: {
        story: "Commonly used for email fields in forms."
      }
    }
  }
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Shows how the input looks and behaves when disabled."
      }
    }
  }
};

export const WithErrorState: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1 max-w-sm">
      <Input {...args} />
      <p className="text-sm text-bright-red-600">This field is required.</p>
    </div>
  ),
  args: {
    type: "text",
    placeholder: "Invalid value",
    "aria-invalid": true
  } as any,
  parameters: {
    docs: {
      description: {
        story:
          "Example of using the `aria-invalid` attribute to trigger error styling from the input's Tailwind classes."
      }
    }
  }
};
