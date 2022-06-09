import { render, screen } from "@testing-library/react";
import GenreItem from "../../../component/GenreItem";
// random in component then hard testing snapshot
test("test renders GenreItem snapshot with index 0", () => {
  const { asFragment } = render(<GenreItem text="A" index={0} />);
  expect(asFragment()).toMatchSnapshot();
});

test("test renders GenreItem snapshot with index 1", () => {
  const { asFragment } = render(<GenreItem text="AA" index={1} />);
  expect(asFragment()).toMatchSnapshot();
});

test("test renders GenreItem snapshot with index 2", () => {
  const { asFragment } = render(<GenreItem text="AAA" index={2} />);
  expect(asFragment()).toMatchSnapshot();
});
