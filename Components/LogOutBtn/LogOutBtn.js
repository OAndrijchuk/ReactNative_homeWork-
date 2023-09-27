import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useDispatch } from "react-redux";
import { logOutAC } from "../../redux/auth/authSlice";
import { auth } from "../../config";

const LogOutBtn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("You log out!!!");
        dispatch(logOutAC());
      })
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        // alert("Помилка виходу:");
        alert(error);
      });
  };
  //   onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // Користувач залогінений
  //     console.log("Користувач залогінений:", user);
  //   } else {
  //     // Користувач розлогінений
  //     console.log("Користувач розлогінений");
  //     // Тут ви можете виконати додаткові дії, пов'язані з розлогінізацією
  //   }
  // });

  return (
    <TouchableOpacity onPress={logOut} style={{ marginRight: 16 }}>
      <Image source={require("../../picture/log-out.png")} />
    </TouchableOpacity>
  );
};

export default LogOutBtn;
