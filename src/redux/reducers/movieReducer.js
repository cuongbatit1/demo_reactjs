import {
  UPDATE_LIST_MOVIE,
  SHOW_DIALOG_LOADING_LIST_MOVIE,
  HIDE_DIALOG_LOADING_LIST_MOVIE,
  UPDATE_LIST_GENRES,
} from "../constants/actionTypes";
import { uid } from "uid";
const initState = {
  listMovie: [],
  listGenres: [],
  isLoadingMovie: false,
};
function movieReducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_LIST_MOVIE:
      return {
        ...state,
        listMovie: action.listMovie,
      };
    case UPDATE_LIST_GENRES:
      return {
        ...state,
        listGenres: action.listGenres,
      };
    case SHOW_DIALOG_LOADING_LIST_MOVIE:
      return {
        ...state,
        isLoadingMovie: true,
      };
    case HIDE_DIALOG_LOADING_LIST_MOVIE:
      return {
        ...state,
        isLoadingMovie: false,
      };
    default:
      return state;
  }
}

export default movieReducer;
