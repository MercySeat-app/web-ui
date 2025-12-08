import type { Meta, StoryObj } from "@storybook/react";
import { ImageUploader } from "./image-uploader";
import { useState } from "react";

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

export const Interactive: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);

    return (
      <div className="space-y-4">
        <ImageUploader
          {...args}
          onChange={(newFiles) => {
            setFiles(newFiles);
            console.log("Files uploaded:", newFiles);
          }}
        />
        {files.length > 0 && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Uploaded Files:
            </h3>
            <ul className="text-xs text-gray-600 space-y-1">
              {files.map((file, index) => (
                <li key={index}>
                  {file.name} - {(file.size / 1024).toFixed(2)} KB
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
  args: {
    extensions: ["jpeg", "jpg", "png", "webp"],
    shouldCrop: true,
    aspectRatio: 1,
    placeholder: "Upload and crop your image",
    hint: "PNG, JPG, or WEBP (recommended: 800x800px)",
  },
};

export const MultipleInteractive: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);

    return (
      <div className="space-y-4">
        <ImageUploader
          {...args}
          onChange={(newFiles) => {
            setFiles(newFiles);
            console.log("Files uploaded:", newFiles);
          }}
        />
        {files.length > 0 && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Uploaded Files ({files.length}):
            </h3>
            <ul className="text-xs text-gray-600 space-y-1">
              {files.map((file, index) => (
                <li key={index}>
                  {file.name} - {(file.size / 1024).toFixed(2)} KB
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
  args: {
    extensions: ["jpeg", "jpg", "png", "webp"],
    multiple: true,
    placeholder: "Upload multiple images",
    hint: "You can upload multiple images at once",
  },
};

