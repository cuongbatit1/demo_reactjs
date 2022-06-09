import {
  CHECK_REMEMBER_LOGIN,
  HIDE_DIALOG_MESSAGE_LOGIN,
  HIDE_PASSWORD_LOGIN,
  SHOW_DIALOG_MESSAGE_LOGIN,
  SHOW_PASSWORD_LOGIN,
  UNCHECK_REMEMBER_LOGIN,
  UPDATE_EMAIL_LOGIN,
  UPDATE_ERROR_EMAIL_LOGIN,
  UPDATE_ERROR_PASSWORD_LOGIN,
  UPDATE_PASSWORD_LOGIN,
} from "../constants/actionTypes";
const initState = {
  isRemember: false,
  password: "123456",
  errorPassword: "",
  showPassword: false,
  email: "admin@gmail.com",
  errorEmail: "",
};
function loginReducer(state = initState, action) {
  switch (action.type) {
    case CHECK_REMEMBER_LOGIN:
      return {
        ...state,
        isRemember: true,
      };
    case UNCHECK_REMEMBER_LOGIN:
      return {
        ...state,
        isRemember: false,
      };
    case UPDATE_EMAIL_LOGIN:
      return {
        ...state,
        email: action.email,
      };
    case UPDATE_ERROR_EMAIL_LOGIN:
      return {
        ...state,
        errorEmail: action.errorEmail,
      };
    case UPDATE_PASSWORD_LOGIN:
      return {
        ...state,
        password: action.password,
      };
    case UPDATE_ERROR_PASSWORD_LOGIN:
      return {
        ...state,
        errorPassword: action.errorPassword,
      };
    case SHOW_PASSWORD_LOGIN:
      return {
        ...state,
        showPassword: true,
      };
    case HIDE_PASSWORD_LOGIN:
      return {
        ...state,
        showPassword: false,
      };
    default:
      return state;
  }
}

export default loginReducer;
