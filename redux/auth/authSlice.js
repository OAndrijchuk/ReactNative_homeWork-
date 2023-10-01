import { createSlice } from "@reduxjs/toolkit";
import { logInThunk, registerThunk } from "./operetions";
// email: "",
// password: "",
// login: "",
const initialState = {
  user: {},
  error: "",
  token: "",
};
export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // register: (state, { payload }) => {
    //   state.user = payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        // state.token = payload.token;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(registerThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        // state.token = payload.token;
        state.isLoading = false;
        state.isAuth = true;
      })
      .addCase(logInThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logInThunk.rejected, (state, action) => {
        state.isLoading = false;
      });
    // .addCase(logoutThunk.fulfilled, (state, action) => {
    //   state.user = {
    //     name: "",
    //     email: "",
    //   };
    //   state.token = "";
    //   state.isLoading = false;
    //   state.isAuth = false;
    // })
    // .addCase(logoutThunk.pending, (state, action) => {
    //   state.isLoading = true;
    // })
    // .addCase(logoutThunk.rejected, (state, action) => {
    //   state.isLoading = false;
    // })
    // .addCase(currentUser.fulfilled, (state, { payload }) => {
    //   state.user.email = payload.email;
    //   state.user.username = payload.username;
    //   state.isAuth = true;
    //   state.isRefresh = false;
    // })
    // .addCase(currentUser.pending, (state, { payload }) => {
    //   state.isRefresh = true;
    // })
    // .addCase(currentUser.rejected, (state, { payload }) => {
    //   state.error = payload;
    //   state.isRefresh = false;
    // });
  },
});

export const userReducer = authSlice.reducer;
// export const { register } = authSlice.actions;
