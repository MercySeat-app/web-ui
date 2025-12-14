/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { CropModal } from "./crop-modal";

vi.mock("react-easy-crop", () => ({
  default: (props: any) => (
    <div
      data-testid="cropper"
      data-aspect={props.aspect}
      data-shape={props.cropShape}
    />
  ),
}));

describe("<CropModal />", () => {
  const item = {
    id: "1",
    originalUrl: "blob:orig",
    crop: { x: 0, y: 0 },
    zoom: 1,
    naturalAspect: 1.5,
    croppedAreaPixels: null,
  } as any;

  it("renders a dialog and the cropper", () => {
    render(
      <CropModal
        item={item}
        aspect={1.5}
        rounded={false}
        onClose={vi.fn()}
        onConfirm={vi.fn()}
        onCropChange={vi.fn()}
        onZoomChange={vi.fn()}
        onCropComplete={vi.fn()}
      />
    );

    expect(
      screen.getByRole("dialog", { name: /Crop image/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("cropper")).toBeInTheDocument();
  });

  it("calls onClose when clicking the close X", () => {
    const onClose = vi.fn();

    render(
      <CropModal
        item={item}
        aspect={1}
        rounded={false}
        onClose={onClose}
        onConfirm={vi.fn()}
        onCropChange={vi.fn()}
        onZoomChange={vi.fn()}
        onCropComplete={vi.fn()}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /Close crop modal/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onConfirm when clicking Crop", () => {
    const onConfirm = vi.fn();

    render(
      <CropModal
        item={item}
        aspect={1}
        rounded
        onClose={vi.fn()}
        onConfirm={onConfirm}
        onCropChange={vi.fn()}
        onZoomChange={vi.fn()}
        onCropComplete={vi.fn()}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Crop" }));
    expect(onConfirm).toHaveBeenCalledTimes(1);

    expect(screen.getByTestId("cropper").getAttribute("data-shape")).toBe(
      "round"
    );
  });

  it("calls onZoomChange when moving the range input", () => {
    const onZoomChange = vi.fn();

    render(
      <CropModal
        item={{ ...item, zoom: 1.2 }}
        aspect={1}
        rounded={false}
        onClose={vi.fn()}
        onConfirm={vi.fn()}
        onCropChange={vi.fn()}
        onZoomChange={onZoomChange}
        onCropComplete={vi.fn()}
      />
    );

    fireEvent.change(screen.getByLabelText("Zoom"), {
      target: { value: "2.1" },
    });
    expect(onZoomChange).toHaveBeenCalledWith(2.1);
  });
});
