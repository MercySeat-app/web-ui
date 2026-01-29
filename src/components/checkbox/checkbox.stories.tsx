import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "app",
      values: [{ name: "app", value: "#EFF1F5" }],
    },
  },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "onChange" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

function ControlledExample(
  props: Omit<React.ComponentProps<typeof Checkbox>, "checked" | "onChange">,
) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Checkbox
        {...props}
        checked={checked}
        onChange={(next) => setChecked(next)}
        aria-label="Example checkbox"
        name="example"
        value="1"
      />
      <span className="text-sm text-gray-700">Receive updates</span>
      <span className="text-xs text-gray-500">({checked ? "checked" : "unchecked"})</span>
    </div>
  );
}

export const Playground: Story = {
  render: (args) => <ControlledExample disabled={args.disabled} />,
  args: {
    disabled: false,
  },
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Checkbox checked name="checked" value="yes" aria-label="Checked" />
      <span className="text-sm text-gray-700">Checked</span>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Checkbox checked={false} disabled name="disabled" value="x" aria-label="Disabled" />
      <span className="text-sm text-gray-700">Disabled</span>
    </div>
  ),
};
