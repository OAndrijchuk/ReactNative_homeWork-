import { createSlice } from "@reduxjs/toolkit";
// email: "",
// password: "",
// login: "",
const initialState = {
  user: null,
  error: "",
  token: "",
};
export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const userReducer = authSlice.reducer;
export const { register } = authSlice.actions;
