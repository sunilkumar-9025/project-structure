import {
    LAUNCH,
    LAUNCH_FAILED,
    LAUNCH_SUCCESSFUL,
    RESET_LAUNCH_FLAG,
  } from "./actionType";
  
  export const launch = (launch) => {
    console.log({ launch });
    return {
      type: LAUNCH,
      payload: { launch },
    };
  };
  
  export const launchSuccessful = (launch) => {
    return {
      type: LAUNCH_SUCCESSFUL,
      payload: launch,
    };
  };
  
  export const launchFailed = (launch) => {
    return {
      type: LAUNCH_FAILED,
      payload: launch,
    };
  };
  
  export const resetLaunchFlag = () => {
    return {
      type: RESET_LAUNCH_FLAG,
    };
  };
  