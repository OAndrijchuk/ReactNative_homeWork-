import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      handleKeyboardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      handleKeyboardDidHide
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleKeyboardDidShow = () => {
    setIsShowKeyboard(true);
  };

  const handleKeyboardDidHide = () => {
    setIsShowKeyboard(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../picture/bg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View
          style={{ ...styles.form, marginBottom: isShowKeyboard ? -200 : 0 }}
        >
          <View style={styles.addPhoto}>
            <Image
              style={styles.addBtn}
              source={require("../../picture/addBtn.jpg")}
            />
          </View>
          <Text style={styles.text}>Реєстрація</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput
              style={styles.input}
              inputMode="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Логін"
            />
            <TextInput
              style={styles.input}
              inputMode="email"
              keyboardType="email-address"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Адреса електронної пошти"
            />
            <View style={{ position: "relative" }}>
              <TextInput
                style={{ ...styles.input, paddingRight: 105 }}
                inputMode="text"
                secureTextEntry={true}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Пароль"
              />
              <Text
                style={{
                  ...styles.loginLink,
                  position: "absolute",
                  right: 16,
                  top: 15,
                }}
              >
                Показати
              </Text>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <Text style={styles.loginLink}>Вже є акаунт? Увійти</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default RegistrationScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    marginTop: 92,
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    color: "#212121",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.3,
  },
  form: {
    position: "relative",
    width: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },
  addPhoto: {
    position: "absolute",
    top: -60,
    left: "50%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    transform: [{ translateX: -60 }],
  },
  addBtn: {
    position: "absolute",
    right: -12.5,
    bottom: 14,
    width: 25,
    height: 25,
    backgroundColor: "#F6F6F6",
    borderRadius: 13,
  },

  input: {
    height: 50,
    padding: 16,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 16,
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
  },
  button: {
    height: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 16,
    paddingTop: 16,
    marginTop: 43,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  loginLink: {
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 78,
  },
});
