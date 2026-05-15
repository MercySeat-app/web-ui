import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { TimePicker, type TimePickerProps } from "./timepicker";

const meta: Meta<typeof TimePicker> = {
  title: "Components/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A custom 12-hour `hh:mm AM/PM` time field. The component accepts and emits 24-hour " +
          "`HH:mm` strings but always displays the value in the 12-hour format, regardless of " +
          "how the user typed it. Supports optional `minTime` / `maxTime` ranges and a typeahead " +
          "listbox when `options` is provided.",
      },
    },
    backgrounds: {
      default: "surface",
      values: [
        { name: "surface", value: "#EFF1F5" },
        { name: "white", value: "#FFFFFF" },
      ],
    },
  },
  argTypes: {
    placeholder: { control: { type: "text" } },
    minTime: { control: { type: "text" }, description: "Lower bound in 24h `HH:mm`." },
    maxTime: { control: { type: "text" }, description: "Upper bound in 24h `HH:mm`." },
    options: { control: { type: "object" } },
    disabled: { control: { type: "boolean" } },
  },
  args: {
    placeholder: "hh:mm AM/PM",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

function Harness(props: Omit<TimePickerProps, "value" | "onChange">) {
  const [time, setTime] = useState<string | undefined>();
  return (
    <div className="flex w-72 flex-col gap-2">
      <TimePicker {...props} value={time} onChange={(t) => setTime(t || undefined)} />
      <p className="text-xs text-muted-foreground">
        {"24h value: "}
        <code>{time ?? "undefined"}</code>
      </p>
    </div>
  );
}

export const Default: Story = {
  render: (args) => <Harness {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Type `14:30` and tab out — the field reformats to `02:30 PM` while `onChange` emits `14:30`.",
      },
    },
  },
};

function PreselectedHarness(props: Omit<TimePickerProps, "value" | "onChange">) {
  const [time, setTime] = useState<string | undefined>("14:30");
  return (
    <div className="flex w-72 flex-col gap-2">
      <TimePicker {...props} value={time} onChange={(t) => setTime(t || undefined)} />
      <p className="text-xs text-muted-foreground">
        {"24h value: "}
        <code>{time ?? "undefined"}</code>
      </p>
    </div>
  );
}

export const Preselected: Story = {
  render: (args) => <PreselectedHarness {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Initial 24-hour value flows in via the `value` prop and is displayed as 12-hour.",
      },
    },
  },
};

export const WithRange: Story = {
  render: (args) => <Harness {...args} />,
  args: { minTime: "09:00", maxTime: "17:00" },
  parameters: {
    docs: {
      description: {
        story:
          "When the entered time falls outside `[minTime, maxTime]`, the field is marked `aria-invalid` " +
          "and the destructive border tokens apply. Try typing `08:30` or `19:00`.",
      },
    },
  },
};

export const WithTypeaheadOptions: Story = {
  render: (args) => <Harness {...args} />,
  args: {
    options: [
      "09:00",
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Provide `options` (24-hour strings) to enable a typeahead listbox. The listbox filters " +
          "by case-insensitive `startsWith` against both 12-hour and 24-hour forms.",
      },
    },
  },
};

export const TypeaheadWithRange: Story = {
  render: (args) => <Harness {...args} />,
  args: {
    minTime: "10:00",
    maxTime: "12:00",
    options: [
      "08:00",
      "08:30",
      "09:00",
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Options outside `[minTime, maxTime]` are hidden from the listbox.",
      },
    },
  },
};

export const Labeled: Story = {
  render: (args) => (
    <div className="flex w-72 flex-col gap-1">
      <label htmlFor="meeting-time" className="text-sm font-medium">
        Meeting time
      </label>
      <Harness {...args} id="meeting-time" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Associate the field with an external label via `id` + `<label htmlFor>`.",
      },
    },
  },
};

export const WithErrorMessage: Story = {
  render: (args) => (
    <div className="flex w-72 flex-col gap-1">
      <label htmlFor="window-time" className="text-sm font-medium">
        Booking window
      </label>
      <Harness {...args} id="window-time" aria-describedby="window-time-error" />
      <p id="window-time-error" className="text-xs text-bright-red-600">
        Please pick a time between 9 AM and 5 PM.
      </p>
    </div>
  ),
  args: { minTime: "09:00", maxTime: "17:00" },
  parameters: {
    docs: {
      description: {
        story:
          "Reference the error message via `aria-describedby` so screen readers announce it when " +
          "the field becomes invalid.",
      },
    },
  },
};

export const Disabled: Story = {
  render: (args) => <Harness {...args} />,
  args: { disabled: true },
};
