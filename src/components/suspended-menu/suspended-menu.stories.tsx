import type { Meta, StoryObj } from "@storybook/react";
import { SuspendedMenu } from "./suspended-menu";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { Button } from "../button";

const meta: Meta<typeof SuspendedMenu> = {
  title: "Components/SuspendedMenu",
  component: SuspendedMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A dropdown menu component that displays a list of actions when triggered. The trigger can be any React element.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SuspendedMenu>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "Edit",
        icon: <Pencil className="w-4 h-4" />,
        onClick: () => console.log("Edit clicked"),
      },
      {
        label: "Delete",
        icon: <Trash2 className="w-4 h-4" />,
        variant: "destructive",
        onClick: () => console.log("Delete clicked"),
      },
    ],
    children: (
      <button
        type="button"
        className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 transition-colors"
        aria-label="Open menu"
      >
        <MoreVertical className="w-5 h-5 text-gray-700" />
      </button>
    ),
  },
};

export const WithButtonTrigger: Story = {
  args: {
    items: [
      {
        label: "Edit",
        icon: <Pencil className="w-4 h-4" />,
        onClick: () => console.log("Edit clicked"),
      },
      {
        label: "Delete",
        icon: <Trash2 className="w-4 h-4" />,
        variant: "destructive",
        onClick: () => console.log("Delete clicked"),
      },
    ],
    children: (
      <Button variant="gray-outline" size="sm">
        Actions
      </Button>
    ),
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      {
        label: "Edit",
        icon: <Pencil className="w-4 h-4" />,
        onClick: () => console.log("Edit clicked"),
      },
    ],
    children: (
      <button
        type="button"
        className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 transition-colors"
        aria-label="Open menu"
      >
        <MoreVertical className="w-5 h-5 text-gray-700" />
      </button>
    ),
  },
};

export const WithoutIcons: Story = {
  args: {
    items: [
      {
        label: "Edit",
        onClick: () => console.log("Edit clicked"),
      },
      {
        label: "Duplicate",
        onClick: () => console.log("Duplicate clicked"),
      },
      {
        label: "Delete",
        variant: "destructive",
        onClick: () => console.log("Delete clicked"),
      },
    ],
    children: (
      <button
        type="button"
        className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 transition-colors"
        aria-label="Open menu"
      >
        <MoreVertical className="w-5 h-5 text-gray-700" />
      </button>
    ),
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: [
      {
        label: "Edit",
        icon: <Pencil className="w-4 h-4" />,
        onClick: () => console.log("Edit clicked"),
      },
      {
        label: "Archive",
        onClick: () => console.log("Archive clicked"),
        disabled: true,
      },
      {
        label: "Delete",
        icon: <Trash2 className="w-4 h-4" />,
        variant: "destructive",
        onClick: () => console.log("Delete clicked"),
      },
    ],
    children: (
      <button
        type="button"
        className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 transition-colors"
        aria-label="Open menu"
      >
        <MoreVertical className="w-5 h-5 text-gray-700" />
      </button>
    ),
  },
};

export const InTableContext: Story = {
  render: () => (
    <div className="p-8 bg-gray-50 min-w-[400px]">
      <table className="w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Status
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100">
            <td className="px-4 py-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-green-700 bg-green-50 border border-green-200">
                Published
              </span>
            </td>
            <td className="px-4 py-3 text-right">
              <SuspendedMenu
                items={[
                  {
                    label: "Edit",
                    icon: <Pencil className="w-4 h-4" />,
                    onClick: () => console.log("Edit clicked"),
                  },
                  {
                    label: "Delete",
                    icon: <Trash2 className="w-4 h-4" />,
                    variant: "destructive",
                    onClick: () => console.log("Delete clicked"),
                  },
                ]}
              >
                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 transition-colors ml-auto"
                  aria-label="Open menu"
                >
                  <MoreVertical className="w-5 h-5 text-gray-700" />
                </button>
              </SuspendedMenu>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example usage of SuspendedMenu component in a table context, matching the design shown in the screenshot.",
      },
    },
  },
};

