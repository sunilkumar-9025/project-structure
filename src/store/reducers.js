import { combineReducers } from "redux";
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";

const rootReducer = combineReducers({
  Login,
  Account,
});

export default rootReducer;
