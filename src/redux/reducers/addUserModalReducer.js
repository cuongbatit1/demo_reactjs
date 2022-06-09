import {
  SHOW_ADD_USER_MODAL,
  CLOSE_ADD_USER_MODAL,
  UPDATE_EMAIL_ADD_USER_MODAL,
  UPDATE_LAST_NAME_ADD_USER_MODAL,
  UPDATE_FIRST_NAME_ADD_USER_MODAL,
  UPDATE_ROLE_ADD_USER_MODAL,
  SHOW_LOADING_ADD_USER_MODAL,
  CLOSE_LOADING_ADD_USER_MODAL,
  UPDATE_ERROR_EMAIL_ADD_USER_MODAL,
  UPDATE_ERROR_LAST_NAME_ADD_USER_MODAL,
  UPDATE_ERROR_FIRST_NAME_ADD_USER_MODAL,
  UPDATE_ERROR_ROLE_ADD_USER_MODAL,
  SHOW_PASSWORD_ADD_USER_MODAL,
  HIDE_PASSWORD_ADD_USER_MODAL,
  UPDATE_PASSWORD_ADD_USER_MODAL,
  UPDATE_ERROR_PASSWORD_ADD_USER_MODAL,
} from "../constants/actionTypes";

const initState = {
  isShowModal: false,
  role: "",
  errorRole: "",
  first_name: "",
  errorFirstName: "",
  last_name: "",
  errorLastName: "",
  email: "",
  errorEmail: "",
  password: "",
  errorPassword: "",
  showPassword: false,
  isActive: false,
  isLoading: false,
};
function addUserModalReducer(state = initState, action) {
  switch (action.type) {
    case SHOW_ADD_USER_MODAL:
      return {
        ...state,
        isShowModal: true,
      };
    case CLOSE_ADD_USER_MODAL:
      return {
        ...state,
        isShowModal: false,
      };
    case UPDATE_FIRST_NAME_ADD_USER_MODAL:
      return {
        ...state,
        first_name: action.first_name,
      };
    case UPDATE_ERROR_FIRST_NAME_ADD_USER_MODAL:
      return {
        ...state,
        errorFirstName: action.errorFirstName,
      };
    case UPDATE_LAST_NAME_ADD_USER_MODAL:
      return {
        ...state,
        last_name: action.last_name,
      };
    case UPDATE_ERROR_LAST_NAME_ADD_USER_MODAL:
      return {
        ...state,
        errorLastName: action.errorLastName,
      };
    case UPDATE_EMAIL_ADD_USER_MODAL:
      return {
        ...state,
        email: action.email,
      };
    case UPDATE_ERROR_EMAIL_ADD_USER_MODAL:
      return {
        ...state,
        errorEmail: action.errorEmail,
      };
    case UPDATE_ROLE_ADD_USER_MODAL:
      return {
        ...state,
        role: action.role,
      };
    case UPDATE_ERROR_ROLE_ADD_USER_MODAL:
      return {
        ...state,
        errorRole: action.errorRole,
      };
    case UPDATE_PASSWORD_ADD_USER_MODAL:
      return {
        ...state,
        password: action.password,
      };
    case UPDATE_ERROR_PASSWORD_ADD_USER_MODAL:
      return {
        ...state,
        errorPassword: action.errorPassword,
      };
    case SHOW_LOADING_ADD_USER_MODAL:
      return {
        ...state,
        isLoading: true,
      };
    case CLOSE_LOADING_ADD_USER_MODAL:
      return {
        ...state,
        isLoading: false,
      };
    case SHOW_PASSWORD_ADD_USER_MODAL:
      return {
        ...state,
        showPassword: true,
      };
    case HIDE_PASSWORD_ADD_USER_MODAL:
      return {
        ...state,
        showPassword: false,
      };

    default:
      return state;
  }
}

export default addUserModalReducer;
