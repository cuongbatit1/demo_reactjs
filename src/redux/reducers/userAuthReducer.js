import { CLEAR_USER_AUTH, UPDATE_USER_AUTH } from "../constants/actionTypes";
const initState = {
  userAuth: null,
};
function userAuthReducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_USER_AUTH:
      return {
        ...state,
        userAuth: { ...action.userAuth },
      };
    case CLEAR_USER_AUTH:
      return {
        ...state,
        userAuth: null,
      };
    default:
      return state;
  }
}

export default userAuthReducer;
