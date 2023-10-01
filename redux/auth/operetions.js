import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../config";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    const { login } = credentials;
    const email = credentials.mail;
    const password = credentials.pass;
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: login,
      });

      return {
        login: login,
        email: userData.user.email,
        userId: userData.user.uid,
      };
      // return userData.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logInThunk = createAsyncThunk(
  "auth/logIn",
  async (credentials, thunkAPI) => {
    const email = credentials.mail;
    const password = credentials.pass;
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      return {
        login: userData.user.displayName,
        email: userData.user.email,
        userId: userData.user.uid,
      };
      // return userData.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authStateChanged = async (onChange = () => {}) => {
  onAuthStateChanged((user) => {
    onChange(user);
  });
};
