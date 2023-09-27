import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, register } from "./operetions";
// email: "",
// password: "",
// login: "",
const initialState = {
  user: {},
  isAuth: false,
  error: "",
  token: "",
};
export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOutAC: (state) => {
      state.user = {};
      state.isAuth = false;
      state.token = "";
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
      })
      .addCase(register.pending, (state, action) => {})
      .addCase(register.rejected, (state, action) => {
        alert("Введені не коректні дані!!!");
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
      })
      .addCase(loginThunk.pending, (state, action) => {})
      .addCase(loginThunk.rejected, (state, action) => {
        alert("Введені не коректні дані!!!");
      });
    //       .addCase(logoutThunk.fulfilled, (state, action) => {
    //         state.user = {
    //           name: "",
    //           email: "",
    //         };
    //         state.token = "";
    //         state.isLoading = false;
    //         state.isAuth = false;
    //       })
    //       .addCase(logoutThunk.pending, (state, action) => {
    //         state.isLoading = true;
    //       })
    //       .addCase(logoutThunk.rejected, (state, action) => {
    //         state.isLoading = false;
    //       })
    //       .addCase(currentUser.fulfilled, (state, { payload }) => {
    //         state.user.email = payload.email;
    //         state.user.username = payload.username;
    //         state.isAuth = true;
    //         state.isRefresh = false;
    //       })
    //       .addCase(currentUser.pending, (state, { payload }) => {
    //         state.isRefresh = true;
    //       })
    //       .addCase(currentUser.rejected, (state, { payload }) => {
    //         state.error = payload;
    //         state.isRefresh = false;
    //       });
  },
});

export const userReducer = authSlice.reducer;
export const { logOutAC } = authSlice.actions;
