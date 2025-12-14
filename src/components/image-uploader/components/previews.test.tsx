import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Previews } from "./previews";

describe("<Previews />", () => {
  it("renders single preview and remove button", () => {
    const onRemove = vi.fn();

    render(
      <Previews
        urls={["blob:1"]}
        multiple={false}
        rounded={false}
        aspect={1}
        onRemove={onRemove}
        onReset={vi.fn()}
      />
    );

    expect(screen.getByAltText("Preview")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Remove image/i }));
    expect(onRemove).toHaveBeenCalledWith(0);
  });

  it("renders multiple previews and remove button per item", () => {
    const onRemove = vi.fn();

    render(
      <Previews
        urls={["blob:1", "blob:2"]}
        multiple
        rounded={false}
        aspect={16 / 9}
        onRemove={onRemove}
        onReset={vi.fn()}
      />
    );

    expect(screen.getByAltText("Preview 1")).toBeInTheDocument();
    expect(screen.getByAltText("Preview 2")).toBeInTheDocument();

    const removeButtons = screen.getAllByRole("button", {
      name: /Remove image/i,
    });
    fireEvent.click(removeButtons[1]);
    expect(onRemove).toHaveBeenCalledWith(1);

    expect(screen.getByText(/Add more images/i)).toBeInTheDocument();
  });

  it("applies rounded preview class when rounded=true", () => {
    render(
      <Previews
        urls={["blob:1"]}
        multiple={false}
        rounded
        onRemove={vi.fn()}
        onReset={vi.fn()}
      />
    );

    // the preview container in single mode has "rounded-full"
    const img = screen.getByAltText("Preview");
    const container = img.closest("div");
    expect(container?.className ?? "").toContain("rounded-full");
  });
});
