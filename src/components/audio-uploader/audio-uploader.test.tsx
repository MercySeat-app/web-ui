import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

import AudioUploader from "./audio-uploader";

vi.mock("axios");
const mockedAxios = axios as unknown as { post: any; put: any };

describe("<AudioUploader />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockedAxios.put = vi.fn().mockResolvedValue({});
    mockedAxios.post = vi.fn().mockImplementation((url: string) => {
      if (url.includes("get-upload-url")) {
        return Promise.resolve({ data: { uploadUrl: "https://s3.example/put", key: "abc" } });
      }
      return Promise.resolve({ data: {} });
    });
  });

  it("renders prompt and uploads a valid audio file", async () => {
    render(<AudioUploader />);

    expect(screen.getByText(/Click or drag & drop audio/i)).toBeInTheDocument();

    const file = new File(["dummy audio content"], "song.mp3", { type: "audio/mpeg" });
    const input = document.querySelector('input[type="file"]') as HTMLInputElement | null;
    if (!input) throw new Error("file input not found");

    await userEvent.upload(input, file);

    // after upload finishes we expect the success message and that axios was called
    expect(await screen.findByText(/Upload successful!/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(mockedAxios.put).toHaveBeenCalled();
      expect(mockedAxios.post).toHaveBeenCalled();
    });
  });
});
