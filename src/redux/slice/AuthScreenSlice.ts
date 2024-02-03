import { createSlice } from "@reduxjs/toolkit";

interface Data {
  isLogIn: boolean;
}

const initialState: Data = {
  isLogIn: true,
};

export const authScreenSlice = createSlice({
  name: "authScreen",
  initialState,
  reducers: {
    setScreen: (state, action) => {
      state.isLogIn = action.payload;
    },
  },
});

export const { setScreen } = authScreenSlice.actions;

export const AuthScreenReducer = authScreenSlice.reducer;
