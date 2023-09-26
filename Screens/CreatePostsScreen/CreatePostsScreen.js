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
import * as Location from "expo-location";
import PhotoBtnSVG from "../../Components/PhotoBtnSVG/PhotoBtnSVG";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const [photoName, setPhotoName] = useState("");
  const [photoLocetion, setPhotoLocetion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      setLocation(coords);
    })();
  }, []);

  useEffect(() => {
    if (photo && photoName && photoLocetion) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [photo, photoName, photoLocetion]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    const pic = await cameraRef.takePictureAsync();
    setPhoto(pic.uri);
    console.log("====================================");
    console.log(pic.uri);
    console.log("====================================");
  };

  const publicPost = () => {
    console.log(location);
    navigation.navigate("PostsScreen", {
      id: 4,
      img: photo,
      location: location,
      title: photoName,
      comentsCount: 0,
      locationName: photoLocetion,
    });
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
        <Camera style={createPostStyles.camera} ref={setCameraRef}>
          {photo ? (
            <View style={createPostStyles.cameraIMG}>
              <Image sorce={{ uri: photo }} />
            </View>
          ) : (
            <TouchableOpacity
              style={createPostStyles.buttonPhoto}
              onPress={takePhoto}
            >
              <PhotoBtnSVG />
            </TouchableOpacity>
          )}
        </Camera>
        <Text style={createPostStyles.photoText}>
          {photo ? "Редагувати фото" : "Завантажте фото"}
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
            // onPress={isFormValid ? publicPost : null}
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
  buttonPhoto: {
    width: 60,
    height: 60,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    borderRadius: 8,
  },
  camera: {
    position: "relative",
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
  },
  cameraIMG: {
    position: "absolute",
    zIndex: 10,
    width: 200,
    height: 200,
    backgroundColor: "#F6F6F6",
  },
});
