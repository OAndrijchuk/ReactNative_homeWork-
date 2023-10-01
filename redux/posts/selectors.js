import { createSelector } from "@reduxjs/toolkit";

export const postsSelector = createSelector(
  [(state) => state.posts],
  (posts) => posts.posts
);
export const selectComents = (id) => (state) => {
  return state.posts.posts.find((post) => post.id === id);
};
