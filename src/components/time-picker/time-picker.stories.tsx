import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TimePicker } from "./time-picker";

/**
 * Storybook metadata for TimePicker.
 */
const meta: Meta<typeof TimePicker> = {
  title: "Components/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A Safari-compatible time picker that renders a scrollable list of 15-minute slots inside a Radix UI Popover. Built to replace `<input type=\"time\">` which is unsupported in Safari.",
      },
    },
    backgrounds: {
      default: "surface",
      values: [
        { name: "surface", value: "#EFF1F5" },
        { name: "white", value: "#FFFFFF" },
      ],
    },
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

/**
 * Default uncontrolled-style demo. Click the trigger to open the slot list
 * and select a time.
 */
export const Default: Story = {
  name: "Default (no value)",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-56 p-6">
        <TimePicker value={value} onChange={setValue} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Empty state — trigger shows the placeholder text.",
      },
    },
  },
};

/**
 * Pre-selected value example. The trigger displays the formatted 12-hour
 * time and the popover scrolls to the active slot on open.
 */
export const WithValue: Story = {
  name: "With pre-selected value",
  render: () => {
    const [value, setValue] = useState("14:30");
    return (
      <div className="w-56 p-6">
        <TimePicker value={value} onChange={setValue} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Controlled example with an initial value of `14:30` (2:30 PM). Opening the popover scrolls the active slot into view.",
      },
    },
  },
};

/**
 * Side-by-side layout showing a DatePicker + TimePicker pair, as they appear
 * in event creation forms.
 */
export const DateTimeRow: Story = {
  name: "In a date + time row",
  render: () => {
    const [time, setTime] = useState("10:00");
    return (
      <div className="flex items-center gap-3 rounded-xl bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Date</label>
          <div className="flex h-10 w-40 items-center gap-2 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-900">
            May 15, 2026
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Time</label>
          <div className="w-40">
            <TimePicker value={time} onChange={setTime} />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Typical event-form layout pairing the `TimePicker` with a date display.",
      },
    },
  },
};
