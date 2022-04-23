import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import Swipeable from "react-native-gesture-handler/Swipeable";
import LeftSideBar from "./components/SideBar/LeftSideBar";
import RightSideBar from "./components/SideBar/RightSideBar";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

// const swipeFromLeftOpen = () => {
//   alert("Swipe from left");
// };
// const swipeFromRightOpen = () => {
//   alert("Swipe from right");
// };

const App = () => {
  const [isAuth, setIsAuth] = React.useState(false);

  // зарефакторить в отдельный хук?
  const handleAuthPageOpen = () => {
    setIsAuth(false);
  };
  const handleMainPageOpen = () => {
    setIsAuth(true);
  };

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.wrapper}>
        {isAuth ? (
          <MainPage handleAuthPageOpen={handleAuthPageOpen} />
        ) : (
          <AuthPage handleMainPageOpen={handleMainPageOpen} />
        )}
      </SafeAreaView>
    </>
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
