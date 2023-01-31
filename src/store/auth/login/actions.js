import {
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  LOGIN_USER,
  SOCIAL_LOGIN,
  RESET_LOGIN_FLAG,
  LOGIN_SUCCESS
} from "./actionTypes";

export const logoutUser = (history) => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  };
};

export const loginUser = (user, history) => {
  return {
    type: LOGIN_USER,
    payload: { user, history },
  };
};

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  };
};

export const apiError = (error) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};

export const socialLogin = (data, history, type) => {
  return {
    type: SOCIAL_LOGIN,
    payload: { data, history, type },
  };
};

export const resetLoginFlag = () => {
  return {
    type: RESET_LOGIN_FLAG,
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};
