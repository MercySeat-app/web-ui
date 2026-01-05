/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, act } from "@testing-library/react";

import { DropzoneArea } from "./dropzone-area";
import type { MediaInfo } from "../types";

// ---- Mocks ----
const dropzoneState = {
  isDragActive: false,
  fileRejections: [] as any[],
  onDrop: null as null | ((files: File[]) => void),
};

vi.mock("react-dropzone", () => ({
  useDropzone: (opts: any) => {
    dropzoneState.onDrop = opts.onDrop;

    return {
      getRootProps: () => ({
        "data-testid": "dropzone-root",
      }),
      getInputProps: () => ({
        "data-testid": "dropzone-input",
        type: "file",
      }),
      isDragActive: dropzoneState.isDragActive,
      fileRejections: dropzoneState.fileRejections,
    };
  },
}));

vi.mock("../utils", () => ({
  buildAccept: vi.fn(() => ({})),
}));

vi.mock("../utils/get-media-duration", () => ({
  getMediaDuration: vi.fn(async () => 42),
}));

// Your DropzoneArea imports `getMediaDuration` from "../utils" currently.
// If your file is exported as `../utils/index.ts`, keep this mock instead:
vi.mock("../utils", async (importOriginal) => {
  const mod = await importOriginal<any>();
  return {
    ...mod,
    buildAccept: vi.fn(() => ({})),
    getMediaDuration: vi.fn(async () => 42),
  };
});

describe("<DropzoneArea />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    dropzoneState.isDragActive = false;
    dropzoneState.fileRejections = [];
    dropzoneState.onDrop = null;

    vi.stubGlobal("URL", {
      ...URL,
      createObjectURL: vi.fn(() => "blob:mock-preview"),
    } as any);
  });

  it("renders placeholder", () => {
    render(
      <DropzoneArea
        extensions={["mp3", "mp4"]}
        placeholder="Upload your media"
        onDropFile={vi.fn()}
      />
    );

    expect(screen.getByText("Upload your media")).toBeInTheDocument();
  });

  it("adds active border class when dragging", () => {
    dropzoneState.isDragActive = true;

    render(
      <DropzoneArea extensions={["mp3"]} placeholder="" onDropFile={vi.fn()} />
    );

    // root wrapper has border-blue-hepatica-600 when isDragActive
    expect(screen.getByTestId("dropzone-root").className).toContain(
      "border-blue-hepatica-600"
    );
  });

  it("shows file-invalid-type errors from fileRejections", () => {
    dropzoneState.fileRejections = [
      {
        errors: [{ code: "file-invalid-type", message: "bad type" }],
      },
    ];

    render(
      <DropzoneArea
        extensions={["mp3", "mp4"]}
        placeholder=""
        onDropFile={vi.fn()}
      />
    );

    expect(
      screen.getByText(/Invalid file type\. Allowed types: mp3, mp4/i)
    ).toBeInTheDocument();
  });

  it("calls onDropFile with MediaInfo for audio", async () => {
    const onDropFile = vi.fn();
    render(
      <DropzoneArea
        extensions={["mp3"]}
        placeholder=""
        onDropFile={onDropFile}
      />
    );

    const audio = new File(["x"], "podcast.mp3", { type: "audio/mpeg" });

    // Trigger the stored onDrop callback
    await act(async () => {
      await dropzoneState.onDrop?.([audio]);
    });

    expect(onDropFile).toHaveBeenCalledTimes(1);

    const arg = onDropFile.mock.calls[0][0] as MediaInfo;
    expect(arg.file?.name).toBe("podcast.mp3");
    expect(arg.meta?.type).toBe("audio");
    expect(arg.meta?.duration).toBe(42);
    expect(arg.meta?.extension).toBe("mp3");
    expect(arg.meta?.previewUrl).toBe("blob:mock-preview");
  });

  it("calls onDropFile with MediaInfo for video", async () => {
    const onDropFile = vi.fn();

    render(
      <DropzoneArea
        extensions={["mp4"]}
        placeholder=""
        onDropFile={onDropFile}
      />
    );

    const video = new File(["x"], "sermon.mp4", { type: "video/mp4" });

    await act(async () => {
      await dropzoneState.onDrop?.([video]);
    });

    const arg = onDropFile.mock.calls[0][0] as MediaInfo;
    expect(arg.meta?.type).toBe("video");
    expect(arg.meta?.extension).toBe("mp4");
  });

  it("ignores non-audio/video types", async () => {
    const onDropFile = vi.fn();

    render(
      <DropzoneArea
        extensions={["png"]}
        placeholder=""
        onDropFile={onDropFile}
      />
    );

    const img = new File(["x"], "x.png", { type: "image/png" });

    await act(async () => {
      await dropzoneState.onDrop?.([img]);
    });

    expect(onDropFile).not.toHaveBeenCalled();
  });
});
