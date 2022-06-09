// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "@testing-library/react";
import { Provider } from "react-redux";
import { render as rtlRender } from "@testing-library/react";
import { REDUX_TOOL_KIT } from "./constants/AppConstants";
import configureStore from "./redux/configureStore";
// import configureStoreToolkit from "./reduxtoolkit/configureStoreToolkit";
import { MaterialUIControllerProvider } from "./context/MaterialUIControllerProvider";
import i18n from "./i18n";
import { BrowserRouter } from "react-router-dom";

function render(
  ui,
  {
    preloadedState,
    store = configureStore(preloadedState),
    // store = REDUX_TOOL_KIT ? configureStoreToolkit() : configureStore(),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    i18n.changeLanguage("en");
    return (
      <Provider store={store}>
        <MaterialUIControllerProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </MaterialUIControllerProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
// override render method
export { render };
