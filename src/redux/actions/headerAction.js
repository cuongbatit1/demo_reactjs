import {
  ANCHOREL_CLOSE,
  ANCHOREL_MENU,
  ANCHOREL_CLOSE_LANG,
  ANCHOREL_MENU_LANG,
  LANG_EN,
  LANG_VI,
  DRAWER_CLOSE,
  DRAWER_OPEN,
  HIDE_DIALOG_CONFIRM_HEADER,
  SHOW_DIALOG_CONFIRM_HEADER,
} from "../../redux/constants/actionTypes";
import i18n from "../../i18n";
import { USER_AUTH } from "../../constants/KeyLocalStorage";
import { actionUpdateUserList } from "./userListAction";
import { actionUpdateUserTrash } from "./userTrashAction";

export function actionOpenMenu(currentTarget) {
  return { type: ANCHOREL_MENU, isAnchorEl: currentTarget };
}

export function actionCloseMenu() {
  return { type: ANCHOREL_CLOSE };
}

export function actionOpenMenuLang(currentTarget) {
  return { type: ANCHOREL_MENU_LANG, isAnchorElLang: currentTarget };
}

export function actionCloseMenuLang() {
  return { type: ANCHOREL_CLOSE_LANG };
}

export function actionLangEN() {
  return { type: LANG_EN };
}

export function actionLangVI() {
  return { type: LANG_VI };
}

export function clearAllDataRedux() {
  return async function (dispatch, getState) {
    dispatch(actionUpdateUserList([]));
    dispatch(actionUpdateUserTrash([]));
  };
}

export function handleLogout(navigate) {
  return async function (dispatch, getState) {
    dispatch(actionCloseMenu());
    dispatch(clearAllDataRedux());
    localStorage.removeItem(USER_AUTH);
    navigate("/", { replace: true });
  };
}

export function handleProfile(navigate) {
  return async function (dispatch, getState) {
    const userAuth = getState().userAuthReducer.userAuth;
    dispatch(actionCloseMenu());
    navigate("/main/user/" + userAuth.id, { state: userAuth });
  };
}

export function handleChangeLangEN() {
  return async function (dispatch, getState) {
    i18n.changeLanguage("en");
    dispatch(actionLangEN());
    dispatch(actionCloseMenuLang());
  };
}
export function handleChangeLangVI() {
  return async function (dispatch, getState) {
    i18n.changeLanguage("vi");
    dispatch(actionLangVI());
    dispatch(actionCloseMenuLang());
  };
}

export function handleChangeDrawer() {
  return async function (dispatch, getState) {
    const isOpenDrawer = getState().headerMainReducer.isOpenDrawer;
    console.log("handleChangeDrawer isOpenDrawer : ", isOpenDrawer);
    if (isOpenDrawer) {
      dispatch({ type: DRAWER_CLOSE });
    } else {
      dispatch({ type: DRAWER_OPEN });
    }
  };
}

function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

export function loadDataStateHeader(event) {
  //eslint-disable-next-line no-unused-vars
  return async function (dispatch, getState) {
    const stateBefore = getState();
    console.log("loadDataStateHeader event", event.currentTarget);
    const currentTarget = event.currentTarget;
    await timeout(5000);
    console.log("loadDataStateHeader event new AAAA", currentTarget);
    console.log("loadDataStateHeader before", stateBefore);
    dispatch(actionOpenMenu(currentTarget));
  };
}

export function openDialogConfirmHeader() {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch({ type: SHOW_DIALOG_CONFIRM_HEADER });
  };
}

export function closeDialogConfirmHeader() {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch({ type: HIDE_DIALOG_CONFIRM_HEADER });
  };
}

export function clearAllLocalStorage(navigate) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch({ type: HIDE_DIALOG_CONFIRM_HEADER });
    dispatch(clearAllDataRedux());
    localStorage.clear();
    navigate("/", { replace: true });
  };
}
