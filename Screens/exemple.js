import { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from "react-native";

export default function RegNew() {
  const [shift, setShift] = useState(false);
  const [position] = useState(new Animated.Value(0));

  useEffect(() => {
    const listenerShow = Keyboard.addListener("keyboardDidShow", () => {
      setShift(true);
    });
    const listenerHide = Keyboard.addListener("keyboardDidHide", () => {
      setShift(false);
    });

    return () => {
      listenerShow.remove();
      listenerHide.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(position, {
      toValue: shift ? 90 : 50,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [shift]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
          source={require("../picture/bg.jpg")}
          style={styles.bg}
          resizeMode="cover"
        />
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          bounces={false}
        >
          <Animated.View
            style={[styles.formWrapper, { paddingBottom: position }]}
          >
            <Image
              source={require("../picture/addBtn.jpg")}
              style={styles.avatar}
            />

            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.inputsContainer}>
              <TextInput style={styles.input} placeholder="First name" />
              <TextInput style={styles.input} placeholder="Email" />
              <TextInput style={styles.input} placeholder="password" />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text>Зареєструватися</Text>
            </TouchableOpacity>
            <Text>Увійти</Text>
          </Animated.View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const screenSize = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    top: 0,
    position: "absolute",
    height: screenSize.height,
    width: screenSize.width,
  },
  avatar: {
    position: "absolute",
    top: -55,
  },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 30 },
  inputsContainer: { gap: 10, width: "100%", padding: 10, marginBottom: 30 },
  input: { padding: 10, borderColor: "gray", borderWidth: 2, borderRadius: 10 },

  scrollViewContainer: {
    minHeight: screenSize.height,
    justifyContent: "flex-end",
  },
  formWrapper: {
    marginTop: 150,
    paddingTop: 65,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  button: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: "orange",
    marginBottom: 15,
  },
});
