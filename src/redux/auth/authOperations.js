import {
  registerApi,
  loginApi,
  getCurUserApi,
  refreshTokenApi,
} from "../../utils/services/firebaseApi";
import { errorHandler } from "../error/errorHandler";
import {
  getCurUserError,
  getCurUserRequest,
  getCurUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logOut,
  refreshTokenError,
  refreshTokenRequest,
  refreshTokenSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./authActions";

export const register = (userData) => (dispatch) => {
  dispatch(registerRequest());

  registerApi(userData)
    .then((data) => dispatch(registerSuccess(data)))
    .catch((err) => dispatch(registerError(err)));
};

export const login = (userData) => (dispatch) => {
  dispatch(loginRequest());

  loginApi(userData)
    .then((data) => dispatch(loginSuccess(data)))
    .catch((err) => dispatch(loginError(err)));
};

export const getCurUser = () => (dispatch, getState) => {
  dispatch(getCurUserRequest());

  const { idToken } = getState().auth;

  getCurUserApi(idToken)
    .then((data) => dispatch(getCurUserSuccess(data)))
    .catch((error) => {
      // console.log("err :>> ", err);
      // dispatch(getCurUserError(err));
      dispatch(
        errorHandler({
          error,
          errorType: getCurUserError,
          cb: getCurUser,
        })
      );
    });
};

export const refreshToken = (cb) => (dispatch, getState) => {
  dispatch(refreshTokenRequest());

  const { refreshToken } = getState().auth;

  refreshTokenApi(refreshToken)
    .then((data) => dispatch(refreshTokenSuccess(data)))
    .then(() => dispatch(cb()))
    .catch((err) => {
      dispatch(refreshTokenError(err));
      dispatch(logOut());
    });
};
