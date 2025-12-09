/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination, type PaginationProps } from "./pagination";

vi.mock("../select", () => {
  const Select = ({ children, ...props }: any) => (
    <div data-mock-select {...props}>
      {children}
    </div>
  );

  const SelectTrigger = (props: any) => (
    <button data-mock-select-trigger type="button" {...props} />
  );

  const SelectContent = (props: any) => (
    <div data-mock-select-content {...props} />
  );

  const SelectItem = ({ value, children, ...props }: any) => (
    <div data-mock-select-item data-value={value} {...props}>
      {children}
    </div>
  );

  const SelectValue = (props: any) => (
    <span data-mock-select-value {...props} />
  );

  return {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
  };
});

function renderPagination(overrides: Partial<PaginationProps> = {}) {
  const onPageChange = vi.fn();
  const onPageSizeChange = vi.fn();

  const props: PaginationProps = {
    page: 1,
    pageSize: 5,
    totalItems: 13,
    onPageChange,
    onPageSizeChange,
    ...overrides,
  };

  render(<Pagination {...props} />);
  return { onPageChange, onPageSizeChange };
}

describe("<Pagination />", () => {
  it("renders base layout with rows-per-page label and range text", () => {
    renderPagination();

    expect(
      screen.getByText("Rows per page:", { exact: false })
    ).toBeInTheDocument();

    // 13 items, page 1, pageSize 5 => 1 – 5 of 13
    expect(screen.getByText("1 – 5 of 13")).toBeInTheDocument();

    // Fallback: ensure the mocked select is present
    expect(document.querySelector("[data-mock-select]")).toBeInTheDocument();
  });

  it("displays 0 of 0 when there are no items", () => {
    renderPagination({ totalItems: 0 });

    expect(screen.getByText("0 of 0")).toBeInTheDocument();

    const prev = screen.getByLabelText("Previous page") as HTMLButtonElement;
    const next = screen.getByLabelText("Next page") as HTMLButtonElement;

    expect(prev).toBeDisabled();
    expect(next).toBeDisabled();
  });

  it("disables prev at the first page and enables next when more pages exist", () => {
    renderPagination({ page: 1, pageSize: 5, totalItems: 13 });

    const prev = screen.getByLabelText("Previous page") as HTMLButtonElement;
    const next = screen.getByLabelText("Next page") as HTMLButtonElement;

    expect(prev).toBeDisabled();
    expect(next).not.toBeDisabled();
  });

  it("enables prev and next on a middle page", () => {
    renderPagination({ page: 2, pageSize: 5, totalItems: 13 });

    const prev = screen.getByLabelText("Previous page") as HTMLButtonElement;
    const next = screen.getByLabelText("Next page") as HTMLButtonElement;

    expect(prev).not.toBeDisabled();
    expect(next).not.toBeDisabled();

    // Range: (2-1)*5+1 = 6, min(13, 2*5) = 10 => "6 – 10 of 13"
    expect(screen.getByText("6 – 10 of 13")).toBeInTheDocument();
  });

  it("clamps page when it exceeds total pages and disables next", () => {
    const { onPageChange } = renderPagination({
      page: 99,
      pageSize: 5,
      totalItems: 13,
    });

    const prev = screen.getByLabelText("Previous page") as HTMLButtonElement;
    const next = screen.getByLabelText("Next page") as HTMLButtonElement;

    expect(screen.getByText("11 – 13 of 13")).toBeInTheDocument();
    expect(prev).not.toBeDisabled();
    expect(next).toBeDisabled();

    fireEvent.click(prev);
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange with the previous and next page when buttons are enabled", () => {
    const { onPageChange } = renderPagination({
      page: 2,
      pageSize: 5,
      totalItems: 20,
    });

    const prev = screen.getByLabelText("Previous page") as HTMLButtonElement;
    const next = screen.getByLabelText("Next page") as HTMLButtonElement;

    fireEvent.click(prev);
    fireEvent.click(next);

    expect(onPageChange).toHaveBeenNthCalledWith(1, 1);
    expect(onPageChange).toHaveBeenNthCalledWith(2, 3);
  });

  it("does not call onPageChange when buttons are disabled", () => {
    const { onPageChange } = renderPagination({
      page: 1,
      pageSize: 5,
      totalItems: 3,
    });

    const prev = screen.getByLabelText("Previous page") as HTMLButtonElement;
    const next = screen.getByLabelText("Next page") as HTMLButtonElement;

    fireEvent.click(prev);
    fireEvent.click(next);

    expect(onPageChange).not.toHaveBeenCalled();
  });

  it("disables all controls when disabled is true", () => {
    renderPagination({
      page: 2,
      pageSize: 5,
      totalItems: 20,
      disabled: true,
    });

    const prev = screen.getByLabelText("Previous page") as HTMLButtonElement;
    const next = screen.getByLabelText("Next page") as HTMLButtonElement;

    expect(prev).toBeDisabled();
    expect(next).toBeDisabled();

    const mockedSelect = document.querySelector(
      "[data-mock-select-trigger]"
    ) as HTMLElement;
    expect(mockedSelect).toHaveProperty("disabled", true);
  });

  it("renders page size options inside the mocked select content", () => {
    renderPagination({
      pageSizeOptions: [5, 10, 25],
    });

    const items = document.querySelectorAll("[data-mock-select-item]");
    const values = Array.from(items).map((el) =>
      (el as HTMLElement).getAttribute("data-value")
    );

    expect(values).toEqual(["5", "10", "25"]);
  });
});
