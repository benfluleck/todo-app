import { render, screen } from "@testing-library/react";
import Input from "./Input";

const mockProps = {
  name: "todo",
};

describe("Input Component", () => {
  test("renders the input component without error", () => {
    render(<Input {...mockProps} />);
  });


  test("should have a required attribute", () => {
    render(<Input {...mockProps} />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveAttribute("required");
  });

  test("should have a minLength attribute equal to 3", () => {
    render(<Input {...mockProps} />);
    const input = screen.getByRole("textbox");

    expect(input.getAttribute("minLength")).toEqual("3");
  });
});
