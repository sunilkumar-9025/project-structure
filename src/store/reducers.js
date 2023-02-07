import { combineReducers } from "redux";

//layoout
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";

//projects
import NewProject from "./projects/newProject/reducer";
import Formulation from "./projects/formulation/reducer";
import Testing from "./projects/testing/reducer";
import Manufacturing from "./projects/manufacturing/reducer";
import Packaging from "./projects/packaging/reducer";
import Launch from "./projects/launch/reducer";

const rootReducer = combineReducers({
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  NewProject,
  Formulation,
  Testing,
  Manufacturing,
  Packaging,
  Launch
});

export default rootReducer;
