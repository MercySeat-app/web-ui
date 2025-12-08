import type { Meta, StoryObj } from "@storybook/react";
import { ImageUploader } from "./image-uploader";

const meta = {
  title: "Components/ImageUploader",
  component: ImageUploader,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "600px", padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof ImageUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    extensions: ["jpeg", "jpg", "png", "webp"],
    placeholder: "Click to upload or drag and drop",
    hint: "PNG, JPG, or WEBP (recommended: 800x800px)",
  },
};

export const WithCrop: Story = {
  args: {
    extensions: ["jpeg", "jpg", "png", "webp"],
    shouldCrop: true,
    aspectRatio: 1,
    placeholder: "Upload and crop your image",
    hint: "Square format (1:1 ratio)",
  },
};

export const MultipleImages: Story = {
  args: {
    extensions: ["jpeg", "jpg", "png", "webp", "gif"],
    multiple: true,
    placeholder: "Upload multiple images",
    hint: "You can upload multiple images at once",
  },
};

export const MultipleCrop: Story = {
  args: {
    extensions: ["jpeg", "jpg", "png", "webp"],
    multiple: true,
    shouldCrop: true,
    aspectRatio: 16 / 9,
    placeholder: "Upload and crop multiple images",
    hint: "Landscape format (16:9 ratio)",
  },
};

export const LandscapeCrop: Story = {
  args: {
    extensions: ["jpeg", "jpg", "png", "webp"],
    shouldCrop: true,
    aspectRatio: 16 / 9,
    placeholder: "Upload landscape image",
    hint: "16:9 aspect ratio",
  },
};

export const PortraitCrop: Story = {
  args: {
    extensions: ["jpeg", "jpg", "png", "webp"],
    shouldCrop: true,
    aspectRatio: 3 / 4,
    placeholder: "Upload portrait image",
    hint: "3:4 aspect ratio",
  },
};

export const LimitedFileTypes: Story = {
  args: {
    extensions: ["png"],
    placeholder: "PNG files only",
    hint: "Only PNG format is accepted",
  },
};

export const SmallFileSize: Story = {
  args: {
    extensions: ["jpeg", "jpg", "png"],
    maxSize: 1048576, // 1MB
    placeholder: "Upload image (max 1MB)",
    hint: "Maximum file size: 1MB",
  },
};

