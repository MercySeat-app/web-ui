/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { DropzoneArea } from "./dropzone-area";

vi.mock("../assets/dropzone.svg", () => ({ default: "dropzone.svg" }));

vi.mock("../utils/accept", () => ({
  buildAccept: () => ({ "image/png": [".png"] }),
}));

const useDropzoneMock = vi.fn();

vi.mock("react-dropzone", async () => {
  return {
    useDropzone: (args: any) => useDropzoneMock(args),
  };
});

describe("<DropzoneArea />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    useDropzoneMock.mockReturnValue({
      getRootProps: () => ({ "data-testid": "root" }),
      getInputProps: () => ({ "data-testid": "input" }),
      isDragActive: false,
      fileRejections: [],
    });
  });

  it("renders the CTA and placeholder text", () => {
    render(
      <DropzoneArea
        extensions={["png"]}
        maxSize={1024}
        multiple={false}
        placeholder="PNG only"
        onDropFiles={vi.fn()}
      />
    );

    expect(
      screen.getByText(/Click to upload or drag and drop/i)
    ).toBeInTheDocument();
    expect(screen.getByText("PNG only")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("adds active border class when dragging", () => {
    useDropzoneMock.mockReturnValue({
      getRootProps: () => ({ "data-testid": "root" }),
      getInputProps: () => ({ "data-testid": "input" }),
      isDragActive: true,
      fileRejections: [],
    });

    render(
      <DropzoneArea
        extensions={["png"]}
        maxSize={1024}
        multiple={false}
        placeholder=""
        onDropFiles={vi.fn()}
      />
    );

    const root = screen.getByTestId("root");
    expect(root.className).toContain("border-blue-hepatica-600");
  });

  it("renders file-too-large and invalid-type errors", () => {
    useDropzoneMock.mockReturnValue({
      getRootProps: () => ({ "data-testid": "root" }),
      getInputProps: () => ({ "data-testid": "input" }),
      isDragActive: false,
      fileRejections: [
        { errors: [{ code: "file-too-large", message: "too large" }] },
        { errors: [{ code: "file-invalid-type", message: "bad type" }] },
      ],
    });

    render(
      <DropzoneArea
        extensions={["png", "jpg"]}
        maxSize={5 * 1024 * 1024}
        multiple={false}
        placeholder=""
        onDropFiles={vi.fn()}
      />
    );

    expect(screen.getByText(/File is too large/i)).toBeInTheDocument();
    expect(screen.getByText(/Invalid file type/i)).toBeInTheDocument();
  });

  it("wires onDropFiles into useDropzone onDrop", () => {
    const onDropFiles = vi.fn();

    useDropzoneMock.mockImplementation(({ onDrop }: any) => ({
      getRootProps: () => ({
        "data-testid": "root",
        onClick: () => onDrop([new File(["a"], "a.png")]),
      }),
      getInputProps: () => ({ "data-testid": "input" }),
      isDragActive: false,
      fileRejections: [],
    }));

    render(
      <DropzoneArea
        extensions={["png"]}
        maxSize={1024}
        multiple={false}
        placeholder=""
        onDropFiles={onDropFiles}
      />
    );

    fireEvent.click(screen.getByTestId("root"));
    expect(onDropFiles).toHaveBeenCalledTimes(1);
    expect(onDropFiles.mock.calls[0][0][0]).toBeInstanceOf(File);
  });
});
