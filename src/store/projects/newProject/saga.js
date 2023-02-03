import { takeEvery, fork, put, all, call } from "redux-saga/effects";

//Account Redux states
import { newProjectSuccessful, newProjectFailed } from "./action";
import { NEW_PROJECT } from "./actionType";

//Include Both Helper File with needed methods
// import { getFirebaseBackend } from "../../../helpers/firebase_helper";
// import {
//   postFakeRegister,
//   postJwtRegister,
// } from "../../../helpers/fakebackend_helper";

// initialize relavant method of both Auth
// const fireBaseBackend = getFirebaseBackend();

// Is user register successfull then direct plot user in redux.
function* newProject({ payload: { project } }) {
  try {
    // if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
    //   const response = yield call(
    //     fireBaseBackend.registerUser,
    //     user.email,
    //     user.password
    //   );
    const response = yield call(
        project.projectName,
        project.projectType,
        project.clientPOC
    )
      yield put(newProjectSuccessful(response));
    // } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
    //   const response = yield call(postJwtRegister, "/post-jwt-register", user);
    //   yield put(newProjectSuccessful(response));
    // } else if (process.env.REACT_APP_API_URL) {
    //   const response = yield call(postFakeRegister, user);
    //   // alert("registerUser");
    //   if (response.message === "success") {
    //     yield put(newProjectSuccessful(response));
    //   } else {
    //     yield put(newProjectSuccessful(response));
    //   }
    // }
  } catch (error) {
    yield put(newProjectFailed(error));
  }
}

export function* watchNewProject() {
  yield takeEvery(NEW_PROJECT, newProject);
}

function* projectSaga() {
  yield all([fork(watchNewProject)]);
}

export default projectSaga;
