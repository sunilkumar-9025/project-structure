import { all, fork } from "redux-saga/effects";

//layout
import LayoutSaga from "./layouts/saga";

//Auth
import AuthSaga from "./auth/login/saga";
import AccountSaga from "./auth/register/saga";
import ForgetSaga from "./auth/forgetpwd/saga";
import ProfileSaga from "./auth/profile/saga";

export default function* rootSaga() {
  yield all([
    fork(AuthSaga),
    fork(AccountSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(LayoutSaga),
  ]);
}
