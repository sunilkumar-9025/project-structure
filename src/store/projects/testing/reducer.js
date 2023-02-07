import {
    TESTING,
    TESTING_FAILED,
    TESTING_SUCCESSFUL,
    RESET_TESTING_FLAG,
  } from "./actionType";
  
  const initialState = {
    testinError: null,
    message: null,
    loading: false,
    testing: null,
    success: false,
    error: false,
  };
  
  const Project = (state = initialState, action) => {
    switch (action.type) {
      case TESTING:
        state = {
          ...state,
          loading: true,
          testingError: null,
        };
        break;
      case TESTING_SUCCESSFUL:
        state = {
          ...state,
          loading: false,
          testing: action.payload,
          success: true,
          testingError: null,
        };
        break;
      case TESTING_FAILED:
        state = {
          ...state,
          testing: null,
          loading: false,
          testingError: action.payload,
          error: true,
        };
        break;
      case RESET_TESTING_FLAG:
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
  