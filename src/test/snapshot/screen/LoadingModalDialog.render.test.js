import { screen } from "@testing-library/react";
import LoadingModalDialog from "../../../ScreenPage/Dialog/LoadingModal";
import { render } from "../../../setupTests";

test("test render LoadingModalDialog snapshot", () => {
  const state = {
    loadingReducer: {
      isLoading: true,
    },
  };
  const { asFragment } = render(<LoadingModalDialog />, { preloadedState: state });
  expect(asFragment()).toMatchSnapshot();
});
