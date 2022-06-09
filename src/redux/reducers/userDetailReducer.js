import {
  CREATE_USER_DETAIL,
  DELETE_USER_DETAIL,
} from "../constants/actionTypes";
const initState = {
  userDetail: null,
};
function userDetailReducer(state = initState, action) {
  switch (action.type) {
    case CREATE_USER_DETAIL:
      return {
        ...state,
        userDetail: action.userDetail,
      };
    case DELETE_USER_DETAIL:
      return {
        ...state,
        userDetail: null,
      };
    default:
      return state;
  }
}

export default userDetailReducer;
