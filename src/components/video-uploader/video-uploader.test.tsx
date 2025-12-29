import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

import VideoUploader from "./video-uploader";

vi.mock("axios");
const mockedAxios = axios as unknown as { post: any; put: any };

describe("<VideoUploader />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockedAxios.put = vi.fn().mockResolvedValue({});
    mockedAxios.post = vi.fn().mockImplementation((url: string) => {
      if (url.includes("get-upload-url")) {
        return Promise.resolve({ data: { uploadUrl: "https://s3.example/put", key: "vid-123" } });
      }
      return Promise.resolve({ data: {} });
    });
  });

  it("renders prompt and uploads a valid video file", async () => {
    render(<VideoUploader value={null} />);

    expect(screen.getByText(/Click or drag & drop video/i)).toBeInTheDocument();

    const file = new File(["dummy video content"], "clip.mp4", { type: "video/mp4" });
    const input = document.querySelector('input[type="file"]') as HTMLInputElement | null;
    if (!input) throw new Error("file input not found");

    await userEvent.upload(input, file);

    // expect success message and that axios was invoked
    expect(await screen.findByText(/Upload successful!/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(mockedAxios.put).toHaveBeenCalled();
      expect(mockedAxios.post).toHaveBeenCalled();
    });
  });

  it("accepts valid video types", async () => {
    render(<VideoUploader value={null} />);
    const file = new File(["video"], "clip.mp4", { type: "video/mp4" });
    const input = document.querySelector('input[type="file"]') as HTMLInputElement | null;
    await userEvent.upload(input!, file);
    await waitFor(() => {
      expect(document.getElementById("error-message")).toBeNull();
    });
  });

  it("calls onUploaded callback with correct data", async () => {
    const onUploaded = vi.fn();
    render(<VideoUploader value={null} onUploaded={onUploaded} />);
    const file = new File(["video"], "clip.mp4", { type: "video/mp4" });
    const input = document.querySelector('input[type="file"]') as HTMLInputElement | null;
    await userEvent.upload(input!, file);
    await waitFor(() => {
      expect(onUploaded).toHaveBeenCalledWith(expect.objectContaining({ key: "vid-123" }));
    });
  });

  it("displays error message on upload failure", async () => {
    mockedAxios.put = vi.fn().mockRejectedValue(new Error("Network error"));
    render(<VideoUploader value={null} />);
    const file = new File(["video"], "clip.mp4", { type: "video/mp4" });
    const input = document.querySelector('input[type="file"]') as HTMLInputElement | null;
    await userEvent.upload(input!, file);
    expect(await screen.findByText(/Network error/i)).toBeInTheDocument();
  });

  it("displays custom placeholder text", () => {
    render(<VideoUploader value={null} placeholder="Custom placeholder" />);
    expect(screen.getByText(/Custom placeholder/i)).toBeInTheDocument();
  });
});
