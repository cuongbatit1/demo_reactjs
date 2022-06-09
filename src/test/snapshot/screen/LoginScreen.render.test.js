import { screen } from "@testing-library/react";
import LoginScreen from "../../../ScreenPage/LoginScreen/LoginScreen";
import { render } from "../../../setupTests";

test("test render LoginScreen snapshot", () => {
  const { asFragment } = render(<LoginScreen />);
  expect(asFragment()).toMatchSnapshot();
});
