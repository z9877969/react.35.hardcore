import { createReducer } from "@reduxjs/toolkit";
import {
  getCurUserSuccess,
  loginSuccess,
  logOut,
  refreshTokenSuccess,
  registerSuccess,
} from "./authActions";

const iS = {
  email: "",
  idToken: null,
  refreshToken: null,
  localId: null,
};

const auth = createReducer(iS, {
  [registerSuccess]: (_, { payload }) => payload,
  [loginSuccess]: (_, { payload }) => payload,
  [getCurUserSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [refreshTokenSuccess]: (state, { payload }) => ({ ...state, ...payload }),
  [logOut]: () => iS,
});

export default auth;
