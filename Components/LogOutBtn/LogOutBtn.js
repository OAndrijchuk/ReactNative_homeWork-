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

  const sinOut = async () => {
    await signOut(auth);
  };

  const logOut = () => {
    alert("You log out!!!");
    sinOut();
    navigation.navigate("Login");
  };

  return (
    <TouchableOpacity onPress={logOut} style={{ marginRight: 16 }}>
      <Image source={require("../../picture/log-out.png")} />
    </TouchableOpacity>
  );
};

export default LogOutBtn;
