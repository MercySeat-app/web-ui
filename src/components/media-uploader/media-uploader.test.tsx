import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("react-dropzone", () => ({
  useDropzone: (props: any) => ({
    getRootProps: () => ({}),
    getInputProps: () => ({
      onChange: (e: any) => {
        const files = Array.from(e.target.files);
        props.onDrop(files);
      },
    }),
    isDragActive: false,
    fileRejections: [],
  }),
}));

import MediaUploader from "./media-uploader";

describe("<MediaUploader />", () => {
  it("renders DropzoneArea when no file is selected", () => {
    render(<MediaUploader value={null} onChange={vi.fn()} />);
    expect(screen.getByText(/Click to upload or drag and drop/i)).toBeInTheDocument();
  });

  it("displays custom placeholder text", () => {
    render(
      <MediaUploader
        value={null}
        onChange={vi.fn()}
        placeholder="Custom placeholder"
      />
    );
    expect(screen.getByText(/Custom placeholder/i)).toBeInTheDocument();
  });

  it("renders SelectedState when a file is selected", async () => {
    const file = new File(["audio"], "song.mp3", { type: "audio/mp3" });
    render(<MediaUploader value={file} onChange={vi.fn()} />);
    expect(screen.getByText(/song.mp3/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /remove/i })).toBeInTheDocument();
  });

  it("removes file when remove button is clicked", async () => {
    const file = new File(["audio"], "song.mp3", { type: "audio/mp3" });
    const onChange = vi.fn();
    render(<MediaUploader value={file} onChange={onChange} />);
    const removeBtn = screen.getByRole("button", { name: /remove/i });
    await userEvent.click(removeBtn);
    expect(onChange).toHaveBeenCalledWith({ file: null, meta: null });
  });

  it("should return a MediaInfo object with non-null meta for a valid file", async () => {
    const { extractMetadata } = await import("./media-uploader-utils");
    const file = new File(["dummy"], "test.mp3", { type: "audio/mp3" });
    const mediaData = await extractMetadata(file);
    expect(mediaData).not.toBeNull();
    expect(mediaData.file).toBe(file);
    expect(mediaData.meta).not.toBeNull();
    expect(typeof mediaData.meta?.duration).toBe("number");
    expect(typeof mediaData.meta?.extension).toBe("string");
    expect(typeof mediaData.meta?.previewUrl).toBe("string");
  });
});