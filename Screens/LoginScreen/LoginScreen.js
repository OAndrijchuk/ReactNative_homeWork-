import React, { useEffect, useState } from "react";
import { styles } from "../RegistrationScreen/RegistrationScreen";
import {
  Image,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
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
          style={{ ...styles.form, marginBottom: isShowKeyboard ? -250 : 0 }}
        >
          <Text style={{ ...styles.text, marginTop: 32 }}>Увійти</Text>
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <Text style={{ ...styles.loginLink, marginBottom: 144 }}>
            Немає акаунту? Зареєструватися
          </Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default LoginScreen;
