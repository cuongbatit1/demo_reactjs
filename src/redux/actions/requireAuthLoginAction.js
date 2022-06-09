import { updateUserAuth } from "./userAuthAction";

export function loadDataUserAuth(userAuth) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(updateUserAuth(userAuth));
  };
}
