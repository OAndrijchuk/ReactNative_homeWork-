import { createSelector } from "@reduxjs/toolkit";

export const isAuthSelector = createSelector(
  [(state) => state.user],
  (user) => user.isAuth
);
