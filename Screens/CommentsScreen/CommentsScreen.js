import React, { useState } from "react";
import { styles } from "../../styles/styles";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const defaultComents = [
  {
    useId: 123,
    body: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    useAvatar: require("../../picture/user-avatar-default.png"),
    dataTime: "09 червня, 2020 | 08:40",
  },
  {
    useId: 111,
    body: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    useAvatar: require("../../picture/user-avatar-default.png"),
    dataTime: "09 червня, 2020 | 09:14",
  },
  {
    useId: 123,
    body: "Thank you! That was very helpful!",
    useAvatar: require("../../picture/user-avatar-default.png"),
    dataTime: "09 червня, 2020 | 09:20",
  },
];

const CommentsScreen = () => {
  const [coments, setComents] = useState(defaultComents);
  const [message, setMessage] = useState("");

  const { params } = useRoute();
  return (
    <ScrollView style={commentsStyles.container}>
      <Image
        style={commentsStyles.postPhoto}
        source={
          params.img ? params.img : require("../../picture/image-not-found.jpg")
        }
      />
      <View style={{ flexDirection: "column", marginBottom: 50 }}>
        {coments.map((item, index) => (
          <View
            key={index}
            style={[
              commentsStyles.comentInfo,
              item.useId === 111
                ? { flexDirection: "row-reverse" }
                : { flexDirection: "row" },
            ]}
          >
            <Image
              style={commentsStyles.avatarPhoto}
              source={
                item.useAvatar
                  ? item.useAvatar
                  : require("../../picture/image-not-found.jpg")
              }
            />
            <View
              style={{
                maxWidth: "75%",
                backgroundColor: "rgba(0, 0, 0, 0.03)",
                borderRadius: 6,
                padding: 16,
              }}
            >
              <Text style={commentsStyles.postTitle}>{item.body}</Text>
              <Text style={commentsStyles.time}>{item.dataTime}</Text>
            </View>
          </View>
        ))}
      </View>
      <TextInput
        style={[styles.input, commentsStyles.input]}
        multiline={true}
        inputMode="text"
        value={message}
        onChangeText={setMessage}
        placeholder="Коментувати..."
      />
    </ScrollView>
  );
};

export default CommentsScreen;
const commentsStyles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  postTitle: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18 /* 138.462% */,
  },
  avatarPhoto: {
    borderRadius: 60,
    width: 60,
    height: 60,
  },
  time: {
    color: "rgba(33, 33, 33, 0.80)",
    fontFamily: "Roboto",
    fontSize: 11,
    fontWeight: "400",
  },
  comentInfo: {
    maxWidth: "100%",
    marginTop: 32,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  input: {
    width: "100%",
    bottom: 16,
    borderRadius: 100,
    height: "auto",
    backgroundColor: "#F6F6F6",
  },
});
{
  /* <View style={postsStyles.userInfo}>
        <Image style={postsStyles.avatarPhoto} source={avatar} />
        <View>
          <Text style={postsStyles.userName}>{userName}</Text>
          <Text style={postsStyles.userEmail}>{userEmail}</Text>
        </View> */
}
