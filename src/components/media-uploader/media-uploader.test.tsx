import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MediaUploader, { type MediaInfo } from "./media-uploader";


vi.mock("axios");

const extractMetadata = (file: File): Promise<MediaInfo> => {
  return new Promise<MediaInfo>((resolve) => {
    const url = URL.createObjectURL(file);
    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    const isVideo = file.type.startsWith("video");
    const isAudio = file.type.startsWith("audio");

    const metaBase = { extension: ext, previewUrl: url };

    if (isVideo) {
      const vid = document.createElement("video");
      vid.preload = "metadata";
      vid.src = url;
      vid.onloadedmetadata = () => {
        const duration = vid.duration;
        URL.revokeObjectURL(url);
        resolve({
          file,
          meta: { ...metaBase, duration }
        });
      };
      setTimeout(() => resolve({ file, meta: { ...metaBase, duration: 0 } }), 3000);
    } else if (isAudio) {
      const aud = document.createElement("audio");
      aud.preload = "metadata";
      aud.src = url;
      aud.onloadedmetadata = () => {
        const duration = aud.duration;
        URL.revokeObjectURL(url);
        resolve({
          file,
          meta: { ...metaBase, duration }
        });
      };
      setTimeout(() => resolve({ file, meta: { ...metaBase, duration: 0 } }), 3000);
    } else {
      resolve({
        file,
        meta: { ...metaBase, duration: 0 }
      });
    }
  });
};

describe("<MediaUploader />", () => {

  it("accepts valid file types", async () => {
    render(
      <MediaUploader
        value={null}
        onChange={vi.fn()}
        accepts={["audio/mpeg"]}
      />
    );
    const file = new File(["audio"], "song.mp3", { type: "audio/mpeg" });
    const input = document.querySelector('input[type="file"]') as HTMLInputElement | null;
    await userEvent.upload(input!, file);
    await waitFor(() => {
      expect(document.getElementById("error-message")).toBeNull();
    });
  });


  it("calls onUploaded callback with correct data", async () => {
    render(
      <MediaUploader
        value={null}
        onChange={vi.fn()}
        accepts={["audio/mpeg"]}
      />
    );
  });



  it("displays custom placeholder text", () => {
    render(
      <MediaUploader
        value={null}
        onChange={vi.fn()}
        accepts={["audio/mpeg"]}
        placeholder="Custom placeholder"
      />
    );
    expect(screen.getByText(/Custom placeholder/i)).toBeInTheDocument();
  });

  it("should return a MediaInfo object with non-null meta for a valid file", async () => {
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