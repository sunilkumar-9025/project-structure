import {
    TESTING,
    TESTING_FAILED,
    TESTING_SUCCESSFUL,
    RESET_TESTING_FLAG,
  } from "./actionType";
  
  export const testing = (testing) => {
    console.log({ testing });
    return {
      type: TESTING,
      payload: { testing },
    };
  };
  
  export const testingSuccessful = (testing) => {
    return {
      type: TESTING_SUCCESSFUL,
      payload: testing,
    };
  };
  
  export const testingFailed = (testing) => {
    return {
      type: TESTING_FAILED,
      payload: testing,
    };
  };
  
  export const resetTestingFlag = () => {
    return {
      type: RESET_TESTING_FLAG,
    };
  };
  