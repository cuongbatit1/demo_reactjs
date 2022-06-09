import { UPDATE_LIST_GENRES } from "../constants/actionTypes";

export function actionUpdateListGenres(lists) {
  return { type: UPDATE_LIST_GENRES, listGenres: lists };
}
