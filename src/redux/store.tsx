"use client";

import { configureStore } from "@reduxjs/toolkit";
import { AuthScreenReducer } from "./slice/AuthScreenSlice";

export const store = configureStore({
  reducer: { authScreen: AuthScreenReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
