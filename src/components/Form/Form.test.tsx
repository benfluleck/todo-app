import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

const handleSubmit = jest.fn();

describe("Form Component", () => {
  test("renders the Form component without error when correct props are passed", () => {
    render(<Form handleFormSubmit={handleSubmit} />);
  });

  test("renders the form with the correct button", () => {
    render(<Form handleFormSubmit={handleSubmit} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders the form with the correct input", () => {
    render(<Form handleFormSubmit={handleSubmit} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("renders the form with the correct class", () => {
    render(<Form handleFormSubmit={handleSubmit} />);
    expect(screen.getByRole("form")).toHaveClass("p-4 flex flex-col gap-3");
  });

  test("should call handleFormSubmit on submission with value from input", async () => {

    const mockSubmit = jest.fn()

    render(<Form handleFormSubmit={mockSubmit} />);
    const submitButton = screen.getByRole("button");

    const input = screen.getByRole("textbox");

    await userEvent.type(input, "Test Todo");


    expect(input.getAttribute('value')).toEqual('Test Todo')
    await userEvent.click(submitButton);

    expect(mockSubmit).toBeCalledTimes(1)
    expect(mockSubmit).toHaveBeenCalledWith("Test Todo");

   
    expect(input.getAttribute('value')).toEqual('')

  });
});
