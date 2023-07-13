import React from "react";
import { render, screen } from "@testing-library/react";
import LanguageSwitcher from ".";

describe("LanguagesSwitcher", () => {
  test("renders without errors", () => {
    render(<LanguageSwitcher />);
    const themeSwitcherIcon = screen.getByAltText("language switcher icon");
    expect(themeSwitcherIcon).toBeInTheDocument();
  });

  test("must display country flags when clicked ", () => {
    render(<LanguageSwitcher />);
  });
});
