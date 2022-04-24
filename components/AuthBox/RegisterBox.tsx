import React from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useInput } from "../../hooks/useInput";
import { styles } from "./styles";

interface IRegisterBoxProps {
  handleChangePress: () => void;
  handleRegisterPress: (
    login: string,
    username: string,
    aboutMe: string,
    password: string,
    confirmPassword: string
  ) => void;
  passwordInput: {
    value: string;
    onChange: (text: string) => void;
  }
}

const RegisterBox: React.FC<IRegisterBoxProps> = ({
  handleChangePress,
  handleRegisterPress,
  passwordInput
}) => {
  const login = useInput("");

  const confirmPassword = useInput("");
  const username = useInput("");
  const aboutMe = useInput("");

  return (
    <>
      <Text style={styles.defaultText}>Регистрация</Text>
      <TextInput
        style={styles.input}
        placeholder="Логин"
        textContentType="nickname"
        value={login.value}
        onChangeText={login.onChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Имя"
        textContentType="name"
        value={username.value}
        onChangeText={username.onChange}
      />
      <TextInput
        style={styles.input}
        placeholder="О себе"
        textContentType="none"
        value={aboutMe.value}
        onChangeText={aboutMe.onChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry
        textContentType="password"
        value={passwordInput.value}
        onChangeText={passwordInput.onChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Подтверждение пароля"
        secureTextEntry
        textContentType="password"
        value={confirmPassword.value}
        onChangeText={confirmPassword.onChange}
      />
      <Button
        onPress={() =>
          handleRegisterPress(
            login.value,
            username.value,
            aboutMe.value,
            passwordInput.value,
            confirmPassword.value
          )
        }
      >
        <Text>Зарегистрироваться</Text>
      </Button>
      <View style={styles.bottomBlock}>
        <Text style={styles.defaultText}>Уже есть аккаунт?</Text>
        <Button onPress={handleChangePress}>
          <Text>Войти</Text>
        </Button>
      </View>
    </>
  );
};

export default RegisterBox;
