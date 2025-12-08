import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Responsive sidebar with MercySeat branding, background image, and navigation content area. Always visible on large screens (247px wide) and collapses into an off-canvas drawer on smaller screens.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#EFF1F5",
          minHeight: "100vh",
          display: "flex",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Basic: Story = {
  render: () => (
    <>
      <Sidebar>
        <nav className="flex flex-col gap-1 text-sm w-full">
          <a
            className="rounded-md px-3 py-2 hover:bg-gray-25 text-white/90"
            href="#"
          >
            Dashboard
          </a>
          <a
            className="rounded-md px-3 py-2 hover:bg-gray-25 text-white/90"
            href="#"
          >
            Content
          </a>
          <a
            className="rounded-md px-3 py-2 hover:bg-gray-25 text-white/90"
            href="#"
          >
            Subscribers
          </a>
          <a
            className="rounded-md px-3 py-2 hover:bg-gray-25 text-white/90"
            href="#"
          >
            Settings
          </a>
        </nav>
      </Sidebar>

      <main className="flex-1 p-8">
        <h1 className="mb-4 text-xl font-semibold text-gray-900">
          Creator Portal
        </h1>
        <p className="text-sm text-gray-700 mb-4">
          Resize the viewport to see how the sidebar behaves:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>On large screens, the sidebar is always visible on the left.</li>
          <li>
            On small screens, use the black button in the top-left to toggle the
            sidebar.
          </li>
        </ul>
      </main>
    </>
  ),
};

export const WithSecondaryNav: Story = {
  render: () => (
    <>
      <Sidebar>
        <div className="flex flex-col gap-6 w-full">
          <nav className="flex flex-col gap-1 text-sm">
            <button className="w-full rounded-md px-3 py-2 text-left hover:bg-gray-25 text-white/90">
              Overview
            </button>
            <button className="w-full rounded-md px-3 py-2 text-left hover:bg-gray-25 text-white/90">
              Analytics
            </button>
            <button className="w-full rounded-md px-3 py-2 text-left hover:bg-gray-25 text-white/90">
              Payouts
            </button>
          </nav>

          <div className="mt-auto text-xs text-white/80 border-t border-white/15 py-4 px-1">
            Version <span className="font-mono">v0.1.0</span>
          </div>
        </div>
      </Sidebar>

      <main className="flex-1 p-8">
        <h1 className="mb-4 text-xl font-semibold text-gray-900">
          Custom Sidebar Content
        </h1>
        <p className="text-sm text-gray-700">
          This story demonstrates that the sidebar accepts any children layout
          for the navigation/content area, while the logo and background are
          handled by the component itself.
        </p>
      </main>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example showing the sidebar with a custom navigation stack and footer details in the content area.",
      },
    },
  },
};
