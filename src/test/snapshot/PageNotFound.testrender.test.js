import { render, screen } from "@testing-library/react";
import PageNotFound from "../../ScreenPage/PageNotFound";

test("test renders PageNotFound snapshot", () => {
  const { asFragment } = render(<PageNotFound />);
  expect(asFragment()).toMatchSnapshot();
});
