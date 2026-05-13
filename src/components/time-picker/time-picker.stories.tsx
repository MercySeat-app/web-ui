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
        component: `
A Safari-compatible time picker that combines a **free-text input** with a
**15-minute slot dropdown**.

- **Type** any time directly: \`2:30 PM\`, \`14:30\`, \`9am\`, \`930\` — all normalised to \`HH:mm\` on blur.
- **Pick** a slot from the dropdown for quick selection.
- Built on Radix UI Popover so the dropdown escapes any \`overflow-hidden\` ancestor.
        `.trim(),
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
 * Empty state — input shows placeholder. Try typing `"3pm"`, `"930"`, or
 * `"14:30"` and pressing Tab to see the value normalise.
 */
export const Default: Story = {
  name: "Default (no value)",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-56 p-6">
        <TimePicker value={value} onChange={setValue} />
        {value && (
          <p className="mt-2 text-xs text-gray-500">
            Raw value: <code>{value}</code>
          </p>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Empty state. Type a time (e.g. `3pm`, `14:30`, `9:30 AM`) and press Tab — the input normalises to 12-hour format and the raw `HH:mm` value is shown below.",
      },
    },
  },
};

/**
 * Pre-selected value. The input shows the formatted 12-hour time.
 * Opening the dropdown scrolls the active slot into view.
 */
export const WithValue: Story = {
  name: "With pre-selected value",
  render: () => {
    const [value, setValue] = useState("14:30");
    return (
      <div className="w-56 p-6">
        <TimePicker value={value} onChange={setValue} />
        <p className="mt-2 text-xs text-gray-500">
          Raw value: <code>{value}</code>
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Controlled example with an initial value of `14:30` (2:30 PM). Opening the dropdown scrolls the nearest slot into view.",
      },
    },
  },
};

/**
 * Side-by-side date + time row, as used in event creation forms.
 */
export const DateTimeRow: Story = {
  name: "In a date + time row",
  render: () => {
    const [time, setTime] = useState("10:00");
    return (
      <div className="flex items-end gap-3 rounded-xl bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Date</label>
          <div className="flex h-10 w-44 items-center gap-2 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-900">
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
          "Typical event-form layout pairing the `TimePicker` with a date input.",
      },
    },
  },
};
