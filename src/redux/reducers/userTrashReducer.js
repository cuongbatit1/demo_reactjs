import {
  UPDATE_USER_TRASH,
  SHOW_LOADING_USER_TRASH_LIST,
  CLOSE_LOADING_USER_TRASH_LIST,
  SELECT_USER_LIST_RESTORE,
  SHOW_DIALOG_DELETE_TRASH,
  HIDE_DIALOG_DELETE_TRASH,
} from "../constants/actionTypes";
import { uid } from "uid";
const initState = {
  listUserTrash: [],
  selectRestore: [],
  isLoadingTrash: false,
  isShowDialogDeleteTrash: false,
};
function userTrashReducer(state = initState, action) {
  switch (action.type) {
    case SELECT_USER_LIST_RESTORE:
      return {
        ...state,
        selectRestore: action.selectRestore,
      };
    case UPDATE_USER_TRASH:
      return {
        ...state,
        listUserTrash: action.listUserTrash,
      };
    case SHOW_LOADING_USER_TRASH_LIST:
      return {
        ...state,
        isLoadingTrash: true,
      };
    case CLOSE_LOADING_USER_TRASH_LIST:
      return {
        ...state,
        isLoadingTrash: false,
      };
    case SHOW_DIALOG_DELETE_TRASH:
      return {
        ...state,
        isShowDialogDeleteTrash: true,
      };
    case HIDE_DIALOG_DELETE_TRASH:
      return {
        ...state,
        isShowDialogDeleteTrash: false,
      };
    default:
      return state;
  }
}

export default userTrashReducer;
