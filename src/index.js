import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import configureStoreToolkit from "./reduxtoolkit/configureStoreToolkit";
import i18n from "./i18n.js";
import { MaterialUIControllerProvider } from "./context/MaterialUIControllerProvider";
import { REDUX_TOOL_KIT } from "./constants/AppConstants";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
i18n.changeLanguage("en");
const root = ReactDOM.createRoot(document.getElementById("root"));

let store;
if (REDUX_TOOL_KIT) {
  store = configureStoreToolkit();
} else {
  store = configureStore();
}

root.render(
  <ReduxProvider store={store}>
    <MaterialUIControllerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MaterialUIControllerProvider>
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
