import React from "react";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../../Screens/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../../Screens/ProfileScreen/ProfileScreen";
import PostsScreen from "../../Screens/PostsScreen/PostsScreen";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

const Tabs = createBottomTabNavigator();

const TabsNav = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "#212121CC",
        tabBarShowLabel: false,
        tabBarStyle: { position: "absolute", height: 83 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = focused ? "grid" : "grid";
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "plus" : "plus";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "user" : "user";
          }
          return (
            <Feather
              name={iconName}
              size={size}
              color={focused ? "white" : color}
              style={{
                borderRadius: 100,
                paddingHorizontal: 28,
                paddingVertical: 13,
                backgroundColor: focused ? color : "transparent",
              }}
            />
          );
        },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerTitle: () => <HeaderTitle text="Публікації" />,
          headerRight: () => <LogOutBtn />,
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerTitle: () => <HeaderTitle text="Створити публікацію" />,
        }}
      />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default TabsNav;
