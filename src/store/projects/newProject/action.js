import {
  NEW_PROJECT,
  NEW_PROJECT_FAILED,
  NEW_PROJECT_SUCCESSFUL,
  RESET_NEW_PROJECT_FLAG,
} from "./actionType";

export const newProject = (project) => {
  return {
    type: NEW_PROJECT,
    payload: { project },
  };
};

export const newProjectSuccessful = (project) => {
  return {
    type: NEW_PROJECT_SUCCESSFUL,
    payload: project,
  };
};

export const newProjectFailed = (project) => {
  return {
    type: NEW_PROJECT_FAILED,
    payload: project,
  };
};

export const resetNewProjectFlag = () => {
  return {
    type: RESET_NEW_PROJECT_FLAG,
  };
};
