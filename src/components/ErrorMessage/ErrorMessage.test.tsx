import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage Component", () => {
  test("renders the ErrorMessage component without error", () => {
    render(<ErrorMessage error="This is an error message" />);
  });

  test("renders the error message with the correct text", () => {
    render(<ErrorMessage error="An error occurred. Please try again later." />);
    expect(
      screen.getByText("An error occurred. Please try again later.")
    ).toBeInTheDocument();
  });

  test("renders the error message with the correct class", () => {
    render(<ErrorMessage error="An error occurred. Please try again later." />);
    expect(
      screen.getByText("An error occurred. Please try again later.")
    ).toHaveClass("py-1.5 px-4 text-red-600 text-sm");
  });
});
