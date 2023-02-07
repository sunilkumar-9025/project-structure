import {
    PACKAGING,
    PACKAGING_FAILED,
    PACKAGING_SUCCESSFUL,
    RESET_PACKAGING_FLAG,
  } from "./actionType";
  
  export const packaging = (packaging) => {
    console.log({ packaging });
    return {
      type: PACKAGING,
      payload: { packaging },
    };
  };
  
  export const packagingSuccessful = (packaging) => {
    return {
      type: PACKAGING_SUCCESSFUL,
      payload: packaging,
    };
  };
  
  export const packagingFailed = (packaging) => {
    return {
      type: PACKAGING_FAILED,
      payload: packaging,
    };
  };
  
  export const resetPackagingFlag = () => {
    return {
      type: RESET_PACKAGING_FLAG,
    };
  };
  