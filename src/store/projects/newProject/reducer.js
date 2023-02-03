import {
  NEW_PROJECT,
  NEW_PROJECT_FAILED,
  NEW_PROJECT_SUCCESSFUL,
  RESET_NEW_PROJECT_FLAG,
} from "./actionType";

const initialState = {
  newProjectError: null,
  message: null,
  loading: false,
  project: null,
  success: false,
  error: false,
};

const Project = (state = initialState, action) => {
  switch (action.type) {
    case NEW_PROJECT:
      state = {
        ...state,
        loading: true,
        newProjectError: null,
      };
      break;
    case NEW_PROJECT_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        project: action.payload,
        success: true,
        newProjectError: null,
      };
      break;
    case NEW_PROJECT_FAILED:
      state = {
        ...state,
        project: null,
        loading: false,
        newProjectError: action.payload,
        error: true,
      };
      break;
    case RESET_NEW_PROJECT_FLAG:
      state = {
        ...state,
        success: false,
        error: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Project;
