// src/components/logo/logo.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./logo";
import { LogoLockup } from "./logo-lockup";

const meta: Meta<typeof Logo> = {
  title: "Foundations/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "MercySeat brand mark and lockup components. The Logo is the icon-only SVG; LogoLockup combines the mark with the wordmark.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "number" },
      description: "Size (width & height) in pixels",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const IconOnly: Story = {
  args: {
    size: 48,
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Logo {...args} />
      <span className="text-sm text-gray-700">
        Icon-only MercySeat mark. Adjust the <code>size</code> control to see
        scaling.
      </span>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Logo size={24} />
        <span className="text-xs text-gray-600">24px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Logo size={32} />
        <span className="text-xs text-gray-600">32px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Logo size={48} />
        <span className="text-xs text-gray-600">48px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Logo size={64} />
        <span className="text-xs text-gray-600">64px</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Common sizes for the MercySeat mark in the UI.",
      },
    },
  },
};

export const Lockup: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4 bg-[#0f172a] px-4 py-3 rounded-lg">
        <LogoLockup size={32} />
        <span className="text-xs text-slate-100">
          Sidebar / dark background usage.
        </span>
      </div>

      <div className="flex items-center gap-4 bg-white px-4 py-3 rounded-lg border border-gray-100">
        <LogoLockup
          size={28}
          className="text-gray-900 [&_span]:text-gray-900"
        />
        <span className="text-xs text-gray-700">
          Light background usage, size 28.
        </span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Logo lockup examples on dark and light backgrounds. You can override the wordmark color via `className`.",
      },
    },
  },
};
