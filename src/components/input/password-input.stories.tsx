import type { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from "./password-input";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A specialized input for passwords that allows toggling visibility between masked and plain text. Built on top of the `Input` component."
      }
    }
  },
  argTypes: {
    disabled: {
      control: "boolean"
    },
    placeholder: {
      control: "text"
    }
  }
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Playground: Story = {
  args: {
    placeholder: "Enter your password"
  }
};

export const Disabled: Story = {
  args: {
    placeholder: "Password (disabled)",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Password input in a disabled state."
      }
    }
  }
};

export const InsideFormField: Story = {
  render: (args) => (
    <div className="max-w-sm space-y-2">
      <label className="text-sm font-medium text-gray-700" htmlFor="password">
        Password
      </label>
      <PasswordInput id="password" {...args} />
      <p className="text-xs text-gray-500">
        Use at least 8 characters with a mix of letters and numbers.
      </p>
    </div>
  ),
  args: {
    placeholder: "••••••••"
  },
  parameters: {
    docs: {
      description: {
        story:
          "A typical password field within a simple form layout. For full form integration, combine with the `Form` primitives."
      }
    }
  }
};
