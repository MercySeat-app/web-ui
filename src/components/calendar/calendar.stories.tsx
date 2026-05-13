import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

import { Calendar } from "./calendar";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A MercySeat-styled wrapper around `react-day-picker`'s `DayPicker`. " +
          "Supports single date selection, multi-date selection, and date ranges. " +
          "Dropdown navigation (month/year selectors) and week numbers are available via props.",
      },
    },
  },
  argTypes: {
    captionLayout: {
      control: { type: "radio" },
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
      description: "How the month/year header is rendered.",
    },
    showOutsideDays: {
      control: { type: "boolean" },
      description: "Whether to render days from the previous/next month to fill the grid.",
    },
    showWeekNumber: {
      control: { type: "boolean" },
      description: "Render a leading column with ISO week numbers.",
    },
    buttonVariant: {
      control: { type: "select" },
      options: ["gray-ghost", "blue-hepatica-ghost", "blue-hepatica-outline", "blue-hepatica-solid"],
      description: "Variant applied to previous/next navigation buttons.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

/**
 * The default calendar in single-date selection mode. Click any day to select it.
 */
function SingleDateExample() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 4, 13));

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </div>
  );
}

export const Default: Story = {
  render: () => <SingleDateExample />,
  parameters: {
    docs: {
      description: {
        story: "Single date picker — exactly one date can be selected at a time.",
      },
    },
  },
};

/**
 * Multiple-date selection — useful for picking a list of arbitrary days
 * (e.g. holidays, available shifts).
 */
function MultipleDatesExample() {
  const [dates, setDates] = useState<Date[] | undefined>([
    new Date(2026, 4, 5),
    new Date(2026, 4, 13),
    new Date(2026, 4, 22),
  ]);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
      <Calendar mode="multiple" selected={dates} onSelect={setDates} />
    </div>
  );
}

export const MultipleDates: Story = {
  render: () => <MultipleDatesExample />,
  parameters: {
    docs: {
      description: {
        story: "Pick any number of non-contiguous days.",
      },
    },
  },
};

/**
 * Date-range selection — pick a start and an end day; the middle days are
 * highlighted to communicate the range.
 */
function RangeExample() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2026, 4, 6),
    to: new Date(2026, 4, 14),
  });

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
      <Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={1} />
    </div>
  );
}

export const Range: Story = {
  render: () => <RangeExample />,
  parameters: {
    docs: {
      description: {
        story: "Select a contiguous range of days. The two endpoints and the middle are styled distinctly.",
      },
    },
  },
};

/**
 * Two-month range view — common pattern for booking/check-in pickers.
 */
function TwoMonthRangeExample() {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
      <Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} />
    </div>
  );
}

export const TwoMonthRange: Story = {
  render: () => <TwoMonthRangeExample />,
  parameters: {
    docs: {
      description: {
        story: "Range selection with two months visible side-by-side.",
      },
    },
  },
};

/**
 * Dropdown navigation — the month and year headers become selects, so users
 * can jump across years without using the chevron buttons.
 */
function DropdownNavigationExample() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        startMonth={new Date(1990, 0)}
        endMonth={new Date(2040, 11)}
      />
    </div>
  );
}

export const DropdownNavigation: Story = {
  render: () => <DropdownNavigationExample />,
  parameters: {
    docs: {
      description: {
        story:
          "Use `captionLayout=\"dropdown\"` to expose month/year selects. " +
          "`startMonth` / `endMonth` control the year range available in the year dropdown.",
      },
    },
  },
};

/**
 * Calendars commonly need to disable past dates (or weekends, etc.).
 * `react-day-picker` accepts a matcher function or object via the `disabled` prop.
 */
function DisabledDatesExample() {
  const [date, setDate] = useState<Date | undefined>();
  const today = new Date(2026, 4, 13);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={[
          { before: today },
          (d) => d.getDay() === 0 || d.getDay() === 6,
        ]}
        defaultMonth={today}
      />
    </div>
  );
}

export const DisabledDates: Story = {
  render: () => <DisabledDatesExample />,
  parameters: {
    docs: {
      description: {
        story: "Disable past dates and weekends using `react-day-picker`'s matcher API.",
      },
    },
  },
};

/**
 * Show ISO week numbers in a leading column.
 */
function WeekNumbersExample() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
      <Calendar mode="single" selected={date} onSelect={setDate} showWeekNumber />
    </div>
  );
}

export const WithWeekNumbers: Story = {
  render: () => <WeekNumbersExample />,
  parameters: {
    docs: {
      description: {
        story: "Enable the week-number column with `showWeekNumber`.",
      },
    },
  },
};

/**
 * Showcase of the `buttonVariant` prop applied to navigation chevrons.
 */
function ButtonVariantExample() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        buttonVariant="blue-hepatica-outline"
      />
    </div>
  );
}

export const CustomNavButtons: Story = {
  render: () => <ButtonVariantExample />,
  parameters: {
    docs: {
      description: {
        story:
          "The previous/next chevron buttons accept any MercySeat `Button` variant via `buttonVariant`.",
      },
    },
  },
};
