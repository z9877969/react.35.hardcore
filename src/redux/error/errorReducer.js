import { createReducer } from "@reduxjs/toolkit";
import { getCurUserError, getCurUserRequest } from "../auth/authActions";

export const error = createReducer(null, {
  [getCurUserError]: (_, { payload }) => payload,
  [getCurUserRequest]: () => null,
});
