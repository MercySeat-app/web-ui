import type { Meta, StoryObj } from "@storybook/react";

import { Stepper } from "./stepper";

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

type Story = StoryObj<typeof Stepper>;

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
