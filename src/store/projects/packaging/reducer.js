import {
  PACKAGING,
  PACKAGING_FAILED,
  PACKAGING_SUCCESSFUL,
  RESET_PACKAGING_FLAG,
} from "./actionType";

const initialState = {
  packagingError: null,
  message: null,
  loading: false,
  packaging: null,
  success: false,
  error: false,
};

const Project = (state = initialState, action) => {
  switch (action.type) {
    case PACKAGING:
      state = {
        ...state,
        loading: true,
        packagingError: null,
      };
      break;
    case PACKAGING_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        packaging: action.payload,
        success: true,
        packagingError: null,
      };
      break;
    case PACKAGING_FAILED:
      state = {
        ...state,
        packaging: null,
        loading: false,
        packagingError: action.payload,
        error: true,
      };
      break;
    case RESET_PACKAGING_FLAG:
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
