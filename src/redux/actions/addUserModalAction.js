import {
  CLOSE_ADD_USER_MODAL,
  SHOW_ADD_USER_MODAL,
  SHOW_LOADING_ADD_USER_MODAL,
  CLOSE_LOADING_ADD_USER_MODAL,
  UPDATE_FIRST_NAME_ADD_USER_MODAL,
  UPDATE_LAST_NAME_ADD_USER_MODAL,
  UPDATE_EMAIL_ADD_USER_MODAL,
  UPDATE_ERROR_EMAIL_ADD_USER_MODAL,
  UPDATE_ERROR_LAST_NAME_ADD_USER_MODAL,
  UPDATE_ERROR_FIRST_NAME_ADD_USER_MODAL,
  UPDATE_ROLE_ADD_USER_MODAL,
  UPDATE_ERROR_ROLE_ADD_USER_MODAL,
  UPDATE_PASSWORD_ADD_USER_MODAL,
  UPDATE_ERROR_PASSWORD_ADD_USER_MODAL,
  SHOW_PASSWORD_ADD_USER_MODAL,
  HIDE_PASSWORD_ADD_USER_MODAL,
  ADD_A_NEW_USER_LIST,
} from "../../redux/constants/actionTypes";
import { timeout } from "../../utils/Utils";
import validator from "validator";
import { uid } from "uid";
import { USER_LIST } from "../../constants/KeyLocalStorage";
import { showDialogMessage } from "./dialogMessageAction";

export function openDialogAction() {
  return { type: SHOW_ADD_USER_MODAL };
}

export function closeDialogAction() {
  return function (dispatch, getState) {
    const errorFirstName = getState().addUserModalReducer.errorFirstName;
    const first_name = getState().addUserModalReducer.first_name;
    const errorLastName = getState().addUserModalReducer.errorLastName;
    const last_name = getState().addUserModalReducer.last_name;
    const errorEmail = getState().addUserModalReducer.errorEmail;
    const email = getState().addUserModalReducer.email;
    const errorPassword = getState().addUserModalReducer.errorPassword;
    const password = getState().addUserModalReducer.password;
    const errorRole = getState().addUserModalReducer.errorRole;
    const role = getState().addUserModalReducer.role;
    resetFirstName(dispatch, first_name);
    resetErrorFirstName(dispatch, errorFirstName);
    resetLastName(dispatch, last_name);
    resetErrorLastName(dispatch, errorLastName);
    resetEmail(dispatch, email);
    resetErrorEmail(dispatch, errorEmail);
    resetPassword(dispatch, password);
    resetErrorPassword(dispatch, errorPassword);
    resetRole(dispatch, role);
    resetErrorRole(dispatch, errorRole);
    dispatch({
      type: CLOSE_ADD_USER_MODAL,
    });
  };
}

function resetFirstName(dispatch, first_name) {
  if (first_name !== "") {
    dispatch({
      type: UPDATE_FIRST_NAME_ADD_USER_MODAL,
      first_name: "",
    });
  }
}

function resetErrorFirstName(dispatch, errorFirstName) {
  if (errorFirstName !== "") {
    dispatch({
      type: UPDATE_ERROR_FIRST_NAME_ADD_USER_MODAL,
      errorFirstName: "",
    });
  }
}

function resetLastName(dispatch, last_name) {
  if (last_name !== "") {
    dispatch({
      type: UPDATE_LAST_NAME_ADD_USER_MODAL,
      last_name: "",
    });
  }
}

function resetErrorLastName(dispatch, errorLastName) {
  if (errorLastName !== "") {
    dispatch({
      type: UPDATE_ERROR_LAST_NAME_ADD_USER_MODAL,
      errorLastName: "",
    });
  }
}

function resetEmail(dispatch, email) {
  if (email !== "") {
    dispatch({
      type: UPDATE_EMAIL_ADD_USER_MODAL,
      email: "",
    });
  }
}

function resetErrorEmail(dispatch, errorEmail) {
  if (errorEmail !== "") {
    dispatch({
      type: UPDATE_ERROR_EMAIL_ADD_USER_MODAL,
      errorEmail: "",
    });
  }
}

function resetPassword(dispatch, password) {
  if (password !== "") {
    dispatch({
      type: UPDATE_PASSWORD_ADD_USER_MODAL,
      password: "",
    });
  }
}

function resetErrorPassword(dispatch, errorPassword) {
  if (errorPassword !== "") {
    dispatch({
      type: UPDATE_ERROR_PASSWORD_ADD_USER_MODAL,
      errorPassword: "",
    });
  }
}

function resetRole(dispatch, role) {
  if (role !== "") {
    dispatch({
      type: UPDATE_ROLE_ADD_USER_MODAL,
      role: "",
    });
  }
}

function resetErrorRole(dispatch, errorRole) {
  if (errorRole !== "") {
    dispatch({
      type: UPDATE_ERROR_ROLE_ADD_USER_MODAL,
      errorRole: "",
    });
  }
}

export function openLoadingAction() {
  return { type: SHOW_LOADING_ADD_USER_MODAL };
}

export function closeLoadingAction() {
  return { type: CLOSE_LOADING_ADD_USER_MODAL };
}

export function changeFirstNameAction(event) {
  return function (dispatch, getState) {
    const firstNameValue = event.target.value;
    const errorFirstName = getState().addUserModalReducer.errorFirstName;
    if (!validator.isEmpty(errorFirstName)) {
      dispatch({
        type: UPDATE_ERROR_FIRST_NAME_ADD_USER_MODAL,
        errorFirstName: "",
      });
    }
    dispatch({
      type: UPDATE_FIRST_NAME_ADD_USER_MODAL,
      first_name: firstNameValue,
    });
  };
}

export function onBlurFirstNameAction() {
  return function (dispatch, getState) {
    const first_name = getState().addUserModalReducer.first_name;
    console.log("onBlurFirstNameAction Value :" + first_name);
    validateFirstName(dispatch, first_name);
  };
}

function validateFirstName(dispatch, first_name) {
  if (validator.isEmpty(first_name)) {
    dispatch({
      type: UPDATE_ERROR_FIRST_NAME_ADD_USER_MODAL,
      errorFirstName: "First name is not empty",
    });
    return false;
  } else {
    dispatch({
      type: UPDATE_ERROR_FIRST_NAME_ADD_USER_MODAL,
      errorFirstName: "",
    });
    return true;
  }
}

export function changeLastNameAction(event) {
  return function (dispatch, getState) {
    const lastNameValue = event.target.value;
    const errorLastName = getState().addUserModalReducer.errorLastName;
    if (!validator.isEmpty(errorLastName)) {
      dispatch({
        type: UPDATE_ERROR_LAST_NAME_ADD_USER_MODAL,
        errorLastName: "",
      });
    }
    dispatch({
      type: UPDATE_LAST_NAME_ADD_USER_MODAL,
      last_name: lastNameValue,
    });
  };
}

export function onBlurLastNameAction() {
  return function (dispatch, getState) {
    const last_name = getState().addUserModalReducer.last_name;
    console.log("onBlurLastNameAction Value :" + last_name);
    validateLastName(dispatch, last_name);
  };
}

function validateLastName(dispatch, last_name) {
  if (validator.isEmpty(last_name)) {
    dispatch({
      type: UPDATE_ERROR_LAST_NAME_ADD_USER_MODAL,
      errorLastName: "Last name is not empty",
    });
    return false;
  } else {
    dispatch({
      type: UPDATE_ERROR_LAST_NAME_ADD_USER_MODAL,
      errorLastName: "",
    });
    return true;
  }
}

export function changeEmailAction(event) {
  return function (dispatch, getState) {
    const emailValue = event.target.value;
    const errorEmail = getState().addUserModalReducer.errorEmail;
    if (!validator.isEmpty(errorEmail)) {
      dispatch({
        type: UPDATE_ERROR_EMAIL_ADD_USER_MODAL,
        errorEmail: "",
      });
    }
    dispatch({
      type: UPDATE_EMAIL_ADD_USER_MODAL,
      email: emailValue,
    });
  };
}

export function onBlurEmailAction() {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    const email = getState().addUserModalReducer.email;
    console.log("onBlurEmailAction Value :" + email);
    validateEmail(dispatch, email);
  };
}

function validateEmail(dispatch, email) {
  if (validator.isEmpty(email)) {
    dispatch({
      type: UPDATE_ERROR_EMAIL_ADD_USER_MODAL,
      errorEmail: "Email is not empty",
    });
    return false;
  } else if (!validator.isEmail(email)) {
    dispatch({
      type: UPDATE_ERROR_EMAIL_ADD_USER_MODAL,
      errorEmail: "Please enter a valid email",
    });
    return false;
  } else {
    dispatch({
      type: UPDATE_ERROR_EMAIL_ADD_USER_MODAL,
      errorEmail: "",
    });
    return true;
  }
}

export function changeRoleAction(event) {
  return function (dispatch, getState) {
    const roleValue = event.target.value;
    console.log("roleValue", roleValue);
    const errorRole = getState().addUserModalReducer.errorRole;
    console.log("errorRole:", errorRole);
    if (!validator.isEmpty(errorRole)) {
      dispatch({
        type: UPDATE_ERROR_ROLE_ADD_USER_MODAL,
        errorRole: "",
      });
    }
    dispatch({
      type: UPDATE_ROLE_ADD_USER_MODAL,
      role: roleValue,
    });
  };
}

export function onBlurRoleAction() {
  return function (dispatch, getState) {
    const role = getState().addUserModalReducer.role;
    console.log("onBlurRoleAction Value :" + role);
    validateRole(dispatch, role);
  };
}

function validateRole(dispatch, role) {
  if (validator.isEmpty(role)) {
    dispatch({
      type: UPDATE_ERROR_ROLE_ADD_USER_MODAL,
      errorRole: "Please choose a role.",
    });
    return false;
  } else {
    dispatch({
      type: UPDATE_ERROR_ROLE_ADD_USER_MODAL,
      errorRole: "",
    });
    return true;
  }
}

export function changePasswordAction(event) {
  return function (dispatch, getState) {
    const passwordValue = event.target.value;
    const errorPassword = getState().addUserModalReducer.errorPassword;
    if (!validator.isEmpty(errorPassword)) {
      dispatch({
        type: UPDATE_ERROR_PASSWORD_ADD_USER_MODAL,
        errorPassword: "",
      });
    }
    dispatch({
      type: UPDATE_PASSWORD_ADD_USER_MODAL,
      password: passwordValue,
    });
  };
}

export function onBlurPasswordAction() {
  return function (dispatch, getState) {
    const password = getState().addUserModalReducer.password;
    console.log("onBlurPasswordAction Value :" + password);
    validatePassword(dispatch, password);
  };
}

function validatePassword(dispatch, password) {
  if (validator.isEmpty(password)) {
    dispatch({
      type: UPDATE_ERROR_PASSWORD_ADD_USER_MODAL,
      errorPassword: "Password is not empty",
    });
    return false;
  } else if (password.length < 6) {
    dispatch({
      type: UPDATE_ERROR_PASSWORD_ADD_USER_MODAL,
      errorPassword: "Password must contain a length of at least 6 characters",
    });
    return false;
  } else {
    dispatch({
      type: UPDATE_ERROR_PASSWORD_ADD_USER_MODAL,
      errorPassword: "",
    });
    return true;
  }
}

export function handleShowHidePassword() {
  return function (dispatch, getState) {
    const showPassword = getState().addUserModalReducer.showPassword;
    if (showPassword) {
      dispatch({
        type: HIDE_PASSWORD_ADD_USER_MODAL,
      });
    } else {
      dispatch({
        type: SHOW_PASSWORD_ADD_USER_MODAL,
      });
    }
  };
}

export function addUserNew() {
  //eslint-disable-next-line no-unused-vars
  return async function (dispatch, getState) {
    const errorFirstName = getState().addUserModalReducer.errorFirstName;
    const first_name = getState().addUserModalReducer.first_name;
    const errorLastName = getState().addUserModalReducer.errorLastName;
    const last_name = getState().addUserModalReducer.last_name;
    const errorEmail = getState().addUserModalReducer.errorEmail;
    const email = getState().addUserModalReducer.email;
    const errorPassword = getState().addUserModalReducer.errorPassword;
    const password = getState().addUserModalReducer.password;
    const errorRole = getState().addUserModalReducer.errorRole;
    const role = getState().addUserModalReducer.role;
    const isValiFirstName = validateFirstName(dispatch, first_name);
    const isValiLastName = validateLastName(dispatch, last_name);
    const isValiEmail = validateEmail(dispatch, email);
    const isValiPassword = validatePassword(dispatch, password);
    const isValiRole = validateRole(dispatch, role);
    if (
      isValiFirstName &&
      isValiLastName &&
      isValiEmail &&
      isValiPassword &&
      isValiRole
    ) {
      dispatch(openLoadingAction());
      await timeout(3000);
      const userAdd = {
        id: uid(3),
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        role: role,
        is_deleted: false,
      };
      dispatch({ type: ADD_A_NEW_USER_LIST, user: userAdd });
      const listUserNew = getState().userReducer.listUser;
      console.log("listUserNew", listUserNew);
      localStorage.setItem(USER_LIST, JSON.stringify(listUserNew));
      dispatch(closeLoadingAction());
      resetFirstName(dispatch, first_name);
      resetErrorFirstName(dispatch, errorFirstName);
      resetLastName(dispatch, last_name);
      resetErrorLastName(dispatch, errorLastName);
      resetEmail(dispatch, email);
      resetErrorEmail(dispatch, errorEmail);
      resetPassword(dispatch, password);
      resetErrorPassword(dispatch, errorPassword);
      resetRole(dispatch, role);
      resetErrorRole(dispatch, errorRole);
      dispatch({
        type: CLOSE_ADD_USER_MODAL,
      });
      const messageDialog =
        "Add successfully a new [" + role + "] with email: " + email;
      dispatch(showDialogMessage(messageDialog));
    }
  };
}
