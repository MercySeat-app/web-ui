import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  AlertDialog,
  DialogAction,
  DialogCancel,
  type AlertDialogProps,
} from "./alert-dialog";
import { Button } from "../button";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A dialog component for prompt user actions. Accepts three children: header, content, and actions. Useful for critical operations like deleting items or confirming changes.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

function AlertDialogExample({
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
      <Button onClick={() => setOpen(true)} variant="blue-hepatica-outline">
        Open Dialog
      </Button>
      <AlertDialog
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
    <AlertDialogExample
      header="Confirm action"
      content="Are you sure you want to proceed with this action?"
      actions={
        <>
          <DialogCancel asChild>
            <Button type="button" variant="gray-outline">
              Cancel
            </Button>
          </DialogCancel>
          <DialogAction asChild>
            <Button
              type="button"
              variant="blue-hepatica-solid"
              onClick={() => console.log("Confirmed!")}
            >
              Confirm
            </Button>
          </DialogAction>
        </>
      }
    />
  ),
};

export const Destructive: Story = {
  render: () => (
    <AlertDialogExample
      header="Delete item"
      content="This action cannot be undone. Are you sure you want to delete this item?"
      actions={
        <>
          <DialogCancel asChild>
            <Button type="button" variant="gray-outline">
              Cancel
            </Button>
          </DialogCancel>
          <DialogAction asChild>
            <Button
              type="button"
              variant="bright-red-solid"
              onClick={() => console.log("Deleted!")}
            >
              Delete
            </Button>
          </DialogAction>
        </>
      }
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Use destructive styling for dangerous actions like deleting items.",
      },
    },
  },
};

export const CustomLabels: Story = {
  render: () => (
    <AlertDialogExample
      header="Save changes"
      content="You have unsaved changes. Do you want to save them before leaving?"
      actions={
        <>
          <DialogCancel asChild>
            <Button type="button" variant="gray-outline">
              Don't Save
            </Button>
          </DialogCancel>
          <DialogAction asChild>
            <Button
              type="button"
              variant="blue-hepatica-solid"
              onClick={() => console.log("Saved!")}
            >
              Save
            </Button>
          </DialogAction>
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

const WithCustomContentExample = (props: AlertDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="blue-hepatica-outline">
        Open Dialog
      </Button>
      <AlertDialog
        {...props}
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
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button
                type="button"
                variant="blue-hepatica-solid"
                onClick={() => console.log("Confirmed!")}
              >
                Confirm
              </Button>
            </DialogAction>
          </>
        }
      />
    </>
  );
};

export const WithCustomContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Custom content can include rich HTML elements like lists and formatted text.",
      },
    },
  },
  render: (args) => <WithCustomContentExample {...args} />,
};

const WithCustomHeaderExample = (props: AlertDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="blue-hepatica-outline">
        Open Dialog
      </Button>
      <AlertDialog
        {...props}
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
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button
                type="button"
                variant="blue-hepatica-solid"
                onClick={() => console.log("Proceeded!")}
              >
                Proceed
              </Button>
            </DialogAction>
          </>
        }
      />
    </>
  );
};

export const WithCustomHeader: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Custom header content allows for icons or other elements alongside the title.",
      },
    },
  },
  render: (args) => <WithCustomHeaderExample {...args} />,
};

const IntegratedWithMenuExample = (props: AlertDialogProps) => {
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

      <AlertDialog
        {...props}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        header="Edit item"
        content="Are you sure you want to edit this item?"
        actions={
          <>
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button
                type="button"
                variant="blue-hepatica-solid"
                onClick={() => console.log("Edit confirmed!")}
              >
                Confirm
              </Button>
            </DialogAction>
          </>
        }
      />

      <AlertDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        header="Delete item"
        content="This action cannot be undone. Are you sure you want to delete this item?"
        actions={
          <>
            <DialogCancel asChild>
              <Button type="button" variant="gray-outline">
                Cancel
              </Button>
            </DialogCancel>
            <DialogAction asChild>
              <Button
                type="button"
                variant="bright-red-solid"
                onClick={() => console.log("Delete confirmed!")}
              >
                Delete
              </Button>
            </DialogAction>
          </>
        }
      />
    </div>
  );
};

export const IntegratedWithMenu: Story = {
  parameters: {
    docs: {
      description: {
        story: "Example of using AlertDialog integrated with action buttons.",
      },
    },
  },
  render: (args) => <IntegratedWithMenuExample {...args} />,
};
