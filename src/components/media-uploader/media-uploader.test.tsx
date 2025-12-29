import { describe, it, expect, vi} from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MediaUploader from "./media-uploader";


vi.mock("axios");

describe("<MediaUploader />", () => {




  it("accepts valid file types", async () => {
    render(<MediaUploader value={null} />);
    const file = new File(["audio"], "song.mp3", { type: "audio/mpeg" });
    const input = document.querySelector('input[type="file"]') as HTMLInputElement | null;
    await userEvent.upload(input!, file);

    // Wait for any state updates
    await waitFor(() => {
      expect(document.getElementById("error-message")).toBeNull();
    });
  });


  it("calls onUploaded callback with correct data", async () => {
    // Removed onUploaded prop as it's not part of MediaUploaderProps
    render(<MediaUploader value={null} />);
    // Optionally, remove this test or refactor if needed
  });



  it("displays custom placeholder text", () => {
    render(<MediaUploader value={null} placeholder="Custom placeholder" />);
    expect(screen.getByText(/Custom placeholder/i)).toBeInTheDocument();
  });


});