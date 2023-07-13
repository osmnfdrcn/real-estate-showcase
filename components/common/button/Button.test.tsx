import { render, screen } from "@testing-library/react";
import Button from ".";
import userEvent from "@testing-library/user-event";

describe("RightSide", () => {
  test("renders without errors", () => {
    render(<Button onClick={() => {}} text="TEST" variant="primary" />);
    const btnEl = screen.getByRole("button", { name: "TEST" });
    expect(btnEl).toBeInTheDocument();
  });

  test("border color must change when hover", async () => {
    const user = userEvent.setup();
    render(<Button onClick={() => {}} text="TEST" variant="primary" />);
    const btnEl = screen.getByRole("button", { name: "TEST" });
    await user.hover(btnEl);
    expect(btnEl).toHaveStyle({
      borderColor: "border-yellow-400",
    });
  });
});
