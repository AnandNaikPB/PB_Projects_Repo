import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../../utils";

const API_CONFIG = {
  POST_LOGIN: {
    method: "POST",
    data: {},
    url: "/login",
  },
  POST_NONCE: {
    method: "POST",
    data: {},
    url: "/nonce/",
  },
};

const loginInitialState = {
  loading: false,
  isError: false,
  data: null,
  error: {},
  flag: false,
};

export const loginApiCall = createAsyncThunk(
  "post/login",
  async (userData, { rejectWithValue }) => {
    try {
      const apiPayload = { ...API_CONFIG.POST_LOGIN };
      apiPayload.data = userData;
      const response = await apiClient(apiPayload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: loginInitialState,
  reducers: {
    resetLogin: (state) => {
      state.data = null;
      state.error = null;
      state.flag = false;
      state.isError = false;
      state.loading = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginApiCall.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
        state.isError = false;
        state.flag = false;
      })
      .addCase(loginApiCall.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        state.isError = false;
        state.flag = true;
      })
      .addCase(loginApiCall.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
        state.isError = true;
        state.flag = false;
      });
  },
});

export const loginAction = loginSlice.actions;

const loginReducer = {
  loginData: loginSlice.reducer,
};

export default loginReducer;
