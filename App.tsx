import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AuthPage from "./pages/AuthPage/AuthPage";

export default function App() {
  const [isAuth, setIsAuth] = React.useState(false);

  return (
    <View style={styles.container}>
      {isAuth ? (
        <View>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      ) : (
        <AuthPage />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161819",
    alignItems: "center",
    justifyContent: "center",
  },
});
