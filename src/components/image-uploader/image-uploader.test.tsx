import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ImageUploader } from "./image-uploader";
import { useState } from "react";

vi.mock("react-easy-crop", () => ({
  __esModule: true,
  default: () => <div data-testid="cropper" />,
}));

vi.mock("./utils/image-utils", () => ({
  getCroppedImg: vi.fn(
    async () => new File(["x"], "cropped.png", { type: "image/png" })
  ),
}));

function createFile(name = "test.png", type = "image/png") {
  return new File(["hello"], name, { type });
}

function Controlled({ aspectRatio = 1 }: { aspectRatio?: number }) {
  const [value, setValue] = useState<File | null>(null);

  return (
    <ImageUploader
      value={value}
      onChange={setValue}
      aspectRatio={aspectRatio}
      extensions={["png"]}
    />
  );
}

describe("<ImageUploader />", () => {
  it("renders dropzone when no value is provided", () => {
    render(
      <ImageUploader
        value={null}
        onChange={vi.fn()}
        aspectRatio={1}
        extensions={["png"]}
      />
    );

    expect(
      screen.getByText("Click to upload or drag and drop")
    ).toBeInTheDocument();
  });

  it("renders preview when value is provided", () => {
    const file = createFile();

    render(
      <ImageUploader
        value={file}
        onChange={vi.fn()}
        aspectRatio={1}
        extensions={["png"]}
      />
    );

    expect(screen.getByAltText("Preview")).toBeInTheDocument();
  });

  it("calls onChange(null) when remove button is clicked", () => {
    const onChange = vi.fn();
    const file = createFile();

    render(
      <ImageUploader
        value={file}
        onChange={onChange}
        aspectRatio={1}
        extensions={["png"]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /remove image/i }));

    expect(onChange).toHaveBeenCalledWith(null);
  });

  it("opens crop modal when a file is dropped", async () => {
    render(<Controlled aspectRatio={1} />);

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    expect(input).toBeTruthy();

    fireEvent.change(input, {
      target: {
        files: [createFile()],
      },
    });

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
  });

  it("shows dimension validation errors and does not open crop modal", async () => {
    const createObjectURLSpy = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:mock-image");
    const revokeObjectURLSpy = vi
      .spyOn(URL, "revokeObjectURL")
      .mockImplementation(() => {});

    class MockImage {
      onload: null | (() => void) = null;
      onerror: null | (() => void) = null;
      naturalWidth = 120;
      naturalHeight = 120;
      width = 120;
      height = 120;

      set src(_value: string) {
        setTimeout(() => this.onload?.(), 0);
      }
    }

    vi.stubGlobal("Image", MockImage as unknown as typeof Image);

    render(
      <ImageUploader
        value={null}
        onChange={vi.fn()}
        aspectRatio={1}
        extensions={["png"]}
        minWidth={200}
      />
    );

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    fireEvent.change(input, {
      target: {
        files: [createFile()],
      },
    });

    expect(
      await screen.findByText("Image width is too small. Minimum width is 200px.")
    ).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    createObjectURLSpy.mockRestore();
    revokeObjectURLSpy.mockRestore();
    vi.unstubAllGlobals();
  });
});
