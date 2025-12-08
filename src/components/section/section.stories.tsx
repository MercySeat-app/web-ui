/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./section";

const meta: Meta<typeof Section> = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A layout container used for grouping related content with an optional header and footer. Supports multiple elevation levels for different emphasis."
      }
    }
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#EFF1F5",
          padding: "2rem",
          boxSizing: "border-box"
        }}
      >
        <Story />
      </div>
    )
  ],
  argTypes: {
    title: {
      control: "text"
    },
    elevation: {
      control: { type: "select" },
      options: [
        "elevation-0",
        "elevation-1",
        "elevation-2",
        "elevation-3",
        "elevation-4",
        "elevation-5",
        "elevation-6",
        "elevation-7",
        "elevation-8"
      ]
    },
    footer: {
      control: false
    }
  }
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Playground: Story = {
  args: {
    title: "Section title",
    elevation: "elevation-1",
    children: (
      <p className="text-sm text-gray-700">
        This is an example section. Use it to group related content on a page,
       like settings, profile details, or summary cards.
      </p>
    ),
    footer: (
      <div className="flex justify-end gap-2">
        <button className="text-sm text-gray-600">Cancel</button>
        <button className="text-sm px-3 py-1 rounded-md bg-blue-hepatica-600 text-white">
          Save
        </button>
      </div>
    )
  }
};

export const WithoutTitle: Story = {
  args: {
    elevation: "elevation-1",
    children: (
      <div className="space-y-2">
        <p className="text-sm text-gray-700">
          This section has no header and can be used for inline content blocks.
        </p>
        <p className="text-xs text-gray-500">
          Useful for nested layouts where a top-level title would be redundant.
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Section without a header. Only the body content is rendered."
      }
    }
  }
};

export const WithFooterActions: Story = {
  args: {
    title: "Public profile",
    elevation: "elevation-2",
    children: (
      <div className="space-y-2">
        <p className="text-sm text-gray-700">
          Control how your profile is displayed across the creator portal.
        </p>
        <ul className="list-disc list-inside text-xs text-gray-600">
          <li>Update your display name and description</li>
          <li>Manage visibility of certain fields</li>
        </ul>
      </div>
    ),
    footer: (
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">
          Changes are saved automatically.
        </span>
        <div className="flex gap-2">
          <button className="text-sm text-gray-600">Discard</button>
          <button className="text-sm px-3 py-1 rounded-md bg-blue-hepatica-600 text-white">
            Save
          </button>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A more realistic example with actions in the footer and descriptive content in the body."
      }
    }
  }
};

export const ElevationGallery: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-2">
      {[
        "elevation-0",
        "elevation-1",
        "elevation-2",
        "elevation-3",
        "elevation-4"
      ].map((elevation) => (
        <Section
          key={elevation}
          title={`Section – ${elevation}`}
          elevation={elevation as any}
        >
          <p className="text-sm text-gray-700">
            This section uses <code>{elevation}</code>. Use higher elevations
            to draw more attention.
          </p>
        </Section>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Side-by-side comparison of different elevation levels. Useful for designers and devs to pick the appropriate depth."
      }
    }
  }
};
