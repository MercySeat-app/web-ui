import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import MediaUploader from "./media-uploader";

describe("MediaUploader snapshot", () => {
  it("matches snapshot (default)", () => {
    const { container } = render(<MediaUploader value={null} />);
    expect(container).toMatchSnapshot();
  });
});
