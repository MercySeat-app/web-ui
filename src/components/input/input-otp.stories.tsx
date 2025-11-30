
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  type InputOTPProps
} from "./input-otp";

const meta: Meta<typeof InputOTP> = {
  title: "Components/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "One-time password (OTP) input built on top of `input-otp`. Includes group, slot, and separator components for building accessible multi-slot OTP fields."
      }
    }
  },
  argTypes: {
    maxLength: {
      control: { type: "number" },
      defaultValue: 6
    }
  }
};

export default meta;

type Story = StoryObj<typeof InputOTP>;

function BasicOTPExample(props: InputOTPProps){
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4 max-w-md">
      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-700">
          Enter the 6-digit code
        </p>
        <p className="text-xs text-gray-500">
          We sent a verification code to your email.
        </p>
      </div>

      <InputOTP
        {...props}
        value={value}
        onChange={setValue}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <p className="text-xs text-gray-500">
        Current value: <span className="font-mono">{value || "—"}</span>
      </p>
    </div>
  );
};

function DisabledOTPExample(props: InputOTPProps) {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4 max-w-md">
      <p className="text-sm font-medium text-gray-700">
        Disabled OTP input
      </p>

      <InputOTP
        {...props}
        value={value}
        onChange={setValue}
        disabled
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}

export const Basic: Story = {
  args: {
    maxLength: 6
  },
  render: (args) => <BasicOTPExample {...args} />
};

export const Disabled: Story = {
  args: {
    maxLength: 6
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example of the OTP input in a disabled state. The `has-disabled:opacity-50` class on the container indicates disabled visually."
      }
    }
  },
  render: (args) => <DisabledOTPExample {...args} />
};