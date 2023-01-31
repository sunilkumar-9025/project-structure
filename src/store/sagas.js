import { all, fork } from "redux-saga/effects";
import AuthSaga from "./auth/login/saga";
import AccountSaga from "./auth/register/saga";

export default function* rootSaga() {
  yield all([fork(AuthSaga), fork(AccountSaga)]);
}
