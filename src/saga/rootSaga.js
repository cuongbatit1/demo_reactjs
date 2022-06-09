import { runMovieSaga } from "./movieSaga";
import { takeEvery, fork, all } from "redux-saga/effects";

export default function* rootSaga() {
  //   yield all([fork(runMovieSaga)]);
  yield all([runMovieSaga()]);
}
