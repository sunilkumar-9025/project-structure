import { CHANGE_LAYOUT_MODE, CHANGE_LAYOUT } from "./actionType";
import {
  layoutModeTypes,
  layoutTypes,
} from "../../Components/constants/layout";

const INIT_STATE = {
  layoutModeType: layoutModeTypes.LIGHT,
  layoutType: layoutTypes.VERTICAL,
};

const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return {
        ...state,
        layoutType: action.payload,
      };
    case CHANGE_LAYOUT_MODE:
      return {
        ...state,
        layoutModeType: action.payload,
      };
    default:
      return state;
  }
};

export default Layout;
