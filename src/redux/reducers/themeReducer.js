import { THEME_DARK_OFF, THEME_DARK_ON } from "../constants/actionTypes";
const initState = {
  themeDark: false,
};
function themeReducer(state = initState, action) {
  switch (action.type) {
    case THEME_DARK_OFF:
      return {
        ...state,
        themeDark: false,
      };
    case THEME_DARK_ON:
      return {
        ...state,
        themeDark: true,
      };
    default:
      return state;
  }
}

export default themeReducer;
