import { screen } from "@testing-library/react";
import App from "../App";
import { render } from "../setupTests";

test("test App with No Login with dark Mode", () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
