import {
    LAUNCH,
    LAUNCH_FAILED,
    LAUNCH_SUCCESSFUL,
    RESET_LAUNCH_FLAG,
  } from "./actionType";
  
  const initialState = {
    launchError: null,
    message: null,
    loading: false,
    launch: null,
    success: false,
    error: false,
  };
  
  const Project = (state = initialState, action) => {
    switch (action.type) {
      case LAUNCH:
        state = {
          ...state,
          loading: true,
          launchError: null,
        };
        break;
      case LAUNCH_SUCCESSFUL:
        state = {
          ...state,
          loading: false,
          launch: action.payload,
          success: true,
          launchError: null,
        };
        break;
      case LAUNCH_FAILED:
        state = {
          ...state,
          launch: null,
          loading: false,
          launchError: action.payload,
          error: true,
        };
        break;
      case RESET_LAUNCH_FLAG:
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
  