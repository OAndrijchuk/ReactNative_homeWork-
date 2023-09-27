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
    try {
      const { email, password } = credentials;
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = newUser.user;
      //   console.log("====================================");
      //   console.log(newUser);
      //   console.log("====================================");
      //   Alert.alert("Credentials===>", newUser);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const loginThunk = createAsyncThunk(
//   "auth/login",
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await API.post("/api/auth/sign-in", credentials);
//       setToken(res.data.token);

//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

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

// const registerDB = async ({ email, password }) => {
//   try {
//   } catch (error) {
//     throw error;
//   }
// };

// або більш короткий запис цієї функції
const registerDB = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password);

const authStateChanged = async (onChange = () => {}) => {
  onAuthStateChanged((user) => {
    onChange(user);
  });
};

const loginDB = async ({ email, password }) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials.user;
  } catch (error) {
    throw error;
  }
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
