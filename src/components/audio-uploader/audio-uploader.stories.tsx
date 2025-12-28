import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import AudioUploader from "./audio-uploader";

const meta: Meta<typeof AudioUploader> = {
  title: "Components/AudioUploader",
  component: AudioUploader,
  argTypes: {
    placeholder: { control: "text" },
    accepts: { control: "object" },
    onUploaded: { action: "uploaded" },
  },
};

export default meta;
type Story = StoryObj<typeof AudioUploader>;

export const Default: Story = {
  args: {
    placeholder: "Accepts • MP3, WAV, AAC, FLAC",
    accepts: ["audio/mpeg", "audio/wav", "audio/aac", "audio/flac"],
    onUploaded: action("uploaded"),
  },
};

export const SmallLimit: Story = {
  args: {
    placeholder: "Small limit (5MB)",
    accepts: ["audio/mpeg"],
    onUploaded: action("uploaded"),
  },
};

export const LargeLimit: Story = {
  args: {
    placeholder: "Large limit (5GB)",
    onUploaded: action("uploaded"),
  },
};