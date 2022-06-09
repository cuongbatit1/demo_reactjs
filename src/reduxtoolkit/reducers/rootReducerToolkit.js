import { combineReducers } from "redux";
import addUserModalReducer from "../../redux/reducers/addUserModalReducer";
import headerMainReducer from "../../redux/reducers/headerMainReducer";
import themeReducer from "../../redux/reducers/themeReducer";
import constantsReducer from "../../redux/reducers/constantsReducer";
import userReducer from "../../redux/reducers/userReducer";
import userDetailReducerSlice from "./userDetailReducerSlice";
import userAuthReducer from "../../redux/reducers/userAuthReducer";
import loginReducer from "../../redux/reducers/loginReducer";
import userTrashReducer from "../../redux/reducers/userTrashReducer";
import dialogMessageReducer from "../../redux/reducers/dialogMessageReducer";
import movieReducer from "../../redux/reducers/movieReducer";
import loadingReducer from "../../redux/reducers/loadingReducer";
// const rootReducerToolkit = {
//   addUserModalReducer,
//   headerMainReducer,
//   themeReducer,
//   constantsReducer,
//   userReducer,
//   userDetailReducer: userDetailReducerSlice,
//   userAuthReducer: userAuthReducer,
//   loginReducer: loginReducer,
//   userTrashReducer: userTrashReducer,
//   dialogMessageReducer: dialogMessageReducer,
//   movieReducer: movieReducer,
//   loadingReducer: loadingReducer,
// };

const rootReducerToolkit = combineReducers({
  addUserModalReducer,
  headerMainReducer,
  themeReducer,
  constantsReducer,
  userReducer,
  userDetailReducer: userDetailReducerSlice,
  userAuthReducer: userAuthReducer,
  loginReducer: loginReducer,
  userTrashReducer: userTrashReducer,
  dialogMessageReducer: dialogMessageReducer,
  movieReducer: movieReducer,
  loadingReducer: loadingReducer,
});

export default rootReducerToolkit;
