import { render, screen } from "@testing-library/react";
import DrawerComponent from "../../../component/DrawerComponent";

test("test renders DrawerComponent snapshot", () => {
  const { asFragment } = render(<DrawerComponent />);
  expect(asFragment()).toMatchSnapshot();
});

test("test renders DrawerComponent snapshot with open true", () => {
  const { asFragment } = render(<DrawerComponent open={true} />);
  expect(asFragment()).toMatchSnapshot();
});
