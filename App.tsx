import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Dimensions, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import { NativeBaseProvider } from "native-base";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const App = () => {
  const [isAuth, setIsAuth] = React.useState(true);

  // зарефакторить в отдельный хук?
  const handleAuthPageOpen = () => {
    setIsAuth(false);
  };
  const handleMainPageOpen = () => {
    setIsAuth(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={AuthPage}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#161819",
    justifyContent: "center",
    alignItems: "center",
    width,
    height,
  },
});
export default App;
