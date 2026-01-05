import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import MediaUploader, { type MediaInfo } from "./media-uploader";

describe("MediaUploader snapshot", () => {
  it("matches snapshot (default)", () => {
    const { container } = render(<MediaUploader value={null} onChange={function (_value: MediaInfo): void {
      throw new Error("Function not implemented.");
    } } />);
    expect(container).toMatchSnapshot();
  });
});
