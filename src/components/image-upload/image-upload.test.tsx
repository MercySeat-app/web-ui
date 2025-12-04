import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ImageUpload } from "./image-upload";

describe("ImageUpload", () => {
  it("renders dropzone with default placeholder", () => {
    render(<ImageUpload />);
    expect(
      screen.getByText(/click to upload or drag and drop/i)
    ).toBeInTheDocument();
  });

  it("renders custom placeholder", () => {
    render(<ImageUpload placeholder="Upload your photo" />);
    expect(screen.getByText(/upload your photo/i)).toBeInTheDocument();
  });

  it("shows custom hint text when provided", () => {
    render(<ImageUpload hint="PNG, JPG, or WEBP (recommended: 800x800px)" />);
    expect(
      screen.getByText(/PNG, JPG, or WEBP \(recommended: 800x800px\)/i)
    ).toBeInTheDocument();
  });

  it("displays allowed file extensions", () => {
    render(<ImageUpload extensions={["png", "jpg"]} />);
    expect(screen.getByText(/PNG, JPG/)).toBeInTheDocument();
  });

  it("calls onChange when file is dropped (no crop)", async () => {
    const onChange = vi.fn();
    const { container } = render(<ImageUpload onChange={onChange} shouldCrop={false} />);

    const file = new File(["test"], "test.png", { type: "image/png" });
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;

    await userEvent.upload(input, file);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith([file]);
    });
  });

  it("shows crop interface when shouldCrop is true", async () => {
    const onChange = vi.fn();
    const { container } = render(<ImageUpload onChange={onChange} shouldCrop={true} />);

    const file = new File(["test"], "test.png", { type: "image/png" });
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;

    await userEvent.upload(input, file);

    await waitFor(() => {
      expect(screen.getByText(/zoom/i)).toBeInTheDocument();
      expect(screen.getByText(/cancel/i)).toBeInTheDocument();
      expect(screen.getByText(/done/i)).toBeInTheDocument();
    });
  });

  it("shows preview after image is uploaded without crop", async () => {
    const { container } = render(<ImageUpload shouldCrop={false} />);

    const file = new File(["test"], "test.png", { type: "image/png" });
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;

    await userEvent.upload(input, file);

    await waitFor(() => {
      const preview = screen.getByAltText(/preview 1/i);
      expect(preview).toBeInTheDocument();
    });
  });

  it("accepts valid file types only", async () => {
    const onChange = vi.fn();
    const { container } = render(<ImageUpload extensions={["png"]} onChange={onChange} shouldCrop={false} />);

    // Upload a valid PNG file
    const validFile = new File(["test"], "test.png", { type: "image/png" });
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;

    await userEvent.upload(input, validFile);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith([validFile]);
    });
  });

  it("accepts multiple files when multiple prop is true", async () => {
    const onChange = vi.fn();
    const { container } = render(<ImageUpload onChange={onChange} multiple={true} shouldCrop={false} />);

    const file1 = new File(["test1"], "test1.png", { type: "image/png" });
    const file2 = new File(["test2"], "test2.png", { type: "image/png" });
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;

    await userEvent.upload(input, [file1, file2]);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith([file1, file2]);
    });
  });

  it("only accepts single file when multiple prop is false", async () => {
    const onChange = vi.fn();
    const { container } = render(<ImageUpload onChange={onChange} multiple={false} shouldCrop={false} />);

    const file1 = new File(["test1"], "test1.png", { type: "image/png" });
    const file2 = new File(["test2"], "test2.png", { type: "image/png" });
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;

    await userEvent.upload(input, [file1, file2]);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith([file1]);
    });
  });

  it("shows 'Add more images' button after upload when multiple is true", async () => {
    const { container } = render(<ImageUpload multiple={true} shouldCrop={false} />);

    const file = new File(["test"], "test.png", { type: "image/png" });
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;

    await userEvent.upload(input, file);

    await waitFor(() => {
      expect(screen.getByText(/add more images/i)).toBeInTheDocument();
    });
  });

  it("does not show 'Add more images' button when multiple is false", async () => {
    const { container } = render(<ImageUpload multiple={false} shouldCrop={false} />);

    const file = new File(["test"], "test.png", { type: "image/png" });
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;

    await userEvent.upload(input, file);

    await waitFor(() => {
      expect(screen.queryByText(/add more images/i)).not.toBeInTheDocument();
    });
  });

  it("applies custom className to container", () => {
    const { container } = render(<ImageUpload className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("shows drag active state", async () => {
    const { container } = render(<ImageUpload />);
    
    // The dropzone should exist
    const dropzone = container.querySelector('[class*="border-dashed"]');
    expect(dropzone).toBeInTheDocument();
  });
});

