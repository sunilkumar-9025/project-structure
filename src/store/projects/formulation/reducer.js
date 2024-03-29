import {
    FORMULATION,
    FORMULATION_FAILED,
    FORMULATION_SUCCESSFUL,
    RESET_FORMULATION_FLAG,
  } from "./actionType";
  
  const initialState = {
    formulationError: null,
    message: null,
    loading: false,
    formulation: null,
    success: false,
    error: false,
  };
  
  const Project = (state = initialState, action) => {
    switch (action.type) {
      case FORMULATION:
        state = {
          ...state,
          loading: true,
          formulationError: null,
        };
        break;
      case FORMULATION_SUCCESSFUL:
        state = {
          ...state,
          loading: false,
          formulation: action.payload,
          success: true,
          formulationError: null,
        };
        break;
      case FORMULATION_FAILED:
        state = {
          ...state,
          formulation: null,
          loading: false,
          formulationError: action.payload,
          error: true,
        };
        break;
      case RESET_FORMULATION_FLAG:
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
  