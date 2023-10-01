import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userReducer } from "./auth/authSlice";
import { postsReducer } from "./posts/postsSlice";

const persistConfig = {
  key: "user",
  storage: AsyncStorage,
};

// const reducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userReducer),
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export default { store, persistor };
