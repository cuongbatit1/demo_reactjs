import { render, screen } from "@testing-library/react";
import PageNotFound from "../ScreenPage/PageNotFound";

test("test renders PageNotFound no text", () => {
  render(<PageNotFound />);
  const linkElement = screen.getByText(/Page not found/i);
  expect(linkElement).toBeInTheDocument();
});

test("test renders PageNotFound with text", () => {
  render(<PageNotFound text="sdsd" />);
  const linkElement = screen.getByText(/sdsd/i);
  expect(linkElement).toBeInTheDocument();
});
