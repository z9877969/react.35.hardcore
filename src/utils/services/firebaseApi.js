import axios from "axios";

// ?key=[API_KEY] -> r
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY] - l
// https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]
// ?key=[API_KEY]

const API_KEY = "AIzaSyAbljcEZ8Di2P023KITsW_b9r0oKY4q-x0";

const baseUrl = {
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  REFRESH_TOKEN: "https://securetoken.googleapis.com/v1",
};

const endPoint = {
  LOGIN: "/accounts:signInWithPassword",
  REGISTER: "/accounts:signUp",
  CUR_USER: "/accounts:lookup",
  REFRESH_TOKEN: "/token",
};

axios.defaults.baseURL = baseUrl.AUTH;
const setParams = (params) => (axios.defaults.params = params);

export const registerApi = (userData) => {
  setParams({ key: API_KEY });
  return axios
    .post(endPoint.REGISTER, {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data: { localId, email, idToken, refreshToken } }) => ({
      localId,
      email,
      idToken,
      refreshToken,
    }))
    .catch((err) => {
      throw err;
    });
};

export const loginApi = (userData) => {
  setParams({ key: API_KEY });
  return axios
    .post(endPoint.LOGIN, {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data: { localId, email, idToken, refreshToken } }) => ({
      localId,
      email,
      idToken,
      refreshToken,
    }))
    .catch((err) => {
      throw err;
    });
};

export const getCurUserApi = (idToken) => {
  setParams({ key: API_KEY });
  return axios
    .post(endPoint.CUR_USER, { idToken })
    .then(({ data }) => {
      const { localId, email } = data.users[0];
      return { localId, email };
    })
    .catch((err) => {
      throw err;
    });
};

// grant_type=refresh_token&refresh_token=[REFRESH_TOKEN]

export const refreshTokenApi = (refresh_token) => {
  setParams({ key: API_KEY });
  return axios
    .post(endPoint.REFRESH_TOKEN, {
      grant_type: "refresh_token",
      refresh_token,
    })
    .then(({ data: { refresh_token: refreshToken, id_token: idToken } }) => ({
      refreshToken,
      idToken,
    }))
    .catch((err) => {
      throw err;
    });
};
//
