import type { Meta, StoryObj } from "@storybook/react";
import VideoUploader from "./video-uploader";

const meta: Meta<typeof VideoUploader> = {
  title: "Components/VideoUploader",
  component: VideoUploader,
};

export default meta;
type Story = StoryObj<typeof VideoUploader>;

export const Local: Story = {
  args: {
    uploadUrl: "http://localhost:5000/upload",
  },
};

export const SizeLimitSmall: Story = {
  args: {
    maxSizeBytes: 5 * 1024 * 1024,
  },
};

export const SizeLimitLarge: Story = {
  args: {
    maxSizeBytes: 5000 * 1024 * 1024,
  },
};