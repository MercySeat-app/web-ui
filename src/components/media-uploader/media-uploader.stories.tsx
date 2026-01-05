import type { Meta, StoryObj } from "@storybook/react";
import MediaUploader from "./media-uploader";

const meta: Meta<typeof MediaUploader> = {
  title: "Components/MediaUploader",
  component: MediaUploader,
  argTypes: {
    placeholder: { control: "text" },
    accepts: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof MediaUploader>;

const DEFAULT_ACCEPTS = [
    "audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "audio/aac", "audio/flac", "audio/mp4",
    "video/mp4", "video/webm", "video/quicktime", "video/x-quicktime", "video/ogg", "video/x-matroska"
];

export const BothAudioAndVideo: Story = {
  args: {
    placeholder: "Accepts • MP3, WAV, AAC, FLAC, MP4, MOV, WebM",
    accepts: DEFAULT_ACCEPTS,
  },
};

export const AudioOnly: Story = {
  args: {
    placeholder: "Accepts • MP3 only",
    accepts: ["audio/mp3", "audio/mpeg"],
  },
};

export const VideoOnly: Story = {
  args: {
    placeholder: "Accepts • MP4 only",
    accepts: ["video/mp4"],
  },
};