/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import { MediaUploader } from "./media-uploader";
import type { MediaInfo } from "./types";

vi.mock("./components/dropzone-area", () => ({
  DropzoneArea: (props: any) => (
    <div data-testid="dropzone">
      <div data-testid="dropzone-extensions">{props.extensions?.join(",")}</div>
      <div data-testid="dropzone-placeholder">{props.placeholder}</div>
      <button
        type="button"
        data-testid="dropzone-fire"
        onClick={() =>
          props.onDropFile?.({
            file: new File(["x"], "a.wav", { type: "audio/wav" }),
            meta: {
              duration: 1,
              extension: "wav",
              previewUrl: "blob:demo",
              type: "audio",
            },
          } satisfies MediaInfo)
        }
      >
        FireDrop
      </button>
    </div>
  ),
}));

vi.mock("./components/selected-file", () => ({
  SelectedFile: (props: any) => (
    <div data-testid="selected-file">
      <div data-testid="selected-file-name">{props.file?.name}</div>
      <button
        type="button"
        data-testid="selected-file-remove"
        onClick={() => props.onChange?.(null)}
      >
        Remove
      </button>
    </div>
  ),
}));

describe("<MediaUploader />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders DropzoneArea when value is null", () => {
    render(
      <MediaUploader
        accepts={["mp3", "wav"]}
        value={null}
        placeholder="Upload media"
        onChange={vi.fn()}
      />
    );

    expect(screen.getByTestId("dropzone")).toBeInTheDocument();
    expect(screen.getByTestId("dropzone-placeholder")).toHaveTextContent(
      "Upload media"
    );
    expect(screen.getByTestId("dropzone-extensions")).toHaveTextContent(
      "mp3,wav"
    );
  });

  it("renders SelectedFile when value is present", () => {
    const file = new File(["x"], "clip.mp4", { type: "video/mp4" });

    render(
      <MediaUploader
        accepts={["mp4"]}
        value={file}
        placeholder="ignored"
        onChange={vi.fn()}
      />
    );

    expect(screen.getByTestId("selected-file")).toBeInTheDocument();
    expect(screen.getByTestId("selected-file-name")).toHaveTextContent(
      "clip.mp4"
    );
  });
});
