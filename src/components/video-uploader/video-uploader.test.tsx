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
    render(<VideoUploader />);

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
});
