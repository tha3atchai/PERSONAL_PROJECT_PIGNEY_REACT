import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import goalSlice from "./slices/goalSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    goal: goalSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
