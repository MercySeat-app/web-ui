import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Structured table component with styled header, body, footer, and caption, plus an overflow-x scroll container.",
      },
    },
    backgrounds: {
      default: "white",
      values: [
        { name: "surface", value: "#EFF1F5" },
        { name: "white", value: "#FFFFFF" },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Basic: Story = {
  render: () => (
    <div className="w-full p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subscriber</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Jane Doe</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Smith</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Invited</TableCell>
          </TableRow>
          <TableRow data-state="selected">
            <TableCell>Wallace Viana</TableCell>
            <TableCell>wallace@mercyseat.app</TableCell>
            <TableCell>Owner</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Showing 1–3 of 3 subscribers</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Default table layout, including header, body, footer, and a selected row using `data-state="selected"`.',
      },
    },
  },
};

export const WithCaption: Story = {
  render: () => (
    <div className="p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Source</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>2025-12-01</TableCell>
            <TableCell>$49.00</TableCell>
            <TableCell>Recurring subscription</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2025-12-03</TableCell>
            <TableCell>$15.00</TableCell>
            <TableCell>One-time gift</TableCell>
          </TableRow>
        </TableBody>
        <TableCaption>
          Payouts are processed every Friday. Amounts shown are before fees.
        </TableCaption>
      </Table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example of a table with a caption, useful for extra context or accessibility notes.",
      },
    },
  },
};

export const Scrollable: Story = {
  render: () => (
    <div className="p-6">
      <div className="max-w-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Plan name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Billing interval</TableHead>
              <TableHead>Subscribers</TableHead>
              <TableHead>Created at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Monthly Tier</TableCell>
              <TableCell>$10.00</TableCell>
              <TableCell>Monthly</TableCell>
              <TableCell>124</TableCell>
              <TableCell>2025-10-01</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Annual Tier</TableCell>
              <TableCell>$100.00</TableCell>
              <TableCell>Yearly</TableCell>
              <TableCell>38</TableCell>
              <TableCell>2025-11-10</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the horizontal scroll container when the table is wider than its parent.",
      },
    },
  },
};
