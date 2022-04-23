import "react-native-gesture-handler";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  Button,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import LeftSideBar from "../../components/SideBar/LeftSideBar";
import RightSideBar from "../../components/SideBar/RightSideBar";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

// const swipeFromLeftOpen = () => {
//   alert("Swipe from left");
// };
// const swipeFromRightOpen = () => {
//   alert("Swipe from right");
// };

interface IMainProps {
  handleAuthPageOpen: () => void;
}

const MainPage: React.FC<IMainProps> = ({ handleAuthPageOpen }) => {
  const handleLogOut = () => {
    // какие-то действия
    handleAuthPageOpen();
  };

  return (
    <Swipeable
      renderLeftActions={LeftSideBar}
      renderRightActions={RightSideBar}
      // onSwipeableRightOpen={swipeFromRightOpen}
      // onSwipeableLeftOpen={swipeFromLeftOpen}
    >
      <SafeAreaView style={styles.container}>
        <Text>Основная страница</Text>
        <Button title="Выйти" onPress={handleLogOut} />
      </SafeAreaView>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161819",
    width: width,
    height: height - 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MainPage;
