import type { Meta, StoryObj } from "@storybook/react";

import { Stepper } from "./stepper";

/**
 * Storybook metadata for Stepper.
 */
const meta: Meta<typeof Stepper> = {
  title: "Components/Steps",
  component: Stepper,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "App",
      values: [{ name: "App", value: "#EFF1F5" }],
    },
  },
};

export default meta;

/**
 * Story type for Stepper.
 */
type Story = StoryObj<typeof Stepper>;

/**
 * Interactive playground for the Stepper component.
 */
export const Playground: Story = {
  args: {
    currentId: "profile",
    className: "w-[506px]",
    steps: [
      { id: "profile", label: "Organization Profile" },
      { id: "services", label: "Services" },
      { id: "upload", label: "Media Upload" },
    ],
  },
};

/**
 * Stepper with the first step set as current.
 */
export const CurrentFirst: Story = {
  args: {
    currentId: "profile",
    className: "w-[506px]",
    steps: [
      { id: "profile", label: "Organization Profile" },
      { id: "services", label: "Services" },
      { id: "upload", label: "Media Upload" },
    ],
  },
};

/**
 * Stepper with the second step set as current.
 */
export const CurrentSecond: Story = {
  args: {
    currentId: "services",
    className: "w-[506px]",
    steps: [
      { id: "profile", label: "Organization Profile" },
      { id: "services", label: "Services" },
      { id: "upload", label: "Media Upload" },
    ],
  },
};

/**
 * Stepper with the third step set as current.
 */
export const CurrentThird: Story = {
  args: {
    currentId: "upload",
    className: "w-[506px]",
    steps: [
      { id: "profile", label: "Organization Profile" },
      { id: "services", label: "Services" },
      { id: "upload", label: "Media Upload" },
    ],
  },
};
