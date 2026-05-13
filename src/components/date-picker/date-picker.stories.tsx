import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./date-picker";

/**
 * Storybook metadata for DatePicker.
 */
const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A Safari-compatible date picker with a custom month-grid calendar. Built to replace `<input type=\"date\">` which is unsupported in Safari. Past dates are disabled; today is highlighted.",
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

type Story = StoryObj<typeof DatePicker>;

/**
 * Default empty state — trigger shows the placeholder.
 */
export const Default: Story = {
  name: "Default (no value)",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-56 p-6">
        <DatePicker value={value} onChange={setValue} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Empty state — trigger shows 'Select a date' placeholder.",
      },
    },
  },
};

/**
 * Pre-selected date. The trigger displays the formatted date and the calendar
 * opens directly to the selected month.
 */
export const WithValue: Story = {
  name: "With pre-selected date",
  render: () => {
    const [value, setValue] = useState("2026-05-20");
    return (
      <div className="w-56 p-6">
        <DatePicker value={value} onChange={setValue} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Controlled example with an initial date of May 20, 2026. The calendar opens to the selected month.",
      },
    },
  },
};

/**
 * Side-by-side layout showing a DatePicker + TimePicker pair as they appear
 * in event creation forms.
 */
export const DateTimeRow: Story = {
  name: "In a date + time row",
  render: () => {
    const [date, setDate] = useState("2026-05-15");
    return (
      <div className="flex items-center gap-3 rounded-xl bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Date</label>
          <div className="w-44">
            <DatePicker value={date} onChange={setDate} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Time</label>
          <div className="flex h-10 w-32 items-center gap-2 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-400">
            Select a time
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Typical event-form layout pairing the `DatePicker` with a time input.",
      },
    },
  },
};
