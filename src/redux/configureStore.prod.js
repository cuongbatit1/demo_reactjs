import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
