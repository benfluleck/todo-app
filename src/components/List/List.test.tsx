import { render, screen } from "@testing-library/react";
import List, { ListProps } from "./List";

const mockProps: ListProps<Record<string, any>> = {
  todos: [
    { id: "1", value: "Item 1" },
    { id: "2", value: "Item 2" },
  ],
  getKey: (todo) => todo.id,
  getRow: (todo) => <li>{todo.value}</li>,
};

describe("List Component", () => {
  test("renders the List component without error", () => {
    render(<List {...mockProps} />);
  });

  test("renders the list with the correct number of items", () => {
    render(<List {...mockProps} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  test("renders the list with the correct items", () => {
    render(<List {...mockProps} />);
    expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("Item 1");
    expect(screen.getAllByRole("listitem")[1]).toHaveTextContent("Item 2");
  });
});
