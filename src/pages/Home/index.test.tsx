import { render, screen } from "@testing-library/react";
import HomePage from "./index";
import { Status } from "../../entities/status";

jest.mock("../../lib/hooks/useTodoQuery", () => {
  return {
    __esModule: true,
    default: () => ({
      todos: [],
      currentStatus: "LOADING" as Status.IDLE,
    }),
  };
});

describe("HomePage", () => {
  it("should render 0 Done and 0 Undone when there are no todos returned", () => {
    render(<HomePage />);

    expect(screen.getByText(/Done 0 | Undone: 0/)).toBeInTheDocument();
  });
});
