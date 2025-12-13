import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { ConfirmationDialog } from "./confirmation-dialog";
import { Button } from "../button";

const meta: Meta<typeof ConfirmationDialog> = {
  title: "Components/ConfirmationDialog",
  component: ConfirmationDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A dialog component for confirming user actions. Accepts three children: header, content, and actions. Useful for critical operations like deleting items or confirming changes.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmationDialog>;

function ConfirmationDialogExample({
  defaultOpen = false,
  header,
  content,
  actions,
}: {
  defaultOpen?: boolean;
  header: React.ReactNode;
  content: React.ReactNode;
  actions: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="blue-hepatica-outline"
      >
        Open Dialog
      </Button>
      <ConfirmationDialog
        open={open}
        onOpenChange={setOpen}
        header={header}
        content={content}
        actions={actions}
      />
    </>
  );
}

export const Default: Story = {
  render: () => (
    <ConfirmationDialogExample
      header="Confirm action"
      content="Are you sure you want to proceed with this action?"
      actions={
        <>
          <AlertDialog.Cancel asChild>
            <Button type="button" variant="gray-outline">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button
              type="button"
              variant="blue-hepatica-solid"
              onClick={() => console.log("Confirmed!")}
            >
              Confirm
            </Button>
          </AlertDialog.Action>
        </>
      }
    />
  ),
};

export const Destructive: Story = {
  render: () => (
    <ConfirmationDialogExample
      header="Delete item"
      content="This action cannot be undone. Are you sure you want to delete this item?"
      actions={
        <>
          <AlertDialog.Cancel asChild>
            <Button type="button" variant="gray-outline">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button
              type="button"
              variant="bright-red-solid"
              onClick={() => console.log("Deleted!")}
            >
              Delete
            </Button>
          </AlertDialog.Action>
        </>
      }
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Use destructive styling for dangerous actions like deleting items.",
      },
    },
  },
};

export const CustomLabels: Story = {
  render: () => (
    <ConfirmationDialogExample
      header="Save changes"
      content="You have unsaved changes. Do you want to save them before leaving?"
      actions={
        <>
          <AlertDialog.Cancel asChild>
            <Button type="button" variant="gray-outline">
              Don't Save
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button
              type="button"
              variant="blue-hepatica-solid"
              onClick={() => console.log("Saved!")}
            >
              Save
            </Button>
          </AlertDialog.Action>
        </>
      }
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Custom labels for the action buttons.",
      },
    },
  },
};

export const WithCustomContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)} variant="blue-hepatica-outline">
          Open Dialog
        </Button>
        <ConfirmationDialog
          open={open}
          onOpenChange={setOpen}
          header="Important notice"
          content={
            <div className="space-y-2">
              <p>This action will affect multiple items:</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
              <p className="font-medium">Are you sure you want to continue?</p>
            </div>
          }
          actions={
            <>
              <AlertDialog.Cancel asChild>
                <Button type="button" variant="gray-outline">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button
                  type="button"
                  variant="blue-hepatica-solid"
                  onClick={() => console.log("Confirmed!")}
                >
                  Confirm
                </Button>
              </AlertDialog.Action>
            </>
          }
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Custom content can include rich HTML elements like lists and formatted text.",
      },
    },
  },
};

export const WithCustomHeader: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)} variant="blue-hepatica-outline">
          Open Dialog
        </Button>
        <ConfirmationDialog
          open={open}
          onOpenChange={setOpen}
          header={
            <div className="flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              <span>Warning</span>
            </div>
          }
          content="This action requires your attention. Please review carefully before proceeding."
          actions={
            <>
              <AlertDialog.Cancel asChild>
                <Button type="button" variant="gray-outline">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button
                  type="button"
                  variant="blue-hepatica-solid"
                  onClick={() => console.log("Proceeded!")}
                >
                  Proceed
                </Button>
              </AlertDialog.Action>
            </>
          }
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Custom header content allows for icons or other elements alongside the title.",
      },
    },
  },
};

export const IntegratedWithMenu: Story = {
  render: () => {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);

    return (
      <div className="p-8">
        <div className="space-y-4">
          <Button
            onClick={() => setEditDialogOpen(true)}
            variant="blue-hepatica-outline"
          >
            Edit Item
          </Button>
          <Button
            onClick={() => setDeleteDialogOpen(true)}
            variant="bright-red-outline"
          >
            Delete Item
          </Button>
        </div>

        <ConfirmationDialog
          open={editDialogOpen}
          onOpenChange={setEditDialogOpen}
          header="Edit item"
          content="Are you sure you want to edit this item?"
          actions={
            <>
              <AlertDialog.Cancel asChild>
                <Button type="button" variant="gray-outline">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button
                  type="button"
                  variant="blue-hepatica-solid"
                  onClick={() => console.log("Edit confirmed!")}
                >
                  Confirm
                </Button>
              </AlertDialog.Action>
            </>
          }
        />

        <ConfirmationDialog
          open={deleteDialogOpen}
          onOpenChange={setDeleteDialogOpen}
          header="Delete item"
          content="This action cannot be undone. Are you sure you want to delete this item?"
          actions={
            <>
              <AlertDialog.Cancel asChild>
                <Button type="button" variant="gray-outline">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button
                  type="button"
                  variant="bright-red-solid"
                  onClick={() => console.log("Delete confirmed!")}
                >
                  Delete
                </Button>
              </AlertDialog.Action>
            </>
          }
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Example of using ConfirmationDialog integrated with action buttons.",
      },
    },
  },
};
