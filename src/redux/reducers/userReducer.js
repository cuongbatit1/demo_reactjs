import {
  UPDATE_USER_LIST,
  DELETE_USER_LIST,
  SELECT_USER_LIST_DELETE,
  ADD_A_NEW_USER_LIST,
  SHOW_LOADING_USER_LIST,
  CLOSE_LOADING_USER_LIST,
  SHOW_DIALOG_CONFIRM_DELETE_USER_LIST,
  HIDE_DIALOG_CONFIRM_DELETE_USER_LIST,
} from "../constants/actionTypes";
import { uid } from "uid";
const initState = {
  listUser: [],
  selectDelete: [],
  isLoading: false,
  isShowDialogConfirmDelete: false,
};
function userReducer(state = initState, action) {
  switch (action.type) {
    case ADD_A_NEW_USER_LIST:
      return {
        ...state,
        listUser: state.listUser.concat(action.user),
      };
    case DELETE_USER_LIST:
      return {
        ...state,
        listUser: action.listUser.filter(
          (item, index) => action.selectDelete.indexOf(item.id) === -1
        ),
      };
    case UPDATE_USER_LIST:
      return {
        ...state,
        listUser: action.listUser,
      };
    case SELECT_USER_LIST_DELETE:
      return {
        ...state,
        selectDelete: action.selectDelete,
      };
    case SHOW_LOADING_USER_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case CLOSE_LOADING_USER_LIST:
      return {
        ...state,
        isLoading: false,
      };
    case SHOW_DIALOG_CONFIRM_DELETE_USER_LIST:
      return {
        ...state,
        isShowDialogConfirmDelete: true,
      };
    case HIDE_DIALOG_CONFIRM_DELETE_USER_LIST:
      return {
        ...state,
        isShowDialogConfirmDelete: false,
      };
    default:
      return state;
  }
}

export default userReducer;
