import { render, screen } from "@testing-library/react";
import AppBarComponent from "../../../component/AppBarComponent";

test("test renders AppBarComponent snapshot", () => {
  const { asFragment } = render(<AppBarComponent />);
  expect(asFragment()).toMatchSnapshot();
});

test("test renders AppBarComponent snapshot with open true", () => {
  const { asFragment } = render(<AppBarComponent open={true} />);
  expect(asFragment()).toMatchSnapshot();
});
