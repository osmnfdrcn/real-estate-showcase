import { render, screen } from "@testing-library/react";
import Logo from "../Logo";

describe("Logo", () => {
  test("renders without errors", () => {
    render(<Logo />);
    expect(screen.getByAltText(/realtor-logo/i)).toBeInTheDocument();
  });
});
