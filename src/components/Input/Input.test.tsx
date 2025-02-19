import { render, screen } from "@testing-library/react";
import Input from "./Input";
import userEvent from "@testing-library/user-event";

const mockProps = {
  handleChange: jest.fn(),
  value: "",
};

describe("Input Component", () => {
  test("renders the input component without error", () => {
    render(<Input {...mockProps} />);
  });

  test("calls handleChange event twice after 2 characters", async () => {
    const handleChange = jest.fn();
    render(<Input {...mockProps} handleChange={handleChange} />);
    const input = screen.getByRole("textbox");

    await userEvent.type(input, "T3");

    expect(handleChange).toBeCalledTimes(2);
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
