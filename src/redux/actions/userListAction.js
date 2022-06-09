import {
  UPDATE_USER_LIST,
  UPDATE_USER_TRASH,
  DELETE_USER_LIST,
  SELECT_USER_LIST_DELETE,
  SHOW_LOADING_USER_LIST,
  CLOSE_LOADING_USER_LIST,
  SHOW_DIALOG_CONFIRM_DELETE_USER_LIST,
  HIDE_DIALOG_CONFIRM_DELETE_USER_LIST,
} from "../constants/actionTypes";

import {
  deleteUserDetail,
  createUserDetail,
} from "../../reduxtoolkit/reducers/userDetailReducerSlice";

import { REDUX_TOOL_KIT, userAdmin, userAdminInit } from "../../constants/AppConstants";
import { USER_LIST, USER_TRASH_LIST } from "../../constants/KeyLocalStorage";
import { timeout } from "../../utils/Utils";
import { actionUpdateUserTrash } from "./userTrashAction";

export function actionSelectUserList(listArray) {
  return { type: SELECT_USER_LIST_DELETE, selectDelete: listArray };
}

export function actionDeleteUserList(listArray) {
  return { type: DELETE_USER_LIST, listUser: listArray };
}

export function actionUpdateUserList(listArray) {
  return { type: UPDATE_USER_LIST, listUser: listArray };
}

export function addUser(item) {
  return async function (dispatch, getState) {
    console.log("addUser", item);
    const list = getState().userReducer.listUser;
    console.log("list", list);
    localStorage.setItem("listUser", JSON.stringify(list));
    // if (REDUX_TOOL_KIT) {
    //   dispatch(createUserDetail(item));
    // } else {
    //   dispatch({ type: CREATE_USER_DETAIL, userDetail: item });
    // }
  };
}

export function deleteUser() {
  return async function (dispatch, getState) {
    dispatch({ type: SHOW_LOADING_USER_LIST });

    const listUser = JSON.parse(localStorage.getItem(USER_LIST));
    const arraySelect = getState().userReducer.selectDelete;
    let listUserTrash = JSON.parse(localStorage.getItem(USER_TRASH_LIST));
    await timeout(2000);
    if (!listUserTrash) {
      listUserTrash = [];
    }
    const arrayTrashChange = listUser.filter((item) => arraySelect.indexOf(item.id) !== -1);

    console.log("arrayNew", arrayTrashChange);
    if (arrayTrashChange.length > 0) {
      arrayTrashChange.forEach((item) => (item.is_deleted = true));
      const listUserTrashNew = listUserTrash.concat(arrayTrashChange);
      console.log("arrayNew2222", listUserTrashNew);
      const listUserNew = listUser.filter((item) => arraySelect.indexOf(item.id) === -1);
      dispatch(actionUpdateUserTrash(listUserTrashNew));
      dispatch(actionUpdateUserList(listUserNew));
      localStorage.setItem(USER_LIST, JSON.stringify(listUserNew));
      localStorage.setItem(USER_TRASH_LIST, JSON.stringify(listUserTrashNew));
    }
    dispatch({ type: CLOSE_LOADING_USER_LIST });
  };
}

export function loadDataFirstUserList() {
  return async function (dispatch, getState) {
    console.log("loadDataFirstUserList");
    const list = getState().userReducer.listUser;
    if (!list || list.length <= 0) {
      dispatch({ type: SHOW_LOADING_USER_LIST });
      console.log("11111111");
      // await timeout(3000);
      console.log("2222222");
      let listUser = JSON.parse(localStorage.getItem(USER_LIST));
      console.log("222222233333");
      if (!listUser) {
        console.log("222222233333444444 nulll");
        listUser = userAdminInit;
      }
      console.log("222222233333444444");
      dispatch(actionUpdateUserList(listUser));
      dispatch({ type: CLOSE_LOADING_USER_LIST });
      console.log("33333333");
    }
    console.log("44444");
  };
}

export function openDialogConfirmDelete() {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch({ type: SHOW_DIALOG_CONFIRM_DELETE_USER_LIST });
  };
}
export function closeDialogConfirmDelete() {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch({ type: HIDE_DIALOG_CONFIRM_DELETE_USER_LIST });
  };
}
