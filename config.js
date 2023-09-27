// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

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

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
