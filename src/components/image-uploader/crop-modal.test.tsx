import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { CropModal } from "./crop-modal";

vi.mock("react-easy-crop", () => ({
  __esModule: true,
  default: (props: {
    cropShape: "rect" | "round";
    aspect: number;
    onCropComplete: (
      area: { x: number; y: number; width: number; height: number },
      areaPixels: { x: number; y: number; width: number; height: number },
    ) => void;
  }) => (
    <div
      data-testid="cropper"
      data-crop-shape={props.cropShape}
      data-aspect={String(props.aspect)}
    >
      <button
        type="button"
        onClick={() =>
          props.onCropComplete(
            { x: 0, y: 0, width: 10, height: 10 },
            { x: 1, y: 2, width: 100, height: 80 },
          )
        }
      >
        Complete crop
      </button>
    </div>
  ),
}));

describe("<CropModal />", () => {
  const baseProps = {
    imageUrl: "blob:mock",
    aspect: 1,
    rounded: false,
    crop: { x: 0, y: 0 },
    zoom: 1,
    onCropChange: vi.fn(),
    onZoomChange: vi.fn(),
    onCropComplete: vi.fn(),
    onClose: vi.fn(),
    onConfirm: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders dialog and cropper", () => {
    render(<CropModal {...baseProps} />);

    expect(screen.getByRole("dialog", { name: /crop image/i })).toBeInTheDocument();
    expect(screen.getByTestId("cropper")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    render(<CropModal {...baseProps} />);

    fireEvent.click(screen.getByRole("button", { name: /close crop modal/i }));

    expect(baseProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onConfirm when crop button is clicked", () => {
    render(<CropModal {...baseProps} />);

    fireEvent.click(screen.getByRole("button", { name: "Crop" }));

    expect(baseProps.onConfirm).toHaveBeenCalledTimes(1);
  });

  it("calls onZoomChange with parsed range value", () => {
    render(<CropModal {...baseProps} />);

    fireEvent.change(screen.getByLabelText("Zoom"), {
      target: { value: "2.4" },
    });

    expect(baseProps.onZoomChange).toHaveBeenCalledWith(2.4);
  });

  it("passes rounded mode to cropper and forwards completed pixels", () => {
    render(<CropModal {...baseProps} rounded />);

    expect(screen.getByTestId("cropper")).toHaveAttribute("data-crop-shape", "round");

    fireEvent.click(screen.getByRole("button", { name: "Complete crop" }));

    expect(baseProps.onCropComplete).toHaveBeenCalledWith({
      x: 1,
      y: 2,
      width: 100,
      height: 80,
    });
  });
});

