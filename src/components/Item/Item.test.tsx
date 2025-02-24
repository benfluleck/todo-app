import { render, screen } from "@testing-library/react";
import Item, { ItemProps } from "./Item";

const mockProps: ItemProps = {
  id: "1",
  title: "Item",
  done: false,
};

describe("Item Component", () => {
  test("renders the Item component without error", () => {
    render(<Item {...mockProps} />);
  });

  test("renders the item with the correct text", () => {
    render(<Item {...mockProps} />);
    expect(screen.getByRole("listitem")).toHaveTextContent("Item");
  });

  test("renders the item with the correct class", () => {
    render(<Item {...mockProps} />);
    expect(screen.getByRole("listitem")).toHaveClass(
      "flex gap-4 border-b py-1.5 border-slate-100 dark:border-slate-900 hover:bg-stone-50 dark:hover:bg-gray-800 px-4 cursor-pointer"
    );
  });

  test("renders item with the checkbox with checked attribute if done is set to true and line-through class", () => {
    render(<Item {...mockProps} done />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toHaveAttribute("checked");
    expect(screen.getByRole("listitem")).toHaveClass("line-through");
  });

  test("renders item with the checkbox without checked attribute if done is set to false without line through class", () => {
    render(<Item {...mockProps} done={false} />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toHaveAttribute("checked");
    expect(screen.getByRole("listitem")).not.toHaveClass("line-through");
  });
});
