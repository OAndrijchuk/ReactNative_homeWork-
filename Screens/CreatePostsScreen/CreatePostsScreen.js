import React, { useEffect, useState } from "react";
import { styles } from "../../styles/styles";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Keyboard } from "react-native";
import MapPinSVG from "../../Components/MapPinSVG/MapPinSVG";

const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState({});
  const [photoName, setPhotoName] = useState("");
  const [photoLocetion, setPhotoLocetion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (Object.keys(photo).length !== 0 && photoName && photoLocetion) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [photo, photoName, photoLocetion]);

  const publicPost = () => {
    console.log("====================================");
    console.log("ви опублікували  свій пост");
    console.log("====================================");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        style={{
          backgroundColor: "#fff",
          height: "100%",
          paddingHorizontal: 16,
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: 8,
            backgroundColor: "#F6F6F6",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: 240,
              backgroundColor: "#F6F6F6",
            }}
            source={require("../../picture/image-not-found.jpg")}
          />
        </TouchableOpacity>
        <Text style={createPostStyles.photoText}>
          {Object.keys(photo).length !== 0
            ? "Редагувати фото"
            : "Завантажте фото"}
        </Text>
        <KeyboardAvoidingView
          style={createPostStyles.inputWraper}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={createPostStyles.input}
            inputMode="text"
            value={photoName}
            onChangeText={setPhotoName}
            placeholder="Назва..."
          />
          <View style={{ position: "relative" }}>
            <TextInput
              style={[createPostStyles.input, { paddingLeft: 28 }]}
              inputMode="text"
              value={photoLocetion}
              onChangeText={setPhotoLocetion}
              placeholder="Місцевість..."
            />
            <View style={createPostStyles.mapPinSVG}>
              <MapPinSVG />
            </View>
          </View>
          <TouchableOpacity
            style={
              isFormValid
                ? styles.button
                : [styles.button, { backgroundColor: "#F6F6F6" }]
            }
            onPress={publicPost}
          >
            <Text
              style={
                isFormValid
                  ? styles.buttonText
                  : [styles.buttonText, { color: "#BDBDBD" }]
              }
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
const createPostStyles = StyleSheet.create({
  photoText: {
    marginTop: 8,
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
  },
  input: {
    paddingVertical: 15,
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  inputWraper: {
    flex: 1,
    gap: 16,
    marginTop: 32,
  },
  mapPinSVG: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  // buttonText: {
  //   color: "#fff",
  //   fontFamily: "Roboto",
  //   fontSize: 16,
  //   fontWeight: "400",
  //   textAlign: "center",
  // },
  // buttonActiv: {
  //   height: 50,
  //   paddingLeft: 32,
  //   paddingRight: 32,
  //   paddingBottom: 16,
  //   paddingTop: 16,
  //   marginTop: 43,
  //   marginBottom: 16,
  //   borderRadius: 100,
  //   backgroundColor: "#FF6C00",
  // },
});
