import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "./combineReducers";

export const store = configureStore({
  reducer: combineReducers,
});
