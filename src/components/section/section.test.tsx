import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Section } from "./section";

describe("<Section />", () => {
  it("renders children inside the content area", () => {
    render(
      <Section title="Profile" data-testid="section-root">
        <div>Inner content</div>
      </Section>
    );

    const section = screen.getByTestId("section-root");
    expect(section).toBeInTheDocument();

    const content = screen.getByText("Inner content");
    expect(content).toBeInTheDocument();
  });

  it("renders a header when title is provided", () => {
    render(
      <Section title="Settings">
        <p>Body</p>
      </Section>
    );

    const title = screen.getByText("Settings");
    expect(title).toBeInTheDocument();
    expect(title.tagName.toLowerCase()).toBe("h3");
  });

  it("does not render a header when title is not provided", () => {
    const { container } = render(
      <Section>
        <p>No title here</p>
      </Section>
    );

    const header = container.querySelector("header");
    expect(header).toBeNull();
  });

  it("renders a footer when footer prop is provided", () => {
    render(
      <Section
        title="With footer"
        footer={<button>Save changes</button>}
      >
        <p>Body</p>
      </Section>
    );

    const button = screen.getByRole("button", { name: "Save changes" });
    expect(button).toBeInTheDocument();
  });

  it("applies the default elevation class when elevation is not provided", () => {
    render(
      <Section data-testid="section-root">
        <p>Body</p>
      </Section>
    );

    const section = screen.getByTestId("section-root");

    expect(section.className).toContain("shadow-none");
  });

  it("applies the correct elevation class when a specific elevation is provided", () => {
    render(
      <Section elevation="elevation-3" data-testid="section-root">
        <p>Body</p>
      </Section>
    );

    const section = screen.getByTestId("section-root");

    expect(section.className).toContain(
      "shadow-[0px_3px_4px_rgba(0,0,0,0.14),0px_3px_3px_-2px_rgba(0,0,0,0.2)]"
    );
  });

  it("merges custom className with the base section classes", () => {
    render(
      <Section
        className="custom-section"
        data-testid="section-root"
      >
        <p>Body</p>
      </Section>
    );

    const section = screen.getByTestId("section-root");
    expect(section.className).toContain("bg-white");
    expect(section.className).toContain("rounded-2xl");
    expect(section.className).toContain("custom-section");
  });

  it("passes through native section props like aria-label and id", () => {
    render(
      <Section
        id="profile-section"
        aria-label="Profile section"
      >
        <p>Body</p>
      </Section>
    );

    const section = screen.getByLabelText("Profile section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "profile-section");
  });
});
