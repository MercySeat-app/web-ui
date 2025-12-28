import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import VideoUploader from "./video-uploader";

const meta: Meta<typeof VideoUploader> = {
  title: "Components/VideoUploader",
  component: VideoUploader,
  argTypes: {
    placeholder: { control: "text" },
    accepts: { control: "object" },
    onUploaded: { action: "uploaded" },
  },
};

export default meta;
type Story = StoryObj<typeof VideoUploader>;

export const Default: Story = {
  args: {
    value: null,
    accepts: [
      "video/mp4",
      "video/webm",
      "video/quicktime",
      "video/x-quicktime",
      "video/ogg",
      "video/x-matroska",
    ],
    placeholder: "Accepts • MP4, MOV, WebM",
    onUploaded: action("uploaded"),
  },
};
