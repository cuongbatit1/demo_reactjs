import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducerToolkit from "./reducers/rootReducerToolkit";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducerToolkit,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: [thunk, sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);
  return store;
}

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);
