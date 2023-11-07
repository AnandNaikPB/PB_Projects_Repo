export const apiBegin = () => ({
  type: "BEGIN",
});

export const apiSuccess = () => ({
  type: "SUCCESS",
});

export const apiFailure = (error) => ({
  type: "FAILURE",
  error: {
    ...error,
  },
});

export const resetCommon = () => ({
  type: "RESET",
});
