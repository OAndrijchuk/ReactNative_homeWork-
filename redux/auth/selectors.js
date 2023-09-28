import { createSelector } from "@reduxjs/toolkit";

export const userSelector = createSelector(
  [(state) => state.user],
  (user) => user.user
);
