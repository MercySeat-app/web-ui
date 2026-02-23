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
  CrownIcon,
  LockClosedIcon,
  LockOpenIcon,
  VideoIcon,
  ListIcon,
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
        "announcement",
        "church",
        "class",
        "crown",
        "gift",
        "list",
        "lock-closed",
        "lock-open",
        "ministry",
        "sermon",
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
      <h3 className="mb-4 text-sm font-medium text-slate-100">Icons on dark surface</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3">
          <AnnouncementIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">announcement</span>
        </div>
        <div className="flex items-center gap-3">
          <ChurchIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">church</span>
        </div>
        <div className="flex items-center gap-3">
          <ClassIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">class</span>
        </div>
        <div className="flex items-center gap-3">
          <CrownIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">crown</span>
        </div>
        <div className="flex items-center gap-3">
          <EventIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">event</span>
        </div>
        <div className="flex items-center gap-3">
          <GiftIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">gift</span>
        </div>
        <div className="flex items-center gap-3">
          <HomeIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">home</span>
        </div>
        <div className="flex items-center gap-3">
          <ListIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">list</span>
        </div>
        <div className="flex items-center gap-3">
          <LockClosedIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">lock-closed</span>
        </div>
        <div className="flex items-center gap-3">
          <LockOpenIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">lock-open</span>
        </div>
        <div className="flex items-center gap-3">
          <MinistryIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">ministry</span>
        </div>
        <div className="flex items-center gap-3">
          <PodcastIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">podcast</span>
        </div>
        <div className="flex items-center gap-3">
          <SeriesIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">series</span>
        </div>
        <div className="flex items-center gap-3">
          <SermonIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">sermon</span>
        </div>
        <div className="flex items-center gap-3">
          <SubscriptionIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">subscription</span>
        </div>
        <div className="flex items-center gap-3">
          <VideoIcon size={24} className="text-white" />
          <span className="text-xs text-slate-200">video</span>
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
      <h3 className="mb-4 text-sm font-medium text-gray-900">Icons on light surface</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3">
          <AnnouncementIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">announcement</span>
        </div>
        <div className="flex items-center gap-3">
          <ChurchIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">church</span>
        </div>
        <div className="flex items-center gap-3">
          <ClassIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">class</span>
        </div>
        <div className="flex items-center gap-3">
          <CrownIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">crown</span>
        </div>
        <div className="flex items-center gap-3">
          <EventIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">event</span>
        </div>
        <div className="flex items-center gap-3">
          <GiftIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">gift</span>
        </div>
        <div className="flex items-center gap-3">
          <HomeIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">home</span>
        </div>
        <div className="flex items-center gap-3">
          <ListIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">list</span>
        </div>
        <div className="flex items-center gap-3">
          <LockClosedIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">lock-closed</span>
        </div>
        <div className="flex items-center gap-3">
          <LockOpenIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">lock-open</span>
        </div>
        <div className="flex items-center gap-3">
          <MinistryIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">ministry</span>
        </div>
        <div className="flex items-center gap-3">
          <PodcastIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">podcast</span>
        </div>
        <div className="flex items-center gap-3">
          <SeriesIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">series</span>
        </div>
        <div className="flex items-center gap-3">
          <SermonIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">sermon</span>
        </div>
        <div className="flex items-center gap-3">
          <SubscriptionIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">subscription</span>
        </div>
        <div className="flex items-center gap-3">
          <VideoIcon size={24} className="text-gray-900" />
          <span className="text-xs text-gray-700">video</span>
        </div>
      </div>
    </div>
  ),
};
