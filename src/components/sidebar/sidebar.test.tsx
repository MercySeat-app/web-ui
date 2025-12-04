import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Sidebar } from "./sidebar";

describe("<Sidebar />", () => {
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
    expect(aside).toHaveClass("w-[247px]");
  });

  it("renders the header with logo and brand name", () => {
    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const logo = screen.getByAltText("MercySeat logo");
    expect(logo).toBeInTheDocument();

    const title = screen.getByText("MercySeat");
    expect(title).toBeInTheDocument();
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

  it("renders the mobile toggle button with correct aria-label", () => {
    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const button = screen.getByRole("button", { name: "Open sidebar" });
    expect(button).toBeInTheDocument();
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

  it("shows overlay when open and hides it when closed", async () => {
    const user = userEvent.setup();

    render(
      <Sidebar>
        <div>Content</div>
      </Sidebar>
    );

    const button = screen.getByRole("button", { name: "Open sidebar" });

    const overlay = document.querySelector("div.bg-black\\/40") as HTMLElement; // tailwind class selector
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
});
