import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import AudioUploader from "./audio-uploader";

describe("AudioUploader snapshot", () => {
  it("matches snapshot (default)", () => {
    const { container } = render(<AudioUploader value={null} />);
    expect(container).toMatchSnapshot();
  });
});
