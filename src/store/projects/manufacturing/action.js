import {
    MANUFACTURING,
    MANUFACTURING_FAILED,
    MANUFACTURING_SUCCESSFUL,
    RESET_MANUFACTURING_FLAG,
  } from "./actionType";
  
  export const manufacturing = (manufacturing) => {
    console.log({ manufacturing });
    return {
      type: MANUFACTURING,
      payload: { manufacturing },
    };
  };
  
  export const manufacturingSuccessful = (manufacturing) => {
    return {
      type: MANUFACTURING_SUCCESSFUL,
      payload: manufacturing,
    };
  };
  
  export const manufacturingFailed = (manufacturing) => {
    return {
      type: MANUFACTURING_FAILED,
      payload: manufacturing,
    };
  };
  
  export const resetManufacturingFlag = () => {
    return {
      type: RESET_MANUFACTURING_FLAG,
    };
  };
  