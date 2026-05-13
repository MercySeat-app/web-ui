import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SettingsIcon } from "lucide-react";

import { Button } from "../button";
import { Calendar } from "../calendar";
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from "./popover";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A Radix-based non-modal popover. Anchors floating content to a trigger element, " +
          "handling positioning, collision detection, and focus management.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="blue-hepatica-outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: "Baseline popover anchored to a button trigger.",
      },
    },
  },
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="blue-hepatica-outline">
          <SettingsIcon />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="popover-name" className="text-xs font-medium">
              Name
            </label>
            <input
              id="popover-name"
              defaultValue="John Doe"
              className="rounded-md border border-gray-200 px-2 py-1 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="popover-email" className="text-xs font-medium">
              Email
            </label>
            <input
              id="popover-email"
              defaultValue="john@example.com"
              className="rounded-md border border-gray-200 px-2 py-1 text-sm"
            />
          </div>
          <Button type="submit" variant="blue-hepatica-solid">
            Save
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story: "A popover hosting an inline form — a common pattern for quick edits.",
      },
    },
  },
};

function DatePickerExample() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="blue-hepatica-outline">
          {date ? date.toLocaleDateString() : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            setDate(d);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

export const AsDatePicker: Story = {
  render: () => <DatePickerExample />,
  parameters: {
    docs: {
      description: {
        story: "Combining `Popover` with `Calendar` to build a date picker.",
      },
    },
  },
};

function ControlledExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <Button variant="blue-hepatica-solid" onClick={() => setOpen((v) => !v)}>
        Toggle from outside
      </Button>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="blue-hepatica-outline">Trigger</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className="text-sm">
            This popover is controlled — open state lives in the parent component.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
  parameters: {
    docs: {
      description: {
        story:
          "Pass `open` and `onOpenChange` to `<Popover />` to control the open state from outside.",
      },
    },
  },
};

export const WithAnchor: Story = {
  render: () => (
    <Popover defaultOpen>
      <PopoverAnchor asChild>
        <div className="rounded-md border border-dashed border-gray-300 px-4 py-6">
          Anchor target
        </div>
      </PopoverAnchor>
      <div className="mt-4">
        <PopoverTrigger asChild>
          <Button variant="blue-hepatica-outline">Trigger elsewhere</Button>
        </PopoverTrigger>
      </div>
      <PopoverContent>
        <p className="text-sm">
          The popover anchors to the dashed box, even though the trigger is below.
        </p>
      </PopoverContent>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Use `PopoverAnchor` to anchor content to an element other than the trigger.",
      },
    },
  },
};
