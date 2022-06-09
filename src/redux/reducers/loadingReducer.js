import { SHOW_DIALOG_LOADING, HIDE_DIALOG_LOADING } from "../constants/actionTypes";
import { uid } from "uid";
const initState = {
  isLoading: false,
};
function loadingReducer(state = initState, action) {
  switch (action.type) {
    case SHOW_DIALOG_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case HIDE_DIALOG_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default loadingReducer;
