import { render, screen } from "@testing-library/react";
import AuthCardWrapper from "../../../component/AuthCardWrapper";

test("test renders AuthCardWrapper snapshot", () => {
  const { asFragment } = render(<AuthCardWrapper />);
  expect(asFragment()).toMatchSnapshot();
});
