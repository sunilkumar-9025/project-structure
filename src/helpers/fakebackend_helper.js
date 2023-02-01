import * as url from "./url_helper";
import { APIClient } from "./api_helper";

const api = new APIClient();

export const postJwtLogin = (data) => api.create(url.POST_FAKE_JWT_LOGIN, data);

export const postFakeLogin = (data) => api.create(url.POST_FAKE_LOGIN, data);

export const postSocialLogin = (data) => api.create(url.SOCIAL_LOGIN, data);

export const postFakeRegister = (data) =>
  api.create(url.POST_FAKE_REGISTER, data);

export const postJwtRegister = (url, data) => {
  return api.create(url, data).catch((err) => {
    var message;
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 404:
          message = "Sorry! the page you are looking for could not be found";
          break;
        case 500:
          message =
            "Sorry! something went wrong, please contact our support team";
          break;
        case 401:
          message = "Invalid credentials";
          break;
        default:
          message = err[1];
          break;
      }
    }
    throw message;
  });
};

export const postFakeForgetPwd = (data) =>
  api.create(url.POST_FAKE_PASSWORD_FORGET, data);

export const postJwtForgetPwd = (data) =>
  api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);


  export const postFakeProfile = (data) =>
  api.update(url.POST_EDIT_PROFILE + "/" + data.idx, data);


  export const postJwtProfile = (data) =>
  api.create(url.POST_EDIT_JWT_PROFILE, data);