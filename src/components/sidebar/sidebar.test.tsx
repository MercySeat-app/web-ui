import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Sidebar } from "./sidebar";

describe("<Sidebar />", () => {
  // ── Rendering ────────────────────────────────────────────────────────

  it("renders children inside the aside", () => {
    render(
      <Sidebar>
        <div>Sidebar content</div>
      </Sidebar>
    );

    const content = screen.getByText("Sidebar content");
    expect(content).toBeInTheDocument();

    const aside = content.closest("aside");
    expect(aside).not.toBeNull();
    expect(aside).toHaveClass("w-[315px]");
  });

  it("renders the logo lockup with wordmark text", () => {
    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const title = screen.getByText("MercySeat");
    expect(title).toBeInTheDocument();

    const headerWrapper = title.closest("div") as HTMLDivElement | null;
    expect(headerWrapper).not.toBeNull();

    const svg = headerWrapper!.querySelector("svg");
    expect(svg).not.toBeNull();
  });

  it("renders a background image layer behind the content", () => {
    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const aside = document.querySelector("aside") as HTMLElement;
    expect(aside).toBeInTheDocument();

    const bgImg = aside.querySelector("img[aria-hidden='true']");
    expect(bgImg).toBeInTheDocument();
    expect(bgImg).toHaveClass("object-cover");
    expect(bgImg).toHaveClass("object-top");
  });

  it("renders the MercySeat heading as an h1", () => {
    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const heading = screen.getByRole("heading", { level: 1, name: "MercySeat" });
    expect(heading).toBeInTheDocument();
  });

  it("renders multiple children without wrapping them in extra elements", () => {
    render(
      <Sidebar>
        <nav data-testid="nav">Nav</nav>
        <footer data-testid="footer">Footer</footer>
      </Sidebar>
    );

    expect(screen.getByTestId("nav")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  // ── Mobile toggle button ────────────────────────────────────────────

  it("renders the mobile toggle button with correct initial aria-label", () => {
    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const button = screen.getByRole("button", { name: "Open sidebar" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
  });

  it("updates aria-label to 'Close sidebar' when opened", async () => {
    const user = userEvent.setup();

    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const button = screen.getByRole("button", { name: "Open sidebar" });
    await user.click(button);

    expect(
      screen.getByRole("button", { name: "Close sidebar" })
    ).toBeInTheDocument();
  });

  // ── Open / close behaviour ──────────────────────────────────────────

  it("starts with the aside off-screen (closed)", () => {
    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const aside = document.querySelector("aside") as HTMLElement;
    expect(aside.className).toContain("-translate-x-full");
    expect(aside.className).not.toContain(" translate-x-0");
  });

  it("toggles the sidebar open/closed when the toggle button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const button = screen.getByRole("button", { name: "Open sidebar" });

    const aside = document.querySelector("aside") as HTMLElement;
    expect(aside).toBeInTheDocument();
    expect(aside.className).toContain("-translate-x-full");

    await user.click(button);
    expect(aside.className).toContain("translate-x-0");
    expect(
      screen.getByRole("button", { name: "Close sidebar" })
    ).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: "Close sidebar" });
    await user.click(closeButton);
    expect(aside.className).toContain("-translate-x-full");
  });

  it("can be toggled open, closed, and open again (full cycle)", async () => {
    const user = userEvent.setup();

    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const button = screen.getByRole("button", { name: "Open sidebar" });
    const aside = document.querySelector("aside") as HTMLElement;

    // open
    await user.click(button);
    expect(aside.className).toContain("translate-x-0");

    // close
    await user.click(screen.getByRole("button", { name: "Close sidebar" }));
    expect(aside.className).toContain("-translate-x-full");

    // re-open
    await user.click(screen.getByRole("button", { name: "Open sidebar" }));
    expect(aside.className).toContain("translate-x-0");
  });

  // ── Overlay ─────────────────────────────────────────────────────────

  it("shows overlay when open and hides it when closed", async () => {
    const user = userEvent.setup();

    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const button = screen.getByRole("button", { name: "Open sidebar" });

    const overlay = document.querySelector("div.bg-black\\/40") as HTMLElement;
    expect(overlay).toBeInTheDocument();
    expect(overlay.className).toContain("opacity-0");
    expect(overlay.className).toContain("pointer-events-none");

    await user.click(button);

    expect(overlay.className).toContain("opacity-100");
    expect(overlay.className).toContain("pointer-events-auto");
  });

  it("closes the sidebar when clicking on the overlay", async () => {
    const user = userEvent.setup();

    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const button = screen.getByRole("button", { name: "Open sidebar" });
    await user.click(button);

    const aside = document.querySelector("aside") as HTMLElement;
    const overlay = document.querySelector("div.bg-black\\/40") as HTMLElement;

    expect(aside.className).toContain("translate-x-0");

    await user.click(overlay);

    expect(aside.className).toContain("-translate-x-full");
  });

  it("hides the overlay after closing via the overlay click", async () => {
    const user = userEvent.setup();

    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const button = screen.getByRole("button", { name: "Open sidebar" });
    const overlay = document.querySelector("div.bg-black\\/40") as HTMLElement;

    await user.click(button);
    expect(overlay.className).toContain("opacity-100");

    await user.click(overlay);
    expect(overlay.className).toContain("opacity-0");
    expect(overlay.className).toContain("pointer-events-none");
  });

  // ── Accessibility ───────────────────────────────────────────────────

  it("marks the background image as decorative (aria-hidden)", () => {
    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const aside = document.querySelector("aside") as HTMLElement;
    const bgImg = aside.querySelector("img") as HTMLImageElement;

    expect(bgImg).toHaveAttribute("aria-hidden", "true");
    expect(bgImg).toHaveAttribute("alt", "");
  });

  it("uses an aside landmark for the sidebar panel", () => {
    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const aside = screen.getByRole("complementary");
    expect(aside).toBeInTheDocument();
    expect(aside.tagName).toBe("ASIDE");
  });
});
