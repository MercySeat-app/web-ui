import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioButton } from "./radio-button";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "app",
      values: [{ name: "app", value: "#EFF1F5" }],
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

function Example() {
  const [selected, setSelected] = useState("monthly");

  return (
    <div className="max-w-md space-y-3">
      <div className="text-sm font-semibold text-gray-900">Billing cadence</div>

      <RadioButton
        name="billing"
        value="monthly"
        checked={selected === "monthly"}
        onChange={setSelected}
      >
        <div className="flex flex-col gap-1">
          <div className="text-sm font-semibold text-gray-900">Monthly</div>
          <div className="text-xs text-gray-600">$10 / month</div>
        </div>
      </RadioButton>

      <RadioButton
        name="billing"
        value="yearly"
        checked={selected === "yearly"}
        onChange={setSelected}
      >
        <div className="flex flex-col gap-1">
          <div className="text-sm font-semibold text-gray-900">Yearly</div>
          <div className="text-xs text-gray-600">$100 / year</div>
        </div>
      </RadioButton>

      <div className="mt-2 text-xs text-gray-600">
        Selected: <span className="font-mono">{selected}</span>
      </div>
    </div>
  );
}

export const Default: Story = {
  render: () => <Example />,
};
