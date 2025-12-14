import type { Meta, StoryObj } from "@storybook/react";
import {
  Icon,
  ChurchIcon,
  GiftIcon,
  MinistryIcon,
  SermonIcon,
  AnnouncementIcon,
  ClassIcon,
  SubscriptionIcon,
  SeriesIcon,
  PodcastIcon,
  EventIcon,
  HomeIcon,
} from "./index";

const meta: Meta<typeof Icon> = {
  title: "Foundations/Icons",
  component: Icon,
  tags: ["autodocs"],
  args: {
    name: "church",
    size: 24,
    className: "text-white",
  },
  argTypes: {
    name: {
      control: { type: "select" },
      options: [
        "church",
        "gift",
        "ministry",
        "sermon",
        "announcement",
        "class",
        "subscription",
        "series",
        "podcast",
        "event",
      ],
      description: "Icon name from the internal registry.",
    },
    size: {
      control: { type: "number" },
      description: "Icon size in pixels (width & height).",
    },
    className: {
      control: { type: "text" },
      description: "Tailwind classes applied to the SVG (uses currentColor).",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "MercySeat custom icon set. Icons use `currentColor`, so you can style them with Tailwind text utilities. Use the `Icon` registry or import individual icons.",
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#020617" },
        { name: "light", value: "#FFFFFF" },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground for the `Icon` registry. Switch the `name`, `size`, and `className` controls.",
      },
    },
  },
  render: (args) => (
    <div className="flex items-center gap-4 p-4 bg-slate-950 rounded-xl">
      <Icon {...args} />
      <span className="text-sm text-slate-100">
        Try different icon names, sizes and colors via controls.
      </span>
    </div>
  ),
};

export const AllIconsOnDark: Story = {
  parameters: {
    docs: {
      description: {
        story: "All custom icons on a dark background (e.g. sidebar context).",
      },
    },
    backgrounds: {
      default: "dark",
    },
  },
  render: () => (
    <div className="bg-slate-950 p-6 rounded-xl">
      <h3 className="mb-4 text-sm font-medium text-slate-100">
        Icons on dark surface
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3">
          <ChurchIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">Church</span>
        </div>
        <div className="flex items-center gap-3">
          <GiftIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">Gift</span>
        </div>
        <div className="flex items-center gap-3">
          <MinistryIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">Ministry</span>
        </div>
        <div className="flex items-center gap-3">
          <SermonIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">Sermon</span>
        </div>
        <div className="flex items-center gap-3">
          <AnnouncementIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">Announcement</span>
        </div>
        <div className="flex items-center gap-3">
          <ClassIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">Class</span>
        </div>
        <div className="flex items-center gap-3">
          <SubscriptionIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">Subscription</span>
        </div>
        <div className="flex items-center gap-3">
          <SeriesIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">Series</span>
        </div>
        <div className="flex items-center gap-3">
          <PodcastIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">Podcast</span>
        </div>
        <div className="flex items-center gap-3">
          <EventIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">Event</span>
        </div>
        <div className="flex items-center gap-3">
          <HomeIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">Home</span>
        </div>
      </div>
    </div>
  ),
};

export const AllIconsOnLight: Story = {
  parameters: {
    docs: {
      description: {
        story: "All custom icons on a light surface.",
      },
    },
    backgrounds: {
      default: "light",
    },
  },
  render: () => (
    <div className="bg-white p-6 rounded-xl border border-gray-100">
      <h3 className="mb-4 text-sm font-medium text-gray-900">
        Icons on light surface
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3">
          <ChurchIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">Church</span>
        </div>
        <div className="flex items-center gap-3">
          <GiftIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">Gift</span>
        </div>
        <div className="flex items-center gap-3">
          <MinistryIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">Ministry</span>
        </div>
        <div className="flex items-center gap-3">
          <SermonIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">Sermon</span>
        </div>
        <div className="flex items-center gap-3">
          <AnnouncementIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">Announcement</span>
        </div>
        <div className="flex items-center gap-3">
          <ClassIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">Class</span>
        </div>
        <div className="flex items-center gap-3">
          <SubscriptionIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">Subscription</span>
        </div>
        <div className="flex items-center gap-3">
          <SeriesIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">Series</span>
        </div>
        <div className="flex items-center gap-3">
          <PodcastIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">Podcast</span>
        </div>
        <div className="flex items-center gap-3">
          <EventIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">Event</span>
        </div>
      </div>
    </div>
  ),
};
