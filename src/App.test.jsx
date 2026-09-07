import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders name, job title, and blog link", () => {
  render(<App />);
  expect(screen.getByText("Chetan Raj")).toBeInTheDocument();
  expect(screen.getByText("DESIGNER & DEVELOPER")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /blog/i })).toHaveAttribute(
    "href",
    "https://chetanraj.in/blog"
  );
  expect(screen.getByRole("link", { name: /active\.ai/i })).toHaveAttribute(
    "href",
    "https://active.ai/"
  );
});
