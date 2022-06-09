import { render, screen } from "@testing-library/react";
import AuthWrapper1 from "../../../component/AuthWrapper1";

test("test renders AuthWrapper1 snapshot", () => {
  const { asFragment } = render(<AuthWrapper1 />);
  expect(asFragment()).toMatchSnapshot();
});
