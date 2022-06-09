import {
  SHOW_DIALOG_MESSAGE,
  HIDE_DIALOG_MESSAGE,
  UPDATE_MESSAGE_DIALOG,
} from "../constants/actionTypes";
//use in LoginScreen.js and MainScreenOutlet.js
const initState = {
  isShowDialogMessage: false,
  messageDialog: "",
};
function dialogMessageReducer(state = initState, action) {
  switch (action.type) {
    case SHOW_DIALOG_MESSAGE:
      return {
        ...state,
        isShowDialogMessage: true,
      };
    case HIDE_DIALOG_MESSAGE:
      return {
        ...state,
        isShowDialogMessage: false,
      };
    case UPDATE_MESSAGE_DIALOG:
      return {
        ...state,
        messageDialog: action.messageDialog,
      };
    default:
      return state;
  }
}

export default dialogMessageReducer;
