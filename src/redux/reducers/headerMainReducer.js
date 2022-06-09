import {
  ANCHOREL_CLOSE,
  ANCHOREL_MENU,
  ANCHOREL_CLOSE_LANG,
  ANCHOREL_MENU_LANG,
  LANG_EN,
  LANG_VI,
  DRAWER_CLOSE,
  DRAWER_OPEN,
  SHOW_DIALOG_CONFIRM_HEADER,
  HIDE_DIALOG_CONFIRM_HEADER,
} from "../constants/actionTypes";
const initState = {
  isAnchorEl: null,
  isAnchorElLang: null,
  lang: "en",
  isOpenDrawer: true,
  isShowDialogConfirm: false,
};
function headerMainReducer(state = initState, action) {
  switch (action.type) {
    case ANCHOREL_CLOSE:
      return {
        ...state,
        isAnchorEl: null,
      };
    case ANCHOREL_MENU:
      return {
        ...state,
        isAnchorEl: action.isAnchorEl,
      };
    case ANCHOREL_CLOSE_LANG:
      return {
        ...state,
        isAnchorElLang: null,
      };
    case ANCHOREL_MENU_LANG:
      return {
        ...state,
        isAnchorElLang: action.isAnchorElLang,
      };
    case LANG_EN:
      return {
        ...state,
        lang: "en",
      };
    case LANG_VI:
      return {
        ...state,
        lang: "vi",
      };
    case DRAWER_CLOSE:
      return {
        ...state,
        isOpenDrawer: false,
      };
    case DRAWER_OPEN:
      return {
        ...state,
        isOpenDrawer: true,
      };
    case SHOW_DIALOG_CONFIRM_HEADER:
      return {
        ...state,
        isShowDialogConfirm: true,
      };
    case HIDE_DIALOG_CONFIRM_HEADER:
      return {
        ...state,
        isShowDialogConfirm: false,
      };
    default:
      return state;
  }
}

export default headerMainReducer;
