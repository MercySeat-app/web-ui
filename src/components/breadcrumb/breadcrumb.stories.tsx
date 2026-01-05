import type { Meta, StoryObj } from "@storybook/react";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "./breadcrumb";
import { Icon } from "../icons";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "App",
      values: [{ name: "App", value: "#EFF1F5" }],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Icon name="home" className="size-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbLink href="#">Content</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Episodes</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const WithCustomSeparatorSpacing: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbList className="gap-x-4">
        <BreadcrumbItem className="gap-x-2">
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>

        <BreadcrumbItem className="gap-x-2">
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbPage>Profile</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const AsChildLink: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <button type="button" className="bg-transparent p-0">
              Dashboard
            </button>
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbPage>Analytics</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};
