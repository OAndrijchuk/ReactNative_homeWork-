import { createSelector } from "@reduxjs/toolkit";

export const postsSelector = createSelector(
  [(state) => state.posts],
  (user) => user.posts
);
