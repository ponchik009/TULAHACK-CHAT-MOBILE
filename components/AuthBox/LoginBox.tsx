import React from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
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
        label="Логин"
        textContentType="nickname"
        value={login.value}
        style={styles.input}
        onChangeText={text => login.onChange(text)}
      />
      <TextInput
        label="Пароль"
        textContentType="password"
        secureTextEntry
        style={styles.input}
        value={password.value}
        onChangeText={password.onChange}
      />
      <Button mode="contained" style={styles.input} onPress={() => handleLogInPress(login.value, password.value)}>
        <Text>
          Войти
        </Text>
      </Button>
      <View style={styles.bottomBlock}>
        <Text style={styles.defaultText}>Еще нет аккаунта?</Text>
        <Button onPress={handleChangePress} >
          <Text>
            Регистрация
          </Text>
        </Button>
      </View>
    </>
  );
};

export default LoginBox;
