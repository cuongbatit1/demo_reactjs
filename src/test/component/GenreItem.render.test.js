import { render, screen } from "@testing-library/react";
import GenreItem from "../../component/GenreItem";

test("test renders GenreItem with index 0", () => {
  const { asFragment } = render(<GenreItem text="AB" index={0} />);
  expect(screen.getByText("AB")).toBeInTheDocument();
});

test("test renders GenreItem with text ABC index 1", () => {
  const { asFragment } = render(<GenreItem text="ABC" index={1} />);
  expect(screen.getByText("ABC")).toBeInTheDocument();
});

test("test renders GenreItem with text ABCD index 2", () => {
  const { asFragment } = render(<GenreItem text="ABCD" index={2} />);
  expect(screen.getByText("ABCD")).toBeInTheDocument();
});
