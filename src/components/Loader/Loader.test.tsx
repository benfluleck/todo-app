import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader Component", () => {
  test("renders the Loader component without error", () => {
    render(<Loader />);
  });

  test("renders the loader with correct class", () => {
    render(<Loader />);
    expect(screen.getByTestId("loader")).toHaveClass("loader");
  });
});
