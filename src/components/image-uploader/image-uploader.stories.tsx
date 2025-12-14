import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ImageUploader, type ImageUploaderProps } from "./image-uploader";

function StoryHarness(args: ImageUploaderProps) {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div style={{ padding: 24, maxWidth: 760 }}>
      <ImageUploader
        {...args}
        onChange={(next) => {
          setFiles(next);
          args.onChange?.(next);
        }}
      />

      <div style={{ marginTop: 16, fontFamily: "ui-sans-serif, system-ui" }}>
        <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>
          Debug: onChange files
        </div>

        {files.length === 0 ? (
          <div style={{ fontSize: 12 }}>No files selected.</div>
        ) : (
          <ul style={{ fontSize: 12, paddingLeft: 18, margin: 0 }}>
            {files.map((f) => (
              <li key={`${f.name}-${f.size}-${f.lastModified}`}>
                {f.name} — {(f.size / 1024).toFixed(1)} KB
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const meta: Meta<typeof ImageUploader> = {
  title: "Components/ImageUploader",
  component: ImageUploader,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "app",
      values: [{ name: "app", value: "#EFF1F5" }],
    },
  },
  argTypes: {
    className: { control: "text" },
    placeholder: { control: "text" },
    extensions: { control: "object" },
    aspectRatio: { control: "number" },
    multiple: { control: "boolean" },
    maxSize: { control: "number" },
    rounded: { control: "boolean" },
    onChange: { action: "onChange" },
  },
  render: (args) => <StoryHarness {...(args as ImageUploaderProps)} />,
};

export default meta;
type Story = StoryObj<typeof ImageUploader>;

export const SingleFreeformCrop: Story = {
  name: "Single / Crop (freeform)",
  args: {
    multiple: false,
    // aspectRatio intentionally omitted => freeform crop
    extensions: ["jpeg", "jpg", "png", "webp"],
    maxSize: 5 * 1024 * 1024,
    placeholder: "Upload an image (freeform crop)",
  },
};

export const SingleSquareCrop: Story = {
  name: "Single / Crop (1:1)",
  args: {
    multiple: false,
    aspectRatio: 1,
    extensions: ["jpeg", "jpg", "png", "webp"],
    maxSize: 5 * 1024 * 1024,
    placeholder: "Upload an image (1:1 crop)",
  },
};

export const SingleWideCrop16by9: Story = {
  name: "Single / Crop (16:9)",
  args: {
    multiple: false,
    aspectRatio: 16 / 9,
    extensions: ["jpeg", "jpg", "png", "webp"],
    maxSize: 8 * 1024 * 1024,
    placeholder: "Upload an image (16:9 crop)",
  },
};

export const MultipleFreeformCrop: Story = {
  name: "Multiple / Crop (freeform)",
  args: {
    multiple: true,
    extensions: ["jpeg", "jpg", "png", "webp"],
    maxSize: 5 * 1024 * 1024,
    placeholder: "Upload multiple images (freeform crop per file)",
  },
};

export const MultipleSquareCrop: Story = {
  name: "Multiple / Crop (1:1)",
  args: {
    multiple: true,
    aspectRatio: 1,
    extensions: ["jpeg", "jpg", "png", "webp"],
    maxSize: 5 * 1024 * 1024,
    placeholder: "Upload multiple images (1:1 crop per file)",
  },
};

export const ValidationErrors: Story = {
  name: "Validation / Errors",
  args: {
    multiple: false,
    extensions: ["png"],
    maxSize: 200 * 1024,
    placeholder: "Only PNG up to 200KB",
  },
};

export const ProfileRounded: Story = {
  name: "Profile / Rounded preview",
  args: {
    multiple: false,
    aspectRatio: 1,
    rounded: true,
    extensions: ["jpeg", "jpg", "png", "webp"],
    maxSize: 5 * 1024 * 1024,
    placeholder: "Upload a profile image",
  },
};
