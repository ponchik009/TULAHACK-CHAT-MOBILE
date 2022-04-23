import React from "react";
import { Button, Text, TextInput, View } from "react-native";
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
}

const RegisterBox: React.FC<IRegisterBoxProps> = ({
  handleChangePress,
  handleRegisterPress,
}) => {
  const login = useInput("");
  const password = useInput("");
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
        value={password.value}
        onChangeText={password.onChange}
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
        title="Зарегистрироваться"
        onPress={() =>
          handleRegisterPress(
            login.value,
            username.value,
            aboutMe.value,
            password.value,
            confirmPassword.value
          )
        }
      />
      <View style={styles.bottomBlock}>
        <Text style={styles.defaultText}>Уже есть аккаунт?</Text>
        <Button title="Войти" onPress={handleChangePress} />
      </View>
    </>
  );
};

export default RegisterBox;
