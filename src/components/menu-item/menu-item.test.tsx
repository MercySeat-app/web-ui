import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MenuItem } from "./menu-item";

describe("<MenuItem />", () => {
  it("renders and applies base classes to the slotted child", () => {
    render(
      <MenuItem active={false}>
        <button type="button">Dashboard</button>
      </MenuItem>
    );

    const el = screen.getByRole("button", { name: "Dashboard" });

    expect(el).toHaveClass("flex");
    expect(el).toHaveClass("h-10");
    expect(el).toHaveClass("text-white");
    expect(el).toHaveClass("rounded-lg");

    expect(el).not.toHaveClass("bg-blue-hepatica-800");
  });

  it("applies active styles when active=true", () => {
    render(
      <MenuItem active>
        <button type="button">Dashboard</button>
      </MenuItem>
    );

    const el = screen.getByRole("button", { name: "Dashboard" });
    expect(el).toHaveClass("bg-blue-hepatica-800");
  });

  it("applies collapsed styles when collapsed=true", () => {
    render(
      <MenuItem active={false} collapsed>
        <button type="button">
          <span>Dashboard</span>
        </button>
      </MenuItem>
    );

    const el = screen.getByRole("button", { name: "Dashboard" });

    expect(el).toHaveClass("w-10");
    expect(el).toHaveClass("[&>span]:hidden");
  });

  it("passes disabled prop through to the slotted child element", () => {
    render(
      <MenuItem active={false} disabled>
        <button type="button" disabled>
          Dashboard
        </button>
      </MenuItem>
    );

    const el = screen.getByRole("button", { name: "Dashboard" });
    expect(el).toBeDisabled();

    expect(el).toHaveClass("disabled:pointer-events-none");
    expect(el).toHaveClass("disabled:text-gray-600");
  });

  it("works with non-button elements as the slotted child", () => {
    render(
      <MenuItem active={false}>
        <a href="/dashboard">Dashboard</a>
      </MenuItem>
    );

    const link = screen.getByRole("link", { name: "Dashboard" });
    expect(link).toHaveAttribute("href", "/dashboard");
    expect(link).toHaveClass("flex");
    expect(link).toHaveClass("h-10");
  });

  it("supports icon + label layout", () => {
    render(
      <MenuItem active={false}>
        <button type="button">
          <svg aria-hidden="true" />
          <span>Dashboard</span>
        </button>
      </MenuItem>
    );

    expect(
      screen.getByRole("button", { name: "Dashboard" })
    ).toBeInTheDocument();
  });
});
