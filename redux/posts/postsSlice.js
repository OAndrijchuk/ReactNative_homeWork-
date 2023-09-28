import { createSlice } from "@reduxjs/toolkit";
// email: "",
// password: "",
// login: "",
const initialState = {
  posts: null,
};
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  allPosts: {
    register: (state, { payload }) => {
      state.posts = payload;
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const { allPosts } = postsSlice.actions;
