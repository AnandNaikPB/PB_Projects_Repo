const registerSuccess = (payload) => ({
  type: "REGISTER_SUCCESS",
  payload,
});

const registerFailure = (error) => ({
  type: "REGISTER_FAILURE",
  error,
});

const resetRegisterFlag = () => ({ type: "REGISTER_RESET" });

const registerCall = () => ({
  type: "REGISTER_API_CALL",
});

export { registerSuccess, registerFailure, resetRegisterFlag, registerCall };
