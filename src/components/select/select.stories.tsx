import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "./select";

const meta: Meta<typeof SelectTrigger> = {
  title: "Components/Select",
  component: SelectTrigger,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Radix-based select component styled for MercySeat. Compose `Select`, `SelectTrigger`, `SelectValue`, and `SelectContent` for dropdowns, filters, and table controls.",
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
    variant: {
      control: { type: "inline-radio" },
      options: ["default", "ghost"],
    },
    size: {
      control: { type: "inline-radio" },
      options: ["default", "sm"],
    },
  },
  args: {
    variant: "default",
    size: "default",
  },
};

export default meta;

type Story = StoryObj<typeof SelectTrigger>;

export const Basic: Story = {
  name: "Default",
  render: (args) => (
    <div className="p-6">
      <Select defaultValue="monthly">
        <SelectTrigger {...args} aria-label="Billing cadence">
          <SelectValue placeholder="Select cadence" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="monthly">Monthly</SelectItem>
          <SelectItem value="yearly">Yearly</SelectItem>
          <SelectItem value="lifetime">Lifetime</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Default select for primary forms. Uses the bordered trigger and standard 40px height.",
      },
    },
  },
};

export const GhostToolbar: Story = {
  name: "Ghost variant (toolbar)",
  render: () => (
    <div className="p-6">
      <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm border border-gray-100">
        <div className="text-sm font-medium text-gray-900">Subscribers</div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">Filter</span>
          <Select defaultValue="all">
            <SelectTrigger
              variant="ghost"
              size="sm"
              aria-label="Subscription status"
            >
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="canceled">Canceled</SelectItem>
              <SelectItem value="trialing">Trialing</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Ghost variant is compact and borderless, ideal for table toolbars, filters, and secondary controls.",
      },
    },
  },
};

export const WithGroupsAndSeparator: Story = {
  name: "With groups and separator",
  render: () => (
    <div className="p-6">
      <Select defaultValue="sermon">
        <SelectTrigger aria-label="Content type">
          <SelectValue placeholder="Select content type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Primary</SelectLabel>
            <SelectItem value="sermon">Sermons</SelectItem>
            <SelectItem value="series">Series</SelectItem>
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Other</SelectLabel>
            <SelectItem value="podcast">Podcasts</SelectItem>
            <SelectItem value="class">Classes</SelectItem>
            <SelectItem value="event">Events</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example with groups, labels, and a separator. Great for categorizing options within a single dropdown.",
      },
    },
  },
};
