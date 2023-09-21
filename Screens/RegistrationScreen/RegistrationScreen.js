import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/styles";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
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
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState("");
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

  const registeretions = () => {
    Alert.alert(
      "Credentials",
      `Логін: ${login}
E-mail: ${mail}
Пароль: ${pass}`
    );
    navigation.navigate("Home");
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
            // style={{ ...styles.form, marginBottom: isShowKeyboard ? -200 : 0 }}
            style={styles.form}
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
                onChangeText={setLogin}
                placeholder="Логін"
              />
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
            <TouchableOpacity style={styles.button} onPress={registeretions}>
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginLink}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

// const screenSize = Dimensions.get("screen");
