import {
    MANUFACTURING,
    MANUFACTURING_FAILED,
    MANUFACTURING_SUCCESSFUL,
    RESET_MANUFACTURING_FLAG,
  } from "./actionType";
  
  const initialState = {
    manufacturingError: null,
    message: null,
    loading: false,
    manufacturing: null,
    success: false,
    error: false,
  };
  
  const Project = (state = initialState, action) => {
    switch (action.type) {
      case MANUFACTURING:
        state = {
          ...state,
          loading: true,
          manufacturingError: null,
        };
        break;
      case MANUFACTURING_SUCCESSFUL:
        state = {
          ...state,
          loading: false,
          manufacturing: action.payload,
          success: true,
          manufacturingError: null,
        };
        break;
      case MANUFACTURING_FAILED:
        state = {
          ...state,
          manufacturing: null,
          loading: false,
          manufacturingError: action.payload,
          error: true,
        };
        break;
      case RESET_MANUFACTURING_FLAG:
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
  