import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "../button";
import { Typography } from "../typography";
import { Badge } from "../badge";

/**
 * Storybook metadata for Dialog.
 */
const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A dialog component for huge chunk of contents. Accepts three children: header, content, and actions.",
      },
    },
  },
};

export default meta;

/**
 * Story type for Dialog stories.
 */
type Story = StoryObj<typeof Dialog>;

/**
 * Basic confirmation dialog example.
 */
export const DialogExample: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button size="sm" variant="blue-hepatica-outline">
          Open Dialog
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * Dialog example with richer subscription tier content and actions.
 */
export const SubscriptionTierDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button size="sm" variant="blue-hepatica-outline">
          Open Dialog
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full md:max-w-150">
        <DialogHeader>
          <DialogTitle>Edit Subscription Tier</DialogTitle>
        </DialogHeader>
        <div className="p-8 w-full flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <Typography
              variant="body-sm"
              className="font-medium leading-5 tracking-[0.02em] text-gray-700"
            >
              Palm Valley Church Current Tier:
            </Typography>
            <div className="w-full rounded-lg border border-gray-50 p-4 flex flex-col gap-y-2">
              <Typography variant="overline" className="text-gray-300 tracking-[1px]">
                Current tier
              </Typography>
              <div className="flex flex-col gap-y-2">
                <div className="flex justify-between items-start">
                  <Typography
                    variant="body-sm"
                    className="font-semibold text-gray-700 leading-5 tracking-[0.02em]"
                  >
                    Free Tier
                  </Typography>
                  <Badge variant="success-filled">Active</Badge>
                </div>
                <div className="flex items-center gap-x-2">
                  <Typography variant="heading-3" className="text-gray-900">
                    $799.90
                  </Typography>
                  <Typography variant="body-sm" className="text-xs tracking-[0.02em] text-gray-300">
                    /month
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="gray-outline" size="sm">
            Cancel
          </Button>
          <Button variant="bright-red-solid" size="sm">
            Update Tier
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
