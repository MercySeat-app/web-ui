import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination, type PaginationProps } from "./pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    page: {
      control: { type: "number" },
      description: "Current page (1-based).",
    },
    pageSize: {
      control: { type: "number" },
      description: "Items per page.",
    },
    totalItems: {
      control: { type: "number" },
      description: "Total number of items in the collection.",
    },
    pageSizeOptions: {
      control: { type: "object" },
      description: "Options for the items-per-page dropdown.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable all controls (useful while loading).",
    },
  },
  args: {
    page: 1,
    pageSize: 5,
    totalItems: 13,
    pageSizeOptions: [5, 10, 25, 50],
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          "A table-style pagination control with items-per-page selector, range text (`1 – 5 of 13`), and previous/next buttons.",
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
};

export default meta;

type Story = StoryObj<typeof Pagination>;

/**
 * Internal component used by the Basic story.
 * This is a real React component, so using hooks here is fine.
 */
function BasicExample(props: PaginationProps) {
  const [page, setPage] = useState(props.page ?? 1);
  const [pageSize, setPageSize] = useState(props.pageSize ?? 5);
  const totalItems = props.totalItems ?? 13;

  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
      <div className="mb-4 text-sm text-gray-700">
        Imagine this as the footer of a table with{" "}
        <span className="font-semibold">{totalItems}</span> items.
      </div>

      <Pagination
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        pageSizeOptions={props.pageSizeOptions}
        disabled={props.disabled}
        onPageChange={setPage}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setPage(1); // usually reset to first page when page size changes
        }}
      />
    </div>
  );
}

export const Basic: Story = {
  render: (args) => <BasicExample {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Baseline pagination example with 13 items, 5 per page, and interactive prev/next + page size selector.",
      },
    },
  },
};

/**
 * Empty state example component.
 */
function EmptyStateExample(props: PaginationProps) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(props.pageSize ?? 5);
  const totalItems = 0;

  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
      <div className="mb-4 text-sm text-gray-700">
        Empty dataset example. Range text should read <code>0 of 0</code> and
        navigation buttons should be disabled.
      </div>

      <Pagination
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        pageSizeOptions={props.pageSizeOptions}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
}

export const EmptyState: Story = {
  args: {
    totalItems: 0,
  },
  render: (args) => <EmptyStateExample {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Behavior when there are no items. Shows `0 of 0` and disables prev/next.",
      },
    },
  },
};

/**
 * Large dataset example component.
 */
function LargeDatasetExample(props: PaginationProps) {
  const [page, setPage] = useState(props.page ?? 4);
  const [pageSize, setPageSize] = useState(props.pageSize ?? 25);
  const totalItems = props.totalItems ?? 237;

  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
      <div className="mb-4 text-sm text-gray-700">
        Large dataset example with{" "}
        <span className="font-semibold">{totalItems}</span> items. Useful for
        seeing the range math on mid / last pages.
      </div>

      <Pagination
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        pageSizeOptions={props.pageSizeOptions}
        onPageChange={setPage}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setPage(1);
        }}
      />
    </div>
  );
}

export const LargeDataset: Story = {
  args: {
    page: 4,
    pageSize: 25,
    totalItems: 237,
  },
  render: (args) => <LargeDatasetExample {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Example with more items to visualize the `start – end of total` behavior on a mid-range page.",
      },
    },
  },
};

/**
 * Disabled example component.
 */
function DisabledExample(props: PaginationProps) {
  const [page] = useState(props.page ?? 2);
  const [pageSize] = useState(props.pageSize ?? 10);
  const totalItems = props.totalItems ?? 100;

  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
      <div className="mb-4 text-sm text-gray-700">
        Global <code>disabled</code> state. Dropdown and buttons are disabled
        (e.g. while loading server data).
      </div>

      <Pagination
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        pageSizeOptions={props.pageSizeOptions}
        disabled
        onPageChange={() => {
          /* no-op */
        }}
        onPageSizeChange={() => {
          /* no-op */
        }}
      />
    </div>
  );
}

export const Disabled: Story = {
  args: {
    page: 2,
    pageSize: 10,
    totalItems: 100,
    disabled: true,
  },
  render: (args) => <DisabledExample {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the `disabled` prop: prev/next and page-size selector are not interactive.",
      },
    },
  },
};
