import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./";

describe("Menu", () => {
  test("renders without errors", () => {
    // variant value (row or col) does not effect container's content.
    render(<Menu variant={"row"} />);
    const menuItems = screen.getAllByRole("listitem");
    expect(menuItems).toHaveLength(5);
  });
});
