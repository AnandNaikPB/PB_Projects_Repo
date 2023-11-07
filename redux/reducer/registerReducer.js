// import { checkIfRegister } from "../../utils/sessionManagement";

const defaultState = {
  loading: false,
  isError: false,
  data: null,
  error: {},
  //   flag: checkIfRegister(),
};

const RegisterReducer = (state, action) => {
  if (typeof state === "undefined") {
    return defaultState;
  }
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        isError: false,
        data: action.payload,
        flag: true,
      };

    case "REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        isError: true,
        error: action.error,
      };
    case "REGISTER_RESET":
      return {
        ...state,
        loading: false,
        isError: false,
        error: null,
        flag: false,
      };
    case "REGISTER_API_CALL":
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

export const registerDataReducer = {
  registerDetails: RegisterReducer,
};
