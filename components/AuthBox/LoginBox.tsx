import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useInput } from "../../hooks/useInput";
import { styles } from "./styles";

interface ILoginBoxProps {
  handleChangePress: () => void;
  handleLogInPress: (login: string, password: string) => void;
}

const LoginBox: React.FC<ILoginBoxProps> = ({
  handleChangePress,
  handleLogInPress,
}) => {
  const login = useInput("");
  const password = useInput("");

  return (
    <>
      <Text style={styles.defaultText}>Вход</Text>
      <TextInput
        style={styles.input}
        placeholder="Логин"
        textContentType="nickname"
        value={login.value}
        onChangeText={login.onChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry
        textContentType="password"
        value={password.value}
        onChangeText={password.onChange}
      />
      <Button
        title="Войти"
        onPress={() => handleLogInPress(login.value, password.value)}
      />
      <View style={styles.bottomBlock}>
        <Text style={styles.defaultText}>Еще нет аккаунта?</Text>
        <Button title="Регистрация" onPress={handleChangePress} />
      </View>
    </>
  );
};

export default LoginBox;
