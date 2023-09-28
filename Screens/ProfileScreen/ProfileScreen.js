import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/styles";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import ComentsSVG from "../../Components/ComentsSVG/ComentsSVG";
import MapPinSVG from "../../Components/MapPinSVG/MapPinSVG";
import { TouchableOpacity } from "react-native";
import LogOutBtn from "../../Components/LogOutBtn/LogOutBtn";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/auth/selectors";

const defaultPosts = [
  {
    img: require("../../picture/forest-default.jpg"),
    title: "Ліс",
    comentsCount: 0,
    location: `Ivano-Frankivs'k Region, Ukraine`,
  },
  {
    img: require("../../picture/forest-default.jpg"),
    title: "Ліс",
    comentsCount: 0,
    location: `Ivano-Frankivs'k Region, Ukraine`,
  },
  {
    img: require("../../picture/forest-default.jpg"),
    title: "Ліс",
    comentsCount: 0,
    location: `Ivano-Frankivs'k Region, Ukraine`,
  },
];

const ProfileScreen = () => {
  const [posts, setPosts] = useState(defaultPosts);
  const { login, email } = useSelector(userSelector);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../../picture/bg.jpg")}
          resizeMode="cover"
          style={[styles.image, { paddingTop: 150 }]}
        >
          <View style={styles.form}>
            <View style={postsStyles.logOut}>
              <LogOutBtn />
            </View>

            <View style={styles.addPhoto}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../../picture/user-avatar-default.png")}
              />
              <Image
                style={styles.addBtn}
                source={require("../../picture/addBtn.jpg")}
              />
            </View>
            <Text style={styles.text}>{login}</Text>
            <View>
              {posts.map((item, index) => (
                <View key={index} style={{ gap: 8, marginTop: 32 }}>
                  <Image
                    style={postsStyles.postPhoto}
                    source={
                      item.img
                        ? item.img
                        : require("../../picture/image-not-found.jpg")
                    }
                  />
                  <Text style={postsStyles.postTitle}>{item.title}</Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <ComentsSVG />
                      <Text style={postsStyles.userEmail}>
                        {item.comentsCount}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <MapPinSVG />
                      <Text style={postsStyles.userEmail}>{item.location}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;

const postsStyles = StyleSheet.create({
  logOut: {
    position: "absolute",
    top: 22,
    right: 16,
    // width: 120,
    // height: 120,
    // backgroundColor: "#F6F6F6",
    // borderRadius: 16,
    // transform: [{ translateX: -60 }],
  },
  userEmail: {
    color: "rgba(33, 33, 33, 0.80)",
    fontFamily: "Roboto",
    fontSize: 11,
    fontWeight: "400",
  },

  postPhoto: {
    width: "100%",
    height: 240,
  },
  postTitle: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    width: "100%",
  },
});
