import "react-native-gesture-handler";
import React from "react";
import { ScrollView } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import LeftSideBar from "../../components/SideBar/LeftSideBar";
import RightSideBar from "../../components/SideBar/RightSideBar";
import Message from "../../components/Message";
import { useInput } from "../../hooks/useInput";
import AppBar from "../../components/Appbar";
import BottomBar from "../../components/BottomBar";
import { SafeAreaView } from "react-native-safe-area-context";
import RightMenu from "./RightMenu/RightMenu";
import { View } from "native-base";

interface IMainProps {
  handleAuthPageOpen: () => void;
}

export let navigateKostil: any = undefined;

const MainPage: React.FC<IMainProps> = ({ navigation }: any) => {
  navigateKostil = navigation;

  const sideBarRef = React.useRef<Swipeable>(null);
  const message = useInput("");

  return (
    <Swipeable
      renderRightActions={RightSideBar}
      renderLeftActions={LeftSideBar}
      overshootLeft={false}
      overshootRight={false}
      onSwipeableOpen={(direction) => console.log(direction)}
      ref={sideBarRef}
      containerStyle={{
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#fff",
      }}
      childrenContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <AppBar sideBarRef={sideBarRef} />
        <ScrollView
          contentContainerStyle={{ flex: 1, flexGrow: 12 }}
          style={{ flex: 1, backgroundColor: "#303030" }}
        >
          <Message />
          <Message />
        </ScrollView>
        <BottomBar message={message} />
      </View>
    </Swipeable>
  );
};
export default MainPage;
