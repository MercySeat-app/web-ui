import type { Meta, StoryObj } from "@storybook/react";
import VideoUploaderAWS from "./video-uploader-aws";

const meta: Meta<typeof VideoUploaderAWS> = {
  title: "Components/VideoUploaderAWS",
  component: VideoUploaderAWS,
};

export default meta;
type Story = StoryObj<typeof VideoUploaderAWS>;

export const Default: Story = {
  args: {
    uploadUrl: "http://localhost:5000/upload",
  },
};
