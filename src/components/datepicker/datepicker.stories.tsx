import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { DatePicker, type DatePickerProps } from "./datepicker";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A single-date picker that composes `Popover` and `Calendar`. The trigger renders a button " +
          "styled like the MercySeat `Input`, and the popover hosts a `Calendar` in single-date mode.",
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
    placeholder: {
      control: { type: "text" },
      description: "Text shown inside the trigger when no date is selected.",
    },
    dateFormat: {
      control: { type: "text" },
      description: "`date-fns` format token for the selected date label.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the trigger so the popover cannot be opened.",
    },
    "aria-invalid": {
      control: { type: "boolean" },
      description: "Marks the field as invalid (applies the destructive border styling).",
    },
  },
  args: {
    placeholder: "Pick a date",
    dateFormat: "PPP",
    disabled: false,
    "aria-invalid": false,
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

/**
 * Internal harness used by every story so the picker is fully controlled,
 * matching how consumers wire it into their own form state.
 */
function Harness(props: Omit<DatePickerProps, "value" | "onChange">) {
  const [date, setDate] = useState<Date | undefined>();
  return <DatePicker {...props} value={date} onChange={setDate} />;
}

export const Default: Story = {
  render: (args) => (
    <div className="w-72">
      <Harness {...args} />
    </div>
  ),
};

export const Preselected: Story = {
  render: (args) => {
    function PreselectedHarness() {
      const [date, setDate] = useState<Date | undefined>(new Date(2026, 4, 13));
      return <DatePicker {...args} value={date} onChange={setDate} />;
    }
    return (
      <div className="w-72">
        <PreselectedHarness />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Initial value passed via state — the trigger renders the formatted date.",
      },
    },
  },
};

export const Labeled: Story = {
  render: (args) => (
    <div className="flex w-72 flex-col gap-1">
      <label htmlFor="dob" className="text-sm font-medium">
        Date of birth
      </label>
      <Harness {...args} id="dob" />
      <p className="text-xs text-muted-foreground">
        {"Pair the picker with a `<label htmlFor>` for the most accessible form pattern."}
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Associate the picker with an external label via `id` + `<label htmlFor>`.",
      },
    },
  },
};

export const Invalid: Story = {
  render: (args) => (
    <div className="flex w-72 flex-col gap-1">
      <label htmlFor="invalid-date" className="text-sm font-medium">
        Appointment date
      </label>
      <Harness {...args} id="invalid-date" aria-describedby="invalid-date-error" />
      <p id="invalid-date-error" className="text-xs text-bright-red-600">
        Please pick a date in the future.
      </p>
    </div>
  ),
  args: {
    "aria-invalid": true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Set `aria-invalid` to render the destructive border, and reference an error message with `aria-describedby` so screen readers announce it.",
      },
    },
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="w-72">
      <Harness {...args} />
    </div>
  ),
  args: { disabled: true },
  parameters: {
    docs: {
      description: {
        story: "Disabled triggers cannot open the popover and do not respond to clicks.",
      },
    },
  },
};

export const CustomFormat: Story = {
  render: (args) => {
    function CustomFormatHarness() {
      const [date, setDate] = useState<Date | undefined>(new Date(2026, 4, 13));
      return <DatePicker {...args} value={date} onChange={setDate} />;
    }
    return (
      <div className="w-72">
        <CustomFormatHarness />
      </div>
    );
  },
  args: { dateFormat: "yyyy-MM-dd" },
  parameters: {
    docs: {
      description: {
        story:
          "Customise the trigger's date label via any [`date-fns` format token](https://date-fns.org/docs/format).",
      },
    },
  },
};
