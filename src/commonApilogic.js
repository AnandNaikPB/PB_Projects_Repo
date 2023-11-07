// import { createSlice  } from "";

export const INITIAL_API_STATE = {
  data: null,
  error: null,
  isError: false,
  loading: true,
  flag: false,
};

const initialErrorState = {
  isError: false,
  error: null,
};

export const apiFailureSlice = createSlice({
  name: "commonApiError",
  initialState: initialErrorState,
  reducers: {
    apiFailure: (state, action) => {
      console.log("action", action, "state", state);
      state.error = action.payload;
      state.isError = true;
    },
    resetApiFailure: (state) => {
      state.error = null;
      state.isError = false;
    },
  },
});

const apiFailureReducer = { apiFailureError: apiFailureSlice.reducer };

export default apiFailureReducer;