import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ImageUploader } from "./image-uploader";

const meta: Meta<typeof ImageUploader> = {
  title: "Components/ImageUploader",
  component: ImageUploader,
};

export default meta;

type Story = StoryObj<typeof ImageUploader>;

function StatefulWrapper(
  props: Omit<React.ComponentProps<typeof ImageUploader>, "value" | "onChange">
) {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="w-full max-w-[600px]">
      <ImageUploader {...props} value={file} onChange={(f) => setFile(f)} />
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <StatefulWrapper
      aspectRatio={1}
      extensions={["jpg", "jpeg", "png"]}
      placeholder="Upload a profile picture"
    />
  ),
};

export const RoundedProfile: Story = {
  render: () => (
    <StatefulWrapper
      aspectRatio={1}
      rounded
      extensions={["jpg", "jpeg", "png"]}
      placeholder="Profile image"
    />
  ),
};

export const LandscapeCrop: Story = {
  render: () => (
    <StatefulWrapper
      aspectRatio={16 / 9}
      extensions={["jpg", "jpeg", "png"]}
      placeholder="Cover image"
    />
  ),
};

export const SmallMaxSize: Story = {
  render: () => (
    <StatefulWrapper
      aspectRatio={1}
      maxSize={500 * 1024}
      extensions={["jpg", "jpeg", "png"]}
      placeholder="Max 500KB"
    />
  ),
};

export const DimensionConstraints: Story = {
  render: () => (
    <StatefulWrapper
      aspectRatio={1}
      extensions={["jpg", "jpeg", "png"]}
      minWidth={600}
      minHeight={600}
      maxWidth={2400}
      maxHeight={2400}
      placeholder="Image must be between 600x600 and 2400x2400"
    />
  ),
};
