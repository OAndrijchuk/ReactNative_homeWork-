import React, { useEffect, useState } from "react";
import { styles } from "../RegistrationScreen/RegistrationScreen";
import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  // const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     "keyboardDidShow",
  //     handleKeyboardDidShow
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     "keyboardDidHide",
  //     handleKeyboardDidHide
  //   );

  //   return () => {
  //     keyboardDidShowListener.remove();
  //     keyboardDidHideListener.remove();
  //   };
  // }, []);

  // const handleKeyboardDidShow = () => {
  //   setIsShowKeyboard(true);
  // };

  // const handleKeyboardDidHide = () => {
  //   setIsShowKeyboard(false);
  // };
  const logIn = () => {
    Alert.alert(
      "Credentials",
      `E-mail: ${mail}
Пароль: ${pass}`
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../../picture/bg.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View
            // style={{ ...styles.form, marginBottom: isShowKeyboard ? -250 : 0 }}
            style={styles.form}
          >
            <Text style={{ ...styles.text, marginTop: 32 }}>Увійти</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TextInput
                style={styles.input}
                inputMode="email"
                keyboardType="email-address"
                value={mail}
                onChangeText={setMail}
                placeholder="Адреса електронної пошти"
              />
              <View style={{ position: "relative" }}>
                <TextInput
                  style={{ ...styles.input, paddingRight: 105 }}
                  inputMode="text"
                  secureTextEntry={true}
                  value={pass}
                  onChangeText={setPass}
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
            <TouchableOpacity style={styles.button} onPress={logIn}>
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>
            <Text style={{ ...styles.loginLink, marginBottom: 144 }}>
              Немає акаунту? Зареєструватися
            </Text>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
