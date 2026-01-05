import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb";

describe("<Breadcrumb />", () => {
  it("renders a nav with aria-label and data-slot", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList />
      </Breadcrumb>
    );

    const nav = screen.getByRole("navigation", { name: "Breadcrumb" });
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("data-slot", "breadcrumb");
  });

  it("renders list and items with correct data-slot attributes", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/a">A</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    expect(
      screen.getByText("A").closest("[data-slot='breadcrumb-link']")
    ).toBeTruthy();

    const list = document.querySelector("[data-slot='breadcrumb-list']");
    expect(list).toBeInTheDocument();

    const item = document.querySelector("[data-slot='breadcrumb-item']");
    expect(item).toBeInTheDocument();
  });

  it("marks the current page with aria-current=page", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    const page = screen.getByText("Current");
    expect(page).toHaveAttribute("aria-current", "page");
    expect(page).toHaveAttribute("data-slot", "breadcrumb-page");
  });

  it("renders a separator icon that is aria-hidden", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/a">A</BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbPage>B</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    const separator = document.querySelector(
      "[data-slot='breadcrumb-separator']"
    );
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute("aria-hidden", "true");
  });

  it("merges className on Breadcrumb wrapper", () => {
    render(
      <Breadcrumb className="custom-breadcrumb">
        <BreadcrumbList />
      </Breadcrumb>
    );

    const nav = screen.getByRole("navigation", { name: "Breadcrumb" });
    expect(nav).toHaveClass("custom-breadcrumb");
  });

  it("BreadcrumbLink supports asChild with Slot", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <button type="button">Go</button>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    // Slot should pass props/classes to the child element
    const btn = screen.getByRole("button", { name: "Go" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute("data-slot", "breadcrumb-link");
  });
});
