import { createSelector } from "@reduxjs/toolkit";

export const userSelector = createSelector([(state) => state.user], (user) => {
  console.log(user);
  return user.user;
});
