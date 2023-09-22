import React from "react";
import { Text } from "react-native";
import { styles } from "../../styles/styles";

const HeaderTitle = ({ text }) => {
  return <Text style={styles.headerTitleStyle}>{text}</Text>;
};

export default HeaderTitle;
