import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";

let sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
