import "react-native-gesture-handler";
import React from "react";
import { ScrollView } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Message from "../../components/Message";
import { useInput } from "../../hooks/useInput";
import AppBar from "../../components/Appbar";
import BottomBar from "../../components/BottomBar";
import { View } from "native-base";
import Chat from "../../types/Chat";
import LeftMenu from "./LeftMenu/LeftMenu";
import RightMenu from "./RightMenu/RightMenu";

interface IMainProps {
  handleAuthPageOpen: () => void;
  navigation: { navigate: (name: string) => void }
}

const MainPage: React.FC<IMainProps> = ({ navigation }) => {
  const sideBarRef = React.useRef<Swipeable>(null);
  const message = useInput("");
  const [messages, setMessages] = React.useState<any>([])
  const [activeChat, setActiveChat] = React.useState<Chat | null>(null);

  return (
    <Swipeable
      renderRightActions={() => <RightMenu navigation={navigation} />}
      renderLeftActions={() => <LeftMenu navigation={navigation} activeChat={activeChat} setActiveChat={setActiveChat} />}
      overshootLeft={false}
      overshootRight={false}
      onSwipeableOpen={(direction) => { }}
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
          {messages.map(() => {
            return <Message />
          })}

          <Message />
        </ScrollView>
        <BottomBar message={message} />
      </View>
    </Swipeable>
  );
};
export default MainPage;
