import { render, screen } from "@testing-library/react";
import DrawerHeaderComponent from "../../../component/DrawerHeaderComponent";

test("test renders DrawerHeaderComponent snapshot", () => {
  const { asFragment } = render(<DrawerHeaderComponent />);
  expect(asFragment()).toMatchSnapshot();
});
