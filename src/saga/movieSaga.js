import { takeLatest, takeEvery, fork, all, put, select, call } from "redux-saga/effects";
import {
  HIDE_DIALOG_LOADING_LIST_MOVIE,
  SHOW_DIALOG_LOADING_LIST_MOVIE,
  UPDATE_LIST_GENRES,
} from "../redux/constants/actionTypes";
import { getIsLoadingMovie } from "../redux/selector/movieSelector";

import { timeout } from "../utils/Utils";

import apiService from "../network/api/ApiService";
import { showDialogMessage } from "../redux/actions/dialogMessageAction";
import { AxiosError } from "axios";
import { LOAD_DATA_FIRST_LIST_MOVIE } from "./constants/actionTypesSaga";
import { actionUpdateListGenres } from "../redux/actions/movieAction";

function* loadDataFirst(action) {
  console.log("loadDataFirst Hello Sagas!", action);
  try {
    yield put({ type: SHOW_DIALOG_LOADING_LIST_MOVIE });
    yield timeout(2000);
    const dataApi = yield apiService.getListGenres();
    console.log("dataApi", dataApi);
    if (dataApi.status == 200 && dataApi.data.genres) {
      yield put(actionUpdateListGenres(dataApi.data.genres));
    } else {
      const messageDialog = dataApi.statusText ? dataApi.statusText : "Error no statusText";
      yield put(showDialogMessage(messageDialog));
    }
    const isLoadingMovie = yield select(getIsLoadingMovie);
    console.log("timeout 2000 Hello Sagas!", isLoadingMovie);
    yield put({ type: HIDE_DIALOG_LOADING_LIST_MOVIE });
  } catch (e) {
    console.log("loadDataFirst Sagas Error!", e);
    yield put({ type: HIDE_DIALOG_LOADING_LIST_MOVIE });
    if (e instanceof AxiosError) {
      const messageDialog = e.response.data.status_message;
      yield put(showDialogMessage(messageDialog));
    } else {
      const messageDialog = e.message;
      yield put(showDialogMessage(messageDialog));
    }
  }
}

function* watchloadDataFirst() {
  yield takeLatest(LOAD_DATA_FIRST_LIST_MOVIE, loadDataFirst);
}

function* loadDataFirst1(action) {
  console.log("loadDataFirst1 Hello Sagas!");
  action.navigate("/main");
}

function* watchloadDataFirst1() {
  yield takeLatest("FETCHED_DOG1", loadDataFirst1);
}

export function* runMovieSaga() {
  yield all([fork(watchloadDataFirst), fork(watchloadDataFirst1)]);
}
