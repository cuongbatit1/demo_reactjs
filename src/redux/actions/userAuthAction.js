import { CLEAR_USER_AUTH, UPDATE_USER_AUTH } from "../constants/actionTypes";

export function updateUserAuth(userData) {
  return { type: UPDATE_USER_AUTH, userAuth: userData };
}

export function clearUserAuth() {
  return { type: CLEAR_USER_AUTH };
}
