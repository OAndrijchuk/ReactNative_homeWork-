import React, { useState } from "react";
import { styles } from "../../styles/styles";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import ComentsSVG from "../../Components/ComentsSVG/ComentsSVG";
import MapPinSVG from "../../Components/MapPinSVG/MapPinSVG";

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

const PostsScreen = () => {
  const [avatar, setAvatar] = useState(
    require("../../picture/user-avatar-default.png")
  );
  const [userName, setUserName] = useState("Anonimus");
  const [userEmail, setUserEmail] = useState("anonimus@mail.com");
  const [posts, setPosts] = useState(defaultPosts);

  return (
    <ScrollView style={postsStyles.container}>
      <View style={postsStyles.userInfo}>
        <Image style={postsStyles.avatarPhoto} source={avatar} />
        <View>
          <Text style={postsStyles.userName}>{userName}</Text>
          <Text style={postsStyles.userEmail}>{userEmail}</Text>
        </View>
      </View>
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
                <Text style={postsStyles.userEmail}>{item.comentsCount}</Text>
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
    </ScrollView>
  );
};

export default PostsScreen;

const postsStyles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  avatarPhoto: {
    borderRadius: 10,
    width: 60,
    height: 60,
  },
  userName: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "700",
  },
  userEmail: {
    color: "rgba(33, 33, 33, 0.80)",
    fontFamily: "Roboto",
    fontSize: 11,
    fontWeight: "400",
  },
  userInfo: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
