import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../config";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const getPostsThunk = createAsyncThunk(
  "auth/getPosts",
  async (_, thunkAPI) => {
    try {
      const snapshot = await getDocs(collection(db, "posts"));
      const newPosts = [];
      snapshot.forEach((doc) => newPosts.push({ id: doc.id, ...doc.data() }));
      return newPosts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addPostThunk = createAsyncThunk(
  "auth/addPost",
  async (credentials, thunkAPI) => {
    try {
      await addDoc(collection(db, "posts"), credentials);
      thunkAPI.dispatch(getPostsThunk());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addComentThunk = createAsyncThunk(
  "auth/addComent",
  async ({ postId, userId, message }, thunkAPI) => {
    try {
      const ref = doc(db, "posts", postId);
      const dataTimeNow = new Date();
      const typeTime = dataTimeNow.toUTCString();
      const newComent = {
        userId: userId,
        body: message,
        useAvatar: require("../../picture/user-avatar-default.png"),
        dataTime: typeTime,
      };

      await updateDoc(ref, {
        coments: arrayUnion({ ...newComent }),
      });

      return { postId, newComent };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
