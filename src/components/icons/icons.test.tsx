import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  AnalyticsIcon,
  AnnouncementIcon,
  ChurchIcon,
  ClassIcon,
  CrownIcon,
  EventIcon,
  GiftIcon,
  HomeIcon,
  Icon,
  ListIcon,
  LivestreamIcon,
  LockClosedIcon,
  LockOpenIcon,
  MinistryIcon,
  PodcastIcon,
  SeriesIcon,
  SermonIcon,
  SubscriptionIcon,
  VideoIcon,
} from "./index";

describe("Icon components", () => {
  it("ChurchIcon renders an SVG and respects numeric size", () => {
    render(<ChurchIcon size={32} aria-label="Church icon" />);

    const svg = screen.getByRole("img", { name: "Church icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");
    expect(svg).toHaveAttribute("width", "32");
    expect(svg).toHaveAttribute("height", "32");
  });

  it("GiftIcon renders an SVG and respects string size", () => {
    render(<GiftIcon size="1.5rem" aria-label="Gift icon" />);

    const svg = screen.getByRole("img", { name: "Gift icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");
    expect(svg).toHaveAttribute("width", "1.5rem");
    expect(svg).toHaveAttribute("height", "1.5rem");
  });

  it("MinistryIcon is aria-hidden by default when no aria-label is provided", () => {
    const { container } = render(<MinistryIcon />);

    const svg = container.querySelector("svg") as SVGSVGElement | null;
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("role", "presentation");
  });

  it("SermonIcon uses currentColor for stroke", () => {
    const { container } = render(<SermonIcon aria-label="Sermon icon" />);

    const svg = screen.getByRole("img", { name: "Sermon icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("stroke", "currentColor");
  });

  it("<Icon /> registry renders ChurchIcon when name='church'", () => {
    render(<Icon name="church" size={24} aria-label="Church icon from registry" />);

    const svg = screen.getByRole("img", { name: "Church icon from registry" });
    expect(svg.tagName.toLowerCase()).toBe("svg");
    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");
  });

  it("<Icon /> registry renders GiftIcon when name='gift'", () => {
    render(<Icon name="gift" size={20} aria-label="Gift icon from registry" />);

    const svg = screen.getByRole("img", { name: "Gift icon from registry" });
    expect(svg.tagName.toLowerCase()).toBe("svg");
    expect(svg).toHaveAttribute("width", "20");
    expect(svg).toHaveAttribute("height", "20");
  });

  it("AnnouncementIcon uses currentColor for stroke", () => {
    const { container } = render(<AnnouncementIcon aria-label="Announcement icon" />);

    const svg = screen.getByRole("img", { name: "Announcement icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("stroke", "currentColor");
  });

  it("ClassIcon uses currentColor for stroke", () => {
    const { container } = render(<ClassIcon aria-label="Class icon" />);

    const svg = screen.getByRole("img", { name: "Class icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("stroke", "currentColor");
  });

  it("EventIcon uses currentColor for stroke", () => {
    const { container } = render(<EventIcon aria-label="Event icon" />);

    const svg = screen.getByRole("img", { name: "Event icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("stroke", "currentColor");
  });

  it("PodcastIcon uses currentColor for stroke", () => {
    const { container } = render(<PodcastIcon aria-label="Podcast icon" />);

    const svg = screen.getByRole("img", { name: "Podcast icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("stroke", "currentColor");
  });

  it("SeriesIcon uses currentColor for stroke", () => {
    const { container } = render(<SeriesIcon aria-label="Series icon" />);

    const svg = screen.getByRole("img", { name: "Series icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("stroke", "currentColor");
  });

  it("SubscriptionIcon uses currentColor for stroke", () => {
    const { container } = render(<SubscriptionIcon aria-label="Subscription icon" />);

    const svg = screen.getByRole("img", { name: "Subscription icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("stroke", "currentColor");
  });

  it("HomeIcon uses currentColor for stroke", () => {
    const { container } = render(<HomeIcon aria-label="Home icon" />);

    const svg = screen.getByRole("img", { name: "Home icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("stroke", "currentColor");
  });

  it("CrownIcon uses currentColor for stroke", () => {
    const { container } = render(<CrownIcon aria-label="Crown icon" />);

    const svg = screen.getByRole("img", { name: "Crown icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("stroke", "currentColor");
  });

  it("LockOpenIcon uses currentColor for stroke", () => {
    const { container } = render(<LockOpenIcon aria-label="Lock Open icon" />);

    const svg = screen.getByRole("img", { name: "Lock Open icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("fill", "currentColor");
  });

  it("LockClosedIcon uses currentColor for stroke", () => {
    const { container } = render(<LockClosedIcon aria-label="Lock Closed icon" />);

    const svg = screen.getByRole("img", { name: "Lock Closed icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("fill", "currentColor");
  });

  it("VideoIcon uses currentColor for stroke", () => {
    const { container } = render(<VideoIcon aria-label="Video icon" />);

    const svg = screen.getByRole("img", { name: "Video icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("fill", "currentColor");
  });

  it("ListIcon uses currentColor for stroke", () => {
    const { container } = render(<ListIcon aria-label="List icon" />);

    const svg = screen.getByRole("img", { name: "List icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("stroke", "currentColor");
  });

  it("Analytics uses currentColor for stroke", () => {
    const { container } = render(<AnalyticsIcon aria-label="Analytics icon" />);

    const svg = screen.getByRole("img", { name: "Analytics icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const path = container.querySelector("path");
    expect(path).not.toBeNull();
    expect(path).toHaveAttribute("stroke", "currentColor");
  });

  it("Livestream uses currentColor for stroke and fill", () => {
    const { container } = render(<LivestreamIcon aria-label="Livestream icon" />);

    const svg = screen.getByRole("img", { name: "Livestream icon" });
    expect(svg.tagName.toLowerCase()).toBe("svg");

    const paths = container.querySelectorAll("circle");
    expect(paths).not.toBeNull();
    expect(paths[0]).toHaveAttribute("fill", "currentColor");
    expect(paths[1]).toHaveAttribute("fill", "currentColor");
    expect(paths[2]).toHaveAttribute("stroke", "currentColor");
  });
});
