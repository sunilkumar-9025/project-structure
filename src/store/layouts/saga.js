import { all, call, fork, takeEvery } from "redux-saga/effects";
import { CHANGE_LAYOUT_MODE, CHANGE_LAYOUT } from "./actionType";

// Changes the body attribute
function changeHTMLAttribute(attribute, value) {
  if (document.documentElement)
    document.documentElement.setAttribute(attribute, value);
  return true;
}

function* changeLayoutTheme({ payload: layout }) {
  try {
    if (layout === "twocolumn") {
      document.documentElement.removeAttribute("data-layout-width");
    } else if (layout === "horizontal") {
      document.documentElement.removeAttribute("data-sidebar-size");
    }
    yield call(changeHTMLAttribute, "data-layout", layout);
  } catch (error) {
    // console.log(error);
  }
}

function* changeLayoutMode({ payload: mode }) {
  try {
    yield call(changeHTMLAttribute, "data-layout-mode", mode);
  } catch (error) {
    // console.log(error);
  }
}




export function* watchChangeLayoutMode() {
  yield takeEvery(CHANGE_LAYOUT_MODE, changeLayoutMode);
}

export function* watchChangeLayoutType() {
  yield takeEvery(CHANGE_LAYOUT, changeLayoutTheme);
}

function* LayoutSaga() {
  yield all([
    fork(watchChangeLayoutMode), 
    fork(watchChangeLayoutType)
  ]);
}

export default LayoutSaga;
