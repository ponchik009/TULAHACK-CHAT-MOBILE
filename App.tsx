import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import { Provider } from "react-native-paper";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CreateChat from "./pages/CreateChat/Index";
import CreateChannel from "./pages/CreateChannel/Index";
import UserSettings from "./pages/UserSettings";
import InviteUsers from "./pages/InviteUsers";
import FindChannel from "./pages/FindChannel";
import stompClient from "./api/websocket";
import { getToken } from "./api/token";

const Stack = createStackNavigator();

const App = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  const handleMainPageOpen = () => {
    setIsAuth(true);
  };

  return (
    <Provider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#303030" }}>
        {/* <GlobalProvider> */}
        {isAuth ? (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={MainPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={AuthPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="CreateChat" component={CreateChat} />
              <Stack.Screen name="CreateChannel" component={CreateChannel} />
              <Stack.Screen name="FindChannel" component={FindChannel} />
              <Stack.Screen name="InviteUsers" component={InviteUsers} />
              <Stack.Screen name="UserSettings">
                {(props) => <UserSettings {...props} setIsAuth={setIsAuth} />}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        ) : (
          <View style={styles.wrapper}>
            <AuthPage handleMainPageOpen={handleMainPageOpen} />
          </View>
        )}
        {/* </GlobalProvider> */}
      </SafeAreaView>
    </Provider>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#161819",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
export default App;
