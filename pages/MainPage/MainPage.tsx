import "react-native-gesture-handler";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import LeftSideBar from "../../components/SideBar/LeftSideBar";
import RightSideBar from "../../components/SideBar/RightSideBar";
import { TouchableHighlight } from "react-native-gesture-handler";
import Message from "../../components/Message";
import { useInput } from "../../hooks/useInput";
import AppBar from "../../components/Appbar";
import BottomBar from "../../components/BottomBar";

const width = Dimensions.get("window").width; //full width
const height = Dimensions.get("window").height; //full height

interface IMainProps {
  handleAuthPageOpen: () => void;
}

export let navigateKostil: any = undefined

const MainPage: React.FC<IMainProps> = ({ navigation }: any) => {
  navigateKostil = navigation
  const handleLogOut = () => {

  };

  const sideBarRef = React.useRef<Swipeable>(null);

  const message = useInput("");

  return (
    <Swipeable
      renderLeftActions={LeftSideBar}
      renderRightActions={RightSideBar}
      overshootLeft={false}
      overshootRight={false}
      ref={sideBarRef}
    >
      <SafeAreaView style={styles.container}>
        <AppBar sideBarRef={sideBarRef} />
        <ScrollView style={{ flex: 1, backgroundColor: "#303030" }}>
          <Message />
          <Message />
        </ScrollView>
        <BottomBar message={message} />
      </SafeAreaView>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181A1B",
    width: width,
    height: height - 100,
  },
  appBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    padding: 10,
  },
  appBar__menu: {
    marginRight: 10,
  },

  chatName: {
    flex: 1,
    color: "#fff",
    fontWeight: "500",
  },

  bottomBar: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#303030",
    alignItems: "center",
    padding: 10,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
  },
  input: {
    flex: 1,
    fontSize: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#fff",
    backgroundColor: "#161819",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MainPage;
