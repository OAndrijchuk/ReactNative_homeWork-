import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdy1cFqert-1yd12No3FJe_Bsn9ZGpDxI",
  authDomain: "goit-native-homework2.firebaseapp.com",
  projectId: "goit-native-homework2",
  storageBucket: "goit-native-homework2.appspot.com",
  messagingSenderId: "202319145879",
  appId: "1:202319145879:web:35bbf9fceaaf60c0ae72d2",
};

const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
