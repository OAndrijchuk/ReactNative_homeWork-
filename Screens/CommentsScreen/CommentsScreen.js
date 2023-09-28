import React, { useEffect, useState } from "react";
import { styles } from "../../styles/styles";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import SendComentSVG from "../../Components/SendComentSVG/SendComentSVG";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/auth/selectors";

const CommentsScreen = () => {
  const [coments, setComents] = useState([]);
  const [message, setMessage] = useState("");
  const { userId } = useSelector(userSelector);
  const { params } = useRoute();
  console.log(params);
  useEffect(() => {
    setComents(params.coments);
  }, [params, coments]);

  // const writeDataToFirestore = async () => {
  //   try {
  //     const dataTimeNow = new Date();
  //     const typeTime = dataTimeNow.toUTCString;
  //     const docRef = await addDoc(collection(db, "coments"), {
  //       postId: params.id,
  //       userId: userId,
  //       body: message,
  //       useAvatar: require("../../picture/user-avatar-default.png"),
  //       time: typeTime.toString(),
  //     });
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //     throw e;
  //   }
  // };

  const updateDataInFirestore = async () => {
    try {
      const ref = doc(db, "posts", params.id);
      const dataTimeNow = new Date();
      const typeTime = dataTimeNow.toUTCString;
      let newComents = params.coments.push({
        userId: userId,
        body: message,
        useAvatar: require("../../picture/user-avatar-default.png"),
        dataTime: typeTime.toString(),
      });
      await updateDoc(ref, {
        ...params,
        coments: [...newComents],
      });
      setComents((prev) => [
        ...prev,
        {
          userId: userId,
          body: message,
          useAvatar: require("../../picture/user-avatar-default.png"),
          dataTime: dataTimeNow.toUTCString,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const sendComent = () => {
    updateDataInFirestore();
    setMessage("");
  };
  return (
    <ScrollView style={commentsStyles.container}>
      <Image
        style={[commentsStyles.postPhoto, { width: "100%", height: 240 }]}
        source={
          params.imgRef
            ? { uri: params.imgRef }
            : require("../../picture/image-not-found.jpg")
        }
      />
      <View style={{ flexDirection: "column", marginBottom: 50 }}>
        {Array.isArray(coments) &&
          coments.map((item, index) => (
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
      <View style={{ position: "relative" }}>
        <TextInput
          style={[styles.input, commentsStyles.input]}
          multiline={true}
          inputMode="text"
          value={message}
          onChangeText={setMessage}
          placeholder="Коментувати..."
        />
        <TouchableOpacity style={commentsStyles.sendBtn} onPress={sendComent}>
          <SendComentSVG />
        </TouchableOpacity>
      </View>
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
    paddingRight: 50,
  },
  sendBtn: { width: 34, height: 34, position: "absolute", right: 8 },
});
