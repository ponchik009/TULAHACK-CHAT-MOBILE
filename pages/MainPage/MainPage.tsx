import "react-native-gesture-handler";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  Button,
  View,
  Image,
  TextInput,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import LeftSideBar from "../../components/SideBar/LeftSideBar";
import RightSideBar from "../../components/SideBar/RightSideBar";
import { TouchableHighlight } from "react-native-gesture-handler";
import Message from "../../components/Message";

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

  const sideBarRef = React.useRef<Swipeable>(null);

  return (
    <Swipeable
      renderLeftActions={LeftSideBar}
      renderRightActions={RightSideBar}
      overshootLeft={false}
      overshootRight={false}
      ref={sideBarRef}
      // onSwipeableRightOpen={swipeFromRightOpen}
      // onSwipeableLeftOpen={swipeFromLeftOpen}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.appBar}>
          <TouchableHighlight
            style={styles.appBar__menu}
            onPress={() => {
              sideBarRef.current?.openLeft();
            }}
          >
            <View>
              <Image
                source={require("../../assets/icons/icons8-меню-24.svg")}
                style={styles.buttonImageIconStyle}
              />
            </View>
          </TouchableHighlight>
          <Text style={styles.chatName}>Название чата</Text>
          <TouchableHighlight onPress={() => {}}>
            <View>
              <Image
                source={require("../../assets/icons/icons8-поиск.svg")}
                style={styles.buttonImageIconStyle}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {}}>
            <View>
              <Image
                source={require("../../assets/icons/group-profile-users_icon-icons.com_73540.svg")}
                style={styles.buttonImageIconStyle}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {}}>
            <View>
              <Image
                source={require("../../assets/icons/3844442-dot-menu-more-vertical_110310.svg")}
                style={styles.buttonImageIconStyle}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 1, backgroundColor: "#303030" }}>
          <Message />
        </View>
        <View style={styles.bottomBar}>
          <TouchableHighlight onPress={() => {}}>
            <View>
              <Image
                source={require("../../assets/icons/photo-camera-black-tool_icon-icons.com_72960.svg")}
                style={styles.buttonImageIconStyle}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {}}>
            <View>
              <Image
                source={require("../../assets/icons/add_image_icon_215147.svg")}
                style={styles.buttonImageIconStyle}
              />
            </View>
          </TouchableHighlight>
          <TextInput placeholder="Написать" style={styles.input} />
          <TouchableHighlight onPress={() => {}}>
            <View>
              <Image
                source={require("../../assets/icons/-send_90420.svg")}
                style={styles.buttonImageIconStyle}
              />
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    lineHeight: 40,
    color: "#fff",
    borderRadius: 20,
  },
});
export default MainPage;
