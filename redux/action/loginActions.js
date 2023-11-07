const loginSuccess = (payload) => ({
  type: "LOGIN_SUCCESS",
  payload,
});

const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  error,
});

const resetLoginFlag = () => ({ type: "LOGIN_RESET" });

const loginCall = () => ({
  type: "LOGIN_API_CALL",
});

export { loginSuccess, loginFailure, resetLoginFlag, loginCall };
