import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8EATuSav56ud8pkILpdrRyOl_gwDHRlI",
  authDomain: "goit-native-homework.firebaseapp.com",
  databaseURL:
    "https://goit-native-homework-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "goit-native-homework",
  storageBucket: "goit-native-homework.appspot.com",
  messagingSenderId: "278190494762",
  appId: "1:278190494762:web:82b67950fc68207deadf53",
};

const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
