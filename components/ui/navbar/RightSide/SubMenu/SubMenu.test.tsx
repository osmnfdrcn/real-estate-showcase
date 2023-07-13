import React from "react";
import { render, screen } from "@testing-library/react";
import SubMenu from ".";
import userEvent from "@testing-library/user-event";

describe("SubMenu", () => {
  test("renders without errors", () => {
    render(<SubMenu />);
    const icons = screen.getByRole("button", { name: /icon/i });
    expect(icons).toBeInTheDocument();
  });

  test("mobile menu must be visible when mobile menu icon is clicked", async () => {
    const user = userEvent.setup();
    render(<SubMenu />);
    const mobileMenuIcon = screen.getByRole("button", { name: /menu-icon/i });
    await user.click(mobileMenuIcon);
    let menuItems = screen.getAllByRole("listitem");
    // hardcoded : ul in Menu component has 5 li elments
    expect(menuItems).toHaveLength(5);
  });
});
