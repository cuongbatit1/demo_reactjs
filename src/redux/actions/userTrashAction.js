import { USER_LIST, USER_TRASH_LIST } from "../../constants/KeyLocalStorage";
import { timeout } from "../../utils/Utils";
import {
  CLOSE_LOADING_USER_TRASH_LIST,
  HIDE_DIALOG_DELETE_TRASH,
  SELECT_USER_LIST_RESTORE,
  SHOW_DIALOG_DELETE_TRASH,
  SHOW_LOADING_USER_TRASH_LIST,
  UPDATE_USER_TRASH,
} from "../constants/actionTypes";
import {
  getListUserTrash,
  getSelectRestore,
} from "../selector/userTrashSelector";
import { actionUpdateUserList } from "./userListAction";

export function actionUpdateUserTrash(listArray) {
  return { type: UPDATE_USER_TRASH, listUserTrash: listArray };
}

export function actionSelectUserListRestore(listArray) {
  return { type: SELECT_USER_LIST_RESTORE, selectRestore: listArray };
}

export function loadDataStateUserTrash() {
  return async function (dispatch, getState) {
    console.log("loadDataStateUserTrash");
    const list = getListUserTrash(getState());
    if (!list || list.length <= 0) {
      dispatch({ type: SHOW_LOADING_USER_TRASH_LIST });
      await timeout(2000);
      let listUserTrash = JSON.parse(localStorage.getItem(USER_TRASH_LIST));
      if (!listUserTrash) {
        listUserTrash = [];
      }
      dispatch({ type: UPDATE_USER_TRASH, listUserTrash: listUserTrash });
      dispatch({ type: CLOSE_LOADING_USER_TRASH_LIST });
    }
  };
}

export function restoreUserTrash() {
  return async function (dispatch, getState) {
    console.log("restoreUserTrash");
    dispatch({ type: SHOW_LOADING_USER_TRASH_LIST });
    const listUser = JSON.parse(localStorage.getItem(USER_LIST));
    const selectRestore = getSelectRestore(getState());
    const listUserTrash = JSON.parse(localStorage.getItem(USER_TRASH_LIST));

    await timeout(1000);
    let arrayUserRestore = listUserTrash.filter(
      (item) => selectRestore.indexOf(item.id) !== -1
    );
    console.log("arrayUserRestore", arrayUserRestore);
    if (arrayUserRestore.length > 0) {
      arrayUserRestore.forEach((item) => (item.is_deleted = false));
      const listUserNew = listUser.concat(arrayUserRestore);
      console.log("listUserNew", listUserNew);
      const listUserTrashNew = listUserTrash.filter(
        (item) => selectRestore.indexOf(item.id) === -1
      );
      dispatch(actionUpdateUserTrash(listUserTrashNew));
      dispatch(actionUpdateUserList(listUserNew));
      localStorage.setItem(USER_LIST, JSON.stringify(listUserNew));
      localStorage.setItem(USER_TRASH_LIST, JSON.stringify(listUserTrashNew));
    }
    dispatch({ type: CLOSE_LOADING_USER_TRASH_LIST });
  };
}

export function deleteUserTrash() {
  return async function (dispatch, getState) {
    console.log("deleteUserTrash");
    dispatch({ type: SHOW_LOADING_USER_TRASH_LIST });
    const selectRestore = getSelectRestore(getState());
    const listUserTrash = JSON.parse(localStorage.getItem(USER_TRASH_LIST));

    await timeout(1000);
    const listUserTrashNew = listUserTrash.filter(
      (item) => selectRestore.indexOf(item.id) === -1
    );
    dispatch(actionUpdateUserTrash(listUserTrashNew));
    localStorage.setItem(USER_TRASH_LIST, JSON.stringify(listUserTrashNew));
    dispatch({ type: CLOSE_LOADING_USER_TRASH_LIST });
  };
}

export function openDialogDeleteTrash() {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch({ type: SHOW_DIALOG_DELETE_TRASH });
  };
}
export function closeDialogDeleteTrash() {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch({ type: HIDE_DIALOG_DELETE_TRASH });
  };
}
