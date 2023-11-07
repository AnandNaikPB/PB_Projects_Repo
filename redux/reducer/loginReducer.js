import { checkIfLogin } from "../../utils/sessionManagement";

const defaultState = {
  loading: false,
  isError: false,
  data: null,
  error: {},
  flag: checkIfLogin(),
};

const LoginReducer = (state, action) => {
  if (typeof state === "undefined") {
    return defaultState;
  }
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isError: false,
        data: action.payload,
        flag: true,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        isError: true,
        error: action.error,
      };
    case "LOGIN_RESET":
      return {
        ...state,
        loading: false,
        isError: false,
        error: null,
        flag: false,
      };
    case "LOGIN_API_CALL":
      return {
        ...state,
        loading: true,
        isError: false,
        flag: false,
        error: {},
      };
    default:
      return { ...state };
  }
};

export const loginDataReducer = {
  loginDetails: LoginReducer,
};
