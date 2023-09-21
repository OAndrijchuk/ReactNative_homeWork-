import React from "react";
import { styles } from "../../styles/styles";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "../PostsScreen/PostsScreen";

const MainStack = createStackNavigator();

const Home = () => {
  return (
    <MainStack.Navigator initialRouteName="PostsScreen">
      <MainStack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{ title: "PostsScreen" }}
      />
    </MainStack.Navigator>
  );
};

export default Home;
