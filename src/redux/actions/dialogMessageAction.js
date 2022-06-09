import {
  HIDE_DIALOG_MESSAGE,
  UPDATE_MESSAGE_DIALOG,
  SHOW_DIALOG_MESSAGE,
} from "../constants/actionTypes";

export function closeDialogMessage() {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch({
      type: UPDATE_MESSAGE_DIALOG,
      messageDialog: "",
    });
    dispatch({ type: HIDE_DIALOG_MESSAGE });
  };
}

export function showDialogMessage(message) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch({
      type: UPDATE_MESSAGE_DIALOG,
      messageDialog: message,
    });
    dispatch({ type: SHOW_DIALOG_MESSAGE });
  };
}
