import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import { ImageUploader } from "./image-uploader";

vi.mock("./use-image-uploader", () => ({
  useImageUploader: vi.fn(),
}));

const { useImageUploader } = await import("./use-image-uploader");

type MockItem = {
  id: string;
  originalUrl: string;
  crop: { x: number; y: number };
  zoom: number;
  naturalAspect?: number;
};

describe("<ImageUploader />", () => {
  const baseHookReturn = {
    items: [] as MockItem[],
    previews: [] as string[],
    activeItem: null as MockItem | null,

    addFiles: vi.fn(),
    removeAt: vi.fn(),
    reset: vi.fn(),

    closeCrop: vi.fn(),
    confirmCrop: vi.fn(),

    setCrop: vi.fn(),
    setZoom: vi.fn(),
    setCroppedArea: vi.fn(),

    getEffectiveAspect: vi.fn().mockReturnValue(1),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useImageUploader as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      ...baseHookReturn,
    });
  });

  it("renders DropzoneArea when there are no previews", () => {
    render(<ImageUploader />);

    expect(
      screen.getByText(/Click to upload or drag and drop/i)
    ).toBeInTheDocument();
  });

  it("renders Previews when there are previews", () => {
    (useImageUploader as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      ...baseHookReturn,
      previews: ["blob:1"],
      items: [
        { id: "1", originalUrl: "blob:o1", crop: { x: 0, y: 0 }, zoom: 1 },
      ],
    });

    render(<ImageUploader />);
    expect(screen.getByAltText("Preview")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Remove image/i })
    ).toBeInTheDocument();
  });

  it("renders CropModal when activeItem exists", () => {
    const activeItem: MockItem = {
      id: "abc",
      originalUrl: "blob:orig",
      crop: { x: 0, y: 0 },
      zoom: 1,
      naturalAspect: 1.8,
    };

    (useImageUploader as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      ...baseHookReturn,
      items: [activeItem],
      previews: ["blob:p1"],
      activeItem,
      getEffectiveAspect: vi.fn().mockReturnValue(1.8),
    });

    render(<ImageUploader />);
    expect(
      screen.getByRole("dialog", { name: /Crop image/i })
    ).toBeInTheDocument();
  });

  it("passes preview aspect rules: rounded -> 1", () => {
    (useImageUploader as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      ...baseHookReturn,
      previews: ["blob:p1"],
      items: [
        {
          id: "1",
          originalUrl: "blob:o1",
          crop: { x: 0, y: 0 },
          zoom: 1,
          naturalAspect: 2,
        },
      ],
    });

    render(<ImageUploader rounded />);

    const img = screen.getByAltText("Preview");
    const wrapper = img.closest("div") as HTMLDivElement;

    expect(wrapper?.getAttribute("style") ?? "").toContain("aspect-ratio");
  });

  it("calls useImageUploader with multiple/aspectRatio/onChange", () => {
    const onChange = vi.fn();
    render(<ImageUploader multiple aspectRatio={16 / 9} onChange={onChange} />);

    expect(useImageUploader).toHaveBeenCalledWith({
      multiple: true,
      aspectRatio: 16 / 9,
      onChange,
    });
  });
});
