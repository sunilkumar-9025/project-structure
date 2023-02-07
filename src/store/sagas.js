import { all, fork } from "redux-saga/effects";

//layout
import LayoutSaga from "./layouts/saga";

//Auth
import AuthSaga from "./auth/login/saga";
import AccountSaga from "./auth/register/saga";
import ForgetSaga from "./auth/forgetpwd/saga";
import ProfileSaga from "./auth/profile/saga";

//project
import ProjectSaga from "./projects/newProject/saga";
import FormulationSaga from "./projects/formulation/saga";
import TestingSaga from "./projects/testing/saga";
import ManufacturingSaga from "./projects/manufacturing/saga";
import PackagingSaga from "./projects/packaging/saga";
import LaunchSaga from "./projects/launch/saga";

export default function* rootSaga() {
  yield all([
    fork(AuthSaga),
    fork(AccountSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(LayoutSaga),
    fork(ProjectSaga),
    fork(FormulationSaga),
    fork(TestingSaga),
    fork(ManufacturingSaga),
    fork(PackagingSaga),
    fork(LaunchSaga),
  ]);
}
