import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import memoReducer from "./memoSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    memo: memoReducer,
  },
});