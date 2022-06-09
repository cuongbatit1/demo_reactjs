import { combineReducers } from "redux";
import addUserModalReducer from "./addUserModalReducer";
import headerMainReducer from "./headerMainReducer";
import themeReducer from "./themeReducer";
import constantsReducer from "./constantsReducer";
import userReducer from "./userReducer";
import userDetailReducer from "./userDetailReducer";
import userAuthReducer from "./userAuthReducer";
import loginReducer from "./loginReducer";
import userTrashReducer from "./userTrashReducer";
import dialogMessageReducer from "./dialogMessageReducer";
import movieReducer from "./movieReducer";
import loadingReducer from "./loadingReducer";
const rootReducer = combineReducers({
  addUserModalReducer,
  headerMainReducer,
  themeReducer,
  constantsReducer,
  userReducer,
  userDetailReducer,
  userAuthReducer,
  loginReducer,
  userTrashReducer,
  dialogMessageReducer,
  movieReducer,
  loadingReducer,
});

export default rootReducer;
