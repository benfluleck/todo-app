import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("renders the button component without error", () => {
    render(<Button>Test</Button>);
  });

  test("renders the button with the correct text", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("renders the button with the correct class", () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole("button")).toHaveClass(
      "bg-slate-100 dark:bg-slate-900 hover:bg-stone-100 dark:hover:bg-stone-900 cursor-pointer text-black px-2 py-2 rounded-md"
    );
  });

  test("renders the button with the correct type", () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});
