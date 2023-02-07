import {
  FORMULATION,
  FORMULATION_FAILED,
  FORMULATION_SUCCESSFUL,
  RESET_FORMULATION_FLAG,
} from "./actionType";

export const formulation = (formulation) => {
  
  console.log({ formulation });
  return {
    type: FORMULATION,
    payload: { formulation },
  };
};

export const formulationSuccessful = (formulation) => {
  return {
    type: FORMULATION_SUCCESSFUL,
    payload: formulation,
  };
};

export const formulationFailed = (formulation) => {
  return {
    type: FORMULATION_FAILED,
    payload: formulation,
  };
};

export const resetFormulationFlag = () => {
  return {
    type: RESET_FORMULATION_FLAG,
  };
};
