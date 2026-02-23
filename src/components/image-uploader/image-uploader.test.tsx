import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ImageUploader } from "./image-uploader";
import { useState } from "react";
import { getCroppedImg } from "./utils/image-utils";

vi.mock("react-easy-crop", () => ({
  __esModule: true,
  default: (props: {
    onCropComplete: (
      area: { x: number; y: number; width: number; height: number },
      areaPixels: { x: number; y: number; width: number; height: number },
    ) => void;
  }) => (
    <div data-testid="cropper">
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
  beforeEach(() => {
    vi.clearAllMocks();
  });

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

  it("shows max-height validation error when image is too tall", async () => {
    const createObjectURLSpy = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:mock-image");
    const revokeObjectURLSpy = vi
      .spyOn(URL, "revokeObjectURL")
      .mockImplementation(() => {});

    class MockImage {
      onload: null | (() => void) = null;
      onerror: null | (() => void) = null;
      naturalWidth = 200;
      naturalHeight = 900;
      width = 200;
      height = 900;

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
        maxHeight={500}
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
      await screen.findByText("Image height is too large. Maximum height is 500px.")
    ).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    createObjectURLSpy.mockRestore();
    revokeObjectURLSpy.mockRestore();
    vi.unstubAllGlobals();
  });

  it("shows fallback error when image dimensions cannot be read", async () => {
    const createObjectURLSpy = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:mock-image");
    const revokeObjectURLSpy = vi
      .spyOn(URL, "revokeObjectURL")
      .mockImplementation(() => {});

    class MockImage {
      onload: null | (() => void) = null;
      onerror: null | (() => void) = null;

      set src(_value: string) {
        setTimeout(() => this.onerror?.(), 0);
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
      await screen.findByText("Unable to read image dimensions. Please try another image.")
    ).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    createObjectURLSpy.mockRestore();
    revokeObjectURLSpy.mockRestore();
    vi.unstubAllGlobals();
  });

  it("closes crop modal when close button is clicked", async () => {
    render(<Controlled aspectRatio={1} />);

    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    fireEvent.change(input, {
      target: {
        files: [createFile()],
      },
    });

    expect(await screen.findByRole("dialog")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /close crop modal/i }));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("confirms crop and calls onChange with cropped file", async () => {
    const onChange = vi.fn();
    const croppedFile = new File(["cropped"], "cropped.png", {
      type: "image/png",
    });
    vi.mocked(getCroppedImg).mockResolvedValueOnce(croppedFile);

    render(
      <ImageUploader
        value={null}
        onChange={onChange}
        aspectRatio={1}
        extensions={["png"]}
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

    expect(await screen.findByRole("dialog")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Complete crop" }));
    fireEvent.click(screen.getByRole("button", { name: "Crop" }));

    await waitFor(() => {
      expect(getCroppedImg).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(croppedFile);
    });
  });
});
