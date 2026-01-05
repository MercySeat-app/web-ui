/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { buildAccept, getMediaDuration } from "./utils";

describe("media-uploader/utils", () => {
  describe("buildAccept()", () => {
    it("builds accept map for video/audio extensions (case-insensitive, with or without dot)", () => {
      const accept = buildAccept([
        "MP4",
        ".webm",
        "mov",
        "mp3",
        ".m4a",
        "wav",
        "unknown",
      ]);

      // video
      expect(accept["video/mp4"]).toContain(".mp4");
      expect(accept["video/webm"]).toContain(".webm");
      // mov -> quicktime
      expect(accept["video/quicktime"]).toContain(".mov");

      // audio
      // mp3 -> mpeg
      expect(accept["audio/mpeg"]).toContain(".mp3");
      // m4a -> mp4
      expect(accept["audio/mp4"]).toContain(".m4a");
      expect(accept["audio/wav"]).toContain(".wav");

      // unknown should be ignored
      expect(Object.values(accept).flat()).not.toContain(".unknown");
    });

    it("groups multiple extensions under the same mime type when applicable", () => {
      const accept = buildAccept(["ogg", "ogg", ".OGG"]);

      // By your mapping, ogg is treated as video/ogg (because it's in the video list first)
      // (If you change that mapping later, update this expectation.)
      expect(accept["video/ogg"]).toBeDefined();
      expect(accept["video/ogg"]).toContain(".ogg");
    });

    it("returns an empty object when no valid extensions are provided", () => {
      expect(buildAccept(["zip", "txt", ".pdf"])).toEqual({});
    });
  });

  describe("getMediaDuration()", () => {
    const originalCreateElement = document.createElement;

    beforeEach(() => {
      vi.restoreAllMocks();

      // JSDOM doesn't implement media loading; we mock the element behavior.
      vi.spyOn(URL, "createObjectURL").mockReturnValue("blob:mock-url");
      vi.spyOn(URL, "revokeObjectURL").mockImplementation(() => {});
    });

    afterEach(() => {
      document.createElement = originalCreateElement;
    });

    it("creates a <video> element for video files and resolves duration on loadedmetadata", async () => {
      // Arrange fake media element
      const mediaEl: any = {
        preload: "",
        src: "",
        duration: 12.34,
        onloadedmetadata: null as null | (() => void),
        onerror: null as null | (() => void),
      };

      document.createElement = vi
        .fn()
        .mockImplementation((tag: string) => {
          expect(tag).toBe("video");
          return mediaEl;
        }) as any;

      const file = new File(["x"], "clip.mp4", { type: "video/mp4" });

      // Act
      const promise = getMediaDuration(file);

      // Simulate metadata loaded
      mediaEl.onloadedmetadata?.();

      // Assert
      await expect(promise).resolves.toBe(12.34);
      expect(URL.createObjectURL).toHaveBeenCalledWith(file);
      expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:mock-url");
      expect(mediaEl.preload).toBe("metadata");
      expect(mediaEl.src).toBe("blob:mock-url");
    });

    it("creates an <audio> element for audio files and resolves duration on loadedmetadata", async () => {
      const mediaEl: any = {
        preload: "",
        src: "",
        duration: 99,
        onloadedmetadata: null as null | (() => void),
        onerror: null as null | (() => void),
      };

      document.createElement = vi
        .fn()
        .mockImplementation((tag: string) => {
          expect(tag).toBe("audio");
          return mediaEl;
        }) as any;

      const file = new File(["x"], "song.mp3", { type: "audio/mpeg" });

      const promise = getMediaDuration(file);
      mediaEl.onloadedmetadata?.();

      await expect(promise).resolves.toBe(99);
      expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:mock-url");
    });

    it("rejects when media.onerror is called and revokes the object URL", async () => {
      const mediaEl: any = {
        preload: "",
        src: "",
        duration: NaN,
        onloadedmetadata: null as null | (() => void),
        onerror: null as null | (() => void),
      };

      document.createElement = vi
        .fn()
        .mockImplementation(() => mediaEl) as any;

      const file = new File(["x"], "broken.mp4", { type: "video/mp4" });

      const promise = getMediaDuration(file);

      mediaEl.onerror?.();

      await expect(promise).rejects.toThrow("Failed to load media metadata");
      expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:mock-url");
    });
  });
});
