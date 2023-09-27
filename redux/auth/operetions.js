import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../config";

export const register = createAsyncThunk(
  "auth/reg",
  async (credentials, thunkAPI) => {
    const { email, password } = credentials;
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return newUser.user;
    } catch (error) {
      alert("Введені не коректні дані!!!");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    const { email, password } = credentials;
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      return userData.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const logoutThunk = createAsyncThunk(
//   "auth/logout",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await API.delete("/api/auth/sign-out");
//       clearToken();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const currentUser = createAsyncThunk(
//   "auth/currentUser",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const newToken = state.user.token;
//     if (!newToken) {
//       return thunkAPI.rejectWithValue("NO autorization!!!");
//     }
//     setToken(newToken);
//     try {
//       const { data } = await API.get("/api/users/current");

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

const authStateChanged = async (onChange = () => {}) => {
  onAuthStateChanged((user) => {
    onChange(user);
  });
};

const updateUserProfile = async (update) => {
  const user = auth.currentUser;

  // якщо такий користувач знайдений
  if (user) {
    // оновлюємо його профайл
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
};
