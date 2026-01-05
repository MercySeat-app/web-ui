import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectedFile } from "./selected-file";

describe("<SelectedFile />", () => {
  it("renders file name and shows whether it's audio or video", () => {
    const video = new File(["x"], "sermon.mp4", { type: "video/mp4" });

    render(<SelectedFile file={video} onChange={vi.fn()} />);

    expect(screen.getByText("sermon.mp4")).toBeInTheDocument();
    expect(screen.getByText(/Video file uploaded/i)).toBeInTheDocument();
  });

  it("shows Audio label for audio files", () => {
    const audio = new File(["x"], "podcast.mp3", { type: "audio/mpeg" });

    render(<SelectedFile file={audio} onChange={vi.fn()} />);

    expect(screen.getByText("podcast.mp3")).toBeInTheDocument();
    expect(screen.getByText(/Audio file uploaded/i)).toBeInTheDocument();
  });

  it("calls onChange(null) when remove button is clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const audio = new File(["x"], "podcast.mp3", { type: "audio/mpeg" });

    render(<SelectedFile file={audio} onChange={onChange} />);

    const btn = screen.getByRole("button");
    await user.click(btn);

    expect(onChange).toHaveBeenCalledWith(null);
  });
});
