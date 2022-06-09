import {
  CREATE_USER_DETAIL,
  DELETE_USER_DETAIL,
} from "../constants/actionTypes";

import {
  deleteUserDetail,
  createUserDetail,
} from "../../reduxtoolkit/reducers/userDetailReducerSlice";

import { REDUX_TOOL_KIT } from "../../constants/AppConstants";

export function loadDataFirst(item) {
  return async function (dispatch, getState) {
    console.log("loadDataFirst", item);
    if (REDUX_TOOL_KIT) {
      dispatch(createUserDetail(item));
    } else {
      dispatch({ type: CREATE_USER_DETAIL, userDetail: item });
    }
  };
}

export function removeUserDetail() {
  return async function (dispatch, getState) {
    console.log("clear deleteUserDetail");
    if (REDUX_TOOL_KIT) {
      dispatch(deleteUserDetail());
    } else {
      dispatch({ type: DELETE_USER_DETAIL });
    }
  };
}
