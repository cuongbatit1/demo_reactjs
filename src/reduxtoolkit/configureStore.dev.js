import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducerToolkit from "./reducers/rootReducerToolkit";
import thunk from "redux-thunk";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducerToolkit,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: [thunk, sagaMiddleware],
    devTools: true,
  });
  sagaMiddleware.run(rootSaga);
  return store;
}
