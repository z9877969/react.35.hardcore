import { getCurUserError } from "../auth/authActions";
import { refreshToken } from "../auth/authOperations";

export const errorHandler =
  ({ error, errorType, cb }) =>
  (dispatch) => {
    if (error.request.status === 400) {
      dispatch(refreshToken(cb));
    }

    switch (errorType) {
      case getCurUserError:
        dispatch(
          getCurUserError({
            message: error.message,
            status: error.request.status,
          })
        );
        break;
    }
  };
