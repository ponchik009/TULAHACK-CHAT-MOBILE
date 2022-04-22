import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function AuthPage() {
  return (
    <>
      <View style={styles.logo}>
        <Image source={require(`../../assets/logo.png`)} />
        <Text style={styles.logoText}>Chat</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.defaultText}>Вход</Text>
        <TextInput
          style={styles.input}
          placeholder="Логин"
          textContentType="nickname"
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry
          textContentType="password"
        />
        <View style={styles.registerBlock}>
          <Text style={styles.defaultText}>Don't have an account?</Text>
          <Button title="Register" onPress={() => {}} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  main: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  registerBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 30,
    color: "#fff",
  },
  defaultText: {
    fontSize: 20,
    color: "#fff",
  },
  input: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    width: "80%",
    fontSize: 20,
    padding: 10,
    paddingBottom: 5,
    marginVertical: 10,
    backgroundColor: "#99c",
    textAlign: "center",
  },
});
