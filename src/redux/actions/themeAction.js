import { THEME_DARK_OFF, THEME_DARK_ON } from "../constants/actionTypes";

export function handleChangeTheme() {
  return async function (dispatch, getState) {
    const themeDark = getState().themeReduce.themeDark;
    console.log("handleChangeTheme themeDark : ", themeDark);
    if (themeDark) {
      dispatch({ type: THEME_DARK_OFF });
    } else {
      dispatch({ type: THEME_DARK_ON });
    }
  };
}
