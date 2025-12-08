import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./table";

describe("<Table />", () => {
  it("renders a table inside a scroll container with data-slot attributes", () => {
    render(
      <Table data-testid="table-container">
        <TableHeader>
          <TableRow>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 2</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Row 1 - Col 1</TableCell>
            <TableCell>Row 1 - Col 2</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer 1</TableCell>
            <TableCell>Footer 2</TableCell>
          </TableRow>
        </TableFooter>
        <TableCaption>Example caption</TableCaption>
      </Table>
    );

    // container div
    const container =
      screen.getByTestId("table-container") ??
      document.querySelector("[data-slot='table-container']");
    expect(container).not.toBeNull();

    // table element
    const table = screen.getByRole("table");
    expect(table).toHaveAttribute("data-slot", "table");

    // header / body / footer / caption
    // const thead = within(table).getByRole("rowgroup", { name: "" }); // or querySelector
    expect(table.querySelector("thead")).toHaveAttribute(
      "data-slot",
      "table-header"
    );
    expect(table.querySelector("tbody")).toHaveAttribute(
      "data-slot",
      "table-body"
    );
    expect(table.querySelector("tfoot")).toHaveAttribute(
      "data-slot",
      "table-footer"
    );
    expect(table.querySelector("caption")).toHaveAttribute(
      "data-slot",
      "table-caption"
    );

    // header cells
    expect(screen.getByText("Header 1").closest("th")).toHaveAttribute(
      "data-slot",
      "table-head"
    );
    expect(screen.getByText("Row 1 - Col 1").closest("td")).toHaveAttribute(
      "data-slot",
      "table-cell"
    );
    expect(screen.getByText("Example caption")).toBeInTheDocument();
  });

  it("merges custom className on the root <table>", () => {
    render(
      <Table className="custom-table-class">
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const table = screen.getByRole("table");
    expect(table).toHaveClass("custom-table-class");
  });

  it("applies custom className to head / row / cell / caption", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow className="custom-row">
            <TableHead className="custom-head">Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="custom-cell">Wallace</TableCell>
          </TableRow>
        </TableBody>
        <TableCaption className="custom-caption">Custom caption</TableCaption>
      </Table>
    );

    expect(screen.getByText("Name").closest("tr")).toHaveClass("custom-row");
    expect(screen.getByText("Name").closest("th")).toHaveClass("custom-head");
    expect(screen.getByText("Wallace").closest("td")).toHaveClass(
      "custom-cell"
    );
    expect(screen.getByText("Custom caption").closest("caption")).toHaveClass(
      "custom-caption"
    );
  });

  it("marks rows as selected via data-state attribute", () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-state="selected">
            <TableCell>Selected row</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const row = screen.getByText("Selected row").closest("tr");
    expect(row).toHaveAttribute("data-state", "selected");
  });
});
