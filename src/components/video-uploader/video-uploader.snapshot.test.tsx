import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import VideoUploader from "./video-uploader";

describe("VideoUploader snapshot", () => {
  it("matches snapshot (default)", () => {
    const { container } = render(<VideoUploader value={null} />);
    expect(container).toMatchSnapshot();
  });
});
