import { createSlice } from "@reduxjs/toolkit";
import { addComentThunk, addPostThunk, getPostsThunk } from "./operetions";

const initialState = {
  posts: [],
  isLoading: false,
};
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.fulfilled, (state, { payload }) => {
        state.posts = payload;
        state.isLoading = false;
      })
      .addCase(getPostsThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPostsThunk.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addPostThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addPostThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addPostThunk.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(
        addComentThunk.fulfilled,
        (state, { payload: { postId, newComent } }) => {
          const newPosts = state.posts.map((post) => {
            if (post.id === postId) {
              post.coments.push(newComent);
              return post;
            }
            return post;
          });
          if (newPosts) {
            state.posts = newPosts;
          }
          state.isLoading = false;
        }
      )
      .addCase(addComentThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addComentThunk.rejected, (state, action) => {
        state.isLoading = false;
      });
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

export const postsReducer = postsSlice.reducer;
export const { allPosts } = postsSlice.actions;
