import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ImageUploader } from "./image-uploader";

describe("ImageUploader", () => {
  const defaultPlaceholder = "PNG, JPG, or WEBP (recommended: 1080x660px)";

  it("renders hardcoded first line and required placeholder", () => {
    render(<ImageUploader placeholder={defaultPlaceholder} />);
    expect(
      screen.getByText(/click to upload or drag and drop/i)
    ).toBeInTheDocument();
    expect(screen.getByText(defaultPlaceholder)).toBeInTheDocument();
  });

  it("renders custom placeholder text", () => {
    const customPlaceholder = "PNG, JPG, or WEBP (recommended: 800x800px)";
    render(<ImageUploader placeholder={customPlaceholder} />);
    expect(screen.getByText(customPlaceholder)).toBeInTheDocument();
  });

  it("always shows hardcoded first line", () => {
    render(<ImageUploader placeholder={defaultPlaceholder} />);
    expect(
      screen.getByText(/click to upload or drag and drop/i)
    ).toBeInTheDocument();
  });

  it("calls onChange when file is dropped (no crop)", async () => {
    const onChange = vi.fn();
    const { container } = render(<ImageUploader placeholder={defaultPlaceholder} onChange={onChange} shouldCrop={false} />);

    const file = new File(["test"], "test.png", { type: "image/png" });
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;

    await userEvent.upload(input, file);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith([file]);
    });
  });

  it("shows crop interface when shouldCrop is true", async () => {
    const onChange = vi.fn();
    const { container } = render(<ImageUploader placeholder={defaultPlaceholder} onChange={onChange} shouldCrop={true} />);

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
    const { container } = render(<ImageUploader placeholder={defaultPlaceholder} shouldCrop={false} />);

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
    const { container } = render(<ImageUploader placeholder={defaultPlaceholder} extensions={["png"]} onChange={onChange} shouldCrop={false} />);

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
    const { container } = render(<ImageUploader placeholder={defaultPlaceholder} onChange={onChange} multiple={true} shouldCrop={false} />);

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
    const { container } = render(<ImageUploader placeholder={defaultPlaceholder} onChange={onChange} multiple={false} shouldCrop={false} />);

    const file1 = new File(["test1"], "test1.png", { type: "image/png" });
    const file2 = new File(["test2"], "test2.png", { type: "image/png" });
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;

    await userEvent.upload(input, [file1, file2]);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith([file1]);
    });
  });

  it("shows 'Add more images' button after upload when multiple is true", async () => {
    const { container } = render(<ImageUploader placeholder={defaultPlaceholder} multiple={true} shouldCrop={false} />);

    const file = new File(["test"], "test.png", { type: "image/png" });
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;

    await userEvent.upload(input, file);

    await waitFor(() => {
      expect(screen.getByText(/add more images/i)).toBeInTheDocument();
    });
  });

  it("does not show 'Add more images' button when multiple is false", async () => {
    const { container } = render(<ImageUploader placeholder={defaultPlaceholder} multiple={false} shouldCrop={false} />);

    const file = new File(["test"], "test.png", { type: "image/png" });
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;

    await userEvent.upload(input, file);

    await waitFor(() => {
      expect(screen.queryByText(/add more images/i)).not.toBeInTheDocument();
    });
  });

  it("applies custom className to container", () => {
    const { container } = render(<ImageUploader placeholder={defaultPlaceholder} className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("shows drag active state", async () => {
    const { container } = render(<ImageUploader placeholder={defaultPlaceholder} />);
    
    // The dropzone should exist
    const dropzone = container.querySelector('[class*="border-dashed"]');
    expect(dropzone).toBeInTheDocument();
  });
});

