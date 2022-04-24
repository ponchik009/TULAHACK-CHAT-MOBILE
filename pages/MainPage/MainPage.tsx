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
import stompClient from "../../api/websocket";
import { getToken } from "../../api/token";

interface IMainProps {
  handleAuthPageOpen: () => void;
}

export let navigateKostil: any = undefined;

const MainPage: React.FC<IMainProps> = ({ navigation }: any) => {
  navigateKostil = navigation;

  const sideBarRef = React.useRef<Swipeable>(null);
  const message = useInput("");
  const [messages, setMessages] = React.useState<any>([])

  return (
    <Swipeable
      renderLeftActions={LeftSideBar}
      renderRightActions={RightSideBar}
      overshootLeft={false}
      overshootRight={false}
      ref={sideBarRef}
      containerStyle={{
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#000",
      }}
      childrenContainerStyle={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <AppBar sideBarRef={sideBarRef} />
        <ScrollView
          contentContainerStyle={{ flex: 1, flexGrow: 12 }}
          style={{ flex: 1, backgroundColor: "#303030" }}
        >
          {messages.map(() => {
            return <Message />
          })}

          <Message />
        </ScrollView>
        <BottomBar message={message} />
      </SafeAreaView>
    </Swipeable>
  );
};
export default MainPage;
