import { render, screen } from "@testing-library/react";
import Status from "./Status";


const mockProps = {
  todos: [
    { id: "1", value: "Item 1" , done: false},
    { id: "2", value: "Item 2" , done: true},
  ],
};

describe("Status Component", () => {
  test("renders the Status component without error", () => {
    render(<Status {...mockProps} />);
  });

  test("renders 1 done TODO and 1 UNDONE TODO", () => {
    render(<Status {...mockProps} />);

    expect(screen.getByText(/Done 1 | Undone: 1/)).toBeInTheDocument();
  });



});
