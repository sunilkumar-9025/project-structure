import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {  LOGOUT_USER } from "./actionTypes";
import { apiError, logoutUserSuccess } from "./actions";

import { getFirebaseBackend } from "../../../helpers/firebase_helper";


const fireBaseBackend = getFirebaseBackend();


function* logoutUser() {
    try {
      sessionStorage.removeItem("authUser");
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        const response = yield call(fireBaseBackend.logout);
        yield put(logoutUserSuccess(LOGOUT_USER, response));
      } else {
        yield put(logoutUserSuccess(LOGOUT_USER, true));
      }
    } catch (error) {
      yield put(apiError(LOGOUT_USER, error));
    }
  }


  function* AuthSaga() {
    yield takeEvery(LOGOUT_USER, logoutUser);
  }

  export default AuthSaga;