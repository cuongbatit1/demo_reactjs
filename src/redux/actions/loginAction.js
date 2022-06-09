import {
  UNCHECK_REMEMBER_LOGIN,
  CHECK_REMEMBER_LOGIN,
  UPDATE_ERROR_PASSWORD_LOGIN,
  UPDATE_PASSWORD_LOGIN,
  HIDE_PASSWORD_LOGIN,
  SHOW_PASSWORD_LOGIN,
  UPDATE_ERROR_EMAIL_LOGIN,
  UPDATE_EMAIL_LOGIN,
  SHOW_DIALOG_LOADING,
  HIDE_DIALOG_LOADING,
} from "../constants/actionTypes";
import validator from "validator";
import { updateUserAuth } from "./userAuthAction";
import { USER_AUTH, USER_LIST } from "../../constants/KeyLocalStorage";
import { userAdminInit } from "../../constants/AppConstants";
import { closeDialogMessage, showDialogMessage } from "./dialogMessageAction";
import { timeout } from "../../utils/Utils";

export function handleCheckRememberMe() {
  return async function (dispatch, getState) {
    const isRemember = getState().loginReducer.isRemember;
    if (isRemember) {
      dispatch({ type: UNCHECK_REMEMBER_LOGIN });
    } else {
      dispatch({ type: CHECK_REMEMBER_LOGIN });
    }
  };
}

export function changePasswordLoginAction(event) {
  return function (dispatch, getState) {
    const passwordValue = event.target.value;
    const errorPassword = getState().loginReducer.errorPassword;
    if (!validator.isEmpty(errorPassword)) {
      dispatch({
        type: UPDATE_ERROR_PASSWORD_LOGIN,
        errorPassword: "",
      });
    }
    dispatch({
      type: UPDATE_PASSWORD_LOGIN,
      password: passwordValue,
    });
  };
}

export function onBlurPasswordLoginAction() {
  return function (dispatch, getState) {
    const password = getState().loginReducer.password;
    validatePassword(dispatch, password);
  };
}

function validatePassword(dispatch, password) {
  if (validator.isEmpty(password)) {
    dispatch({
      type: UPDATE_ERROR_PASSWORD_LOGIN,
      errorPassword: "Password is not empty",
    });
    return false;
  } else if (password.length < 6) {
    dispatch({
      type: UPDATE_ERROR_PASSWORD_LOGIN,
      errorPassword: "Password must contain a length of at least 6 characters",
    });
    return false;
  } else {
    dispatch({
      type: UPDATE_ERROR_PASSWORD_LOGIN,
      errorPassword: "",
    });
    return true;
  }
}

export function handleShowHidePasswordLogin() {
  return function (dispatch, getState) {
    const showPassword = getState().loginReducer.showPassword;
    if (showPassword) {
      dispatch({
        type: HIDE_PASSWORD_LOGIN,
      });
    } else {
      dispatch({
        type: SHOW_PASSWORD_LOGIN,
      });
    }
  };
}

export function changeEmailLoginAction(event) {
  return function (dispatch, getState) {
    const emailValue = event.target.value;
    const errorEmail = getState().loginReducer.errorEmail;
    if (!validator.isEmpty(errorEmail)) {
      dispatch({
        type: UPDATE_ERROR_EMAIL_LOGIN,
        errorEmail: "",
      });
    }
    dispatch({
      type: UPDATE_EMAIL_LOGIN,
      email: emailValue,
    });
  };
}

export function onBlurEmailLoginAction() {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    const email = getState().loginReducer.email;
    validateEmail(dispatch, email);
  };
}

function validateEmail(dispatch, email) {
  if (validator.isEmpty(email)) {
    dispatch({
      type: UPDATE_ERROR_EMAIL_LOGIN,
      errorEmail: "Email is not empty",
    });
    return false;
  } else if (!validator.isEmail(email)) {
    dispatch({
      type: UPDATE_ERROR_EMAIL_LOGIN,
      errorEmail: "Please enter a valid email",
    });
    return false;
  } else {
    dispatch({
      type: UPDATE_ERROR_EMAIL_LOGIN,
      errorEmail: "",
    });
    return true;
  }
}

export function submitLogin(navigate) {
  //eslint-disable-next-line no-unused-vars
  return async function (dispatch, getState) {
    const showPassword = getState().loginReducer.showPassword;
    const isRemember = getState().loginReducer.isRemember;
    const errorEmail = getState().loginReducer.errorEmail;
    const email = getState().loginReducer.email;
    const errorPassword = getState().loginReducer.errorPassword;
    const password = getState().loginReducer.password;
    const isValiEmail = validateEmail(dispatch, email);
    const isValiPassword = validatePassword(dispatch, password);
    if (isValiEmail && isValiPassword) {
      dispatch({ type: SHOW_DIALOG_LOADING });
      await timeout(2000);
      let listUser = JSON.parse(localStorage.getItem(USER_LIST));
      // const hasUser = listUser.some(
      //   (item) => item.email == email && item.password == password
      // );

      if (!listUser || listUser.length <= 0) {
        listUser = userAdminInit;
        localStorage.setItem(USER_LIST, JSON.stringify(listUser));
      }
      const userFind = listUser.find((item) => item.email == email && item.password == password);

      if (typeof userFind !== "undefined" && userFind !== null) {
        console.log("hasUser", userFind);
        if (isRemember) {
          localStorage.setItem(USER_AUTH, JSON.stringify(userFind));
        }
        dispatch(updateUserAuth(userFind));
        navigate("/main", { replace: true });
        resetEmail(dispatch, email);
        resetErrorEmail(dispatch, errorEmail);
        resetPassword(dispatch, password);
        resetErrorPassword(dispatch, errorPassword);
        resetRememberMe(dispatch, isRemember);
        resetShowPassword(dispatch, showPassword);
      } else {
        console.log("No user");
        const messageDialog = "The email address or password is incorrect. Please retry...";
        dispatch(showDialogMessage(messageDialog));
      }
      dispatch({ type: HIDE_DIALOG_LOADING });
    }
  };
}

function resetEmail(dispatch, email) {
  if (email != "") {
    dispatch({
      type: UPDATE_EMAIL_LOGIN,
      email: "",
    });
  }
}

function resetErrorEmail(dispatch, errorEmail) {
  if (errorEmail != "") {
    dispatch({
      type: UPDATE_ERROR_EMAIL_LOGIN,
      errorEmail: "",
    });
  }
}

function resetPassword(dispatch, password) {
  if (password != "") {
    dispatch({
      type: UPDATE_PASSWORD_LOGIN,
      password: "",
    });
  }
}

function resetErrorPassword(dispatch, errorPassword) {
  if (errorPassword != "") {
    dispatch({
      type: UPDATE_ERROR_PASSWORD_LOGIN,
      errorPassword: "",
    });
  }
}

function resetRememberMe(dispatch, isRemember) {
  if (isRemember) {
    dispatch({
      type: UNCHECK_REMEMBER_LOGIN,
    });
  }
}

function resetShowPassword(dispatch, showPassword) {
  if (showPassword) {
    dispatch({
      type: HIDE_PASSWORD_LOGIN,
    });
  }
}

export function closeDialogMessageLogin() {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(closeDialogMessage());
  };
}
