import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const LogOutBtn = () => {
  return (
    <TouchableOpacity
      onPress={() => alert("You log out!!!")}
      style={{ marginRight: 16 }}
    >
      <Image source={require("../../picture/log-out.png")} />
    </TouchableOpacity>
  );
};

export default LogOutBtn;
