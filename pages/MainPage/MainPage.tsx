import "react-native-gesture-handler";
import React from "react";
import { ScrollView } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useInput } from "../../hooks/useInput";
import AppBar from "../../components/Appbar";
import BottomBar from "../../components/BottomBar";
import { View } from "native-base";
import Chat from "../../types/Chat";
import LeftMenu from "./LeftMenu/LeftMenu";
import RightMenu from "./RightMenu/RightMenu";
import stompClient from "../../api/websocket";
import Message from "../../types/Message";
import MessageComponent from "../../components/MessageComponent";
import { getToken } from "../../api/token";

interface IMainProps {
  handleAuthPageOpen: () => void;
  navigation: { navigate: (name: string) => void }
}

const MainPage: React.FC<IMainProps> = ({ navigation }) => {
  const sideBarRef = React.useRef<Swipeable>(null);
  const message = useInput("");
  const [messages, setMessages] = React.useState<Message[]>([])
  const [activeChat, setActiveChat] = React.useState<Chat | null>(null);
  React.useEffect(() => {
    stompClient.subscribe('/topic/chat/' + activeChat?.id, (incomingMsg: any) => {


      const msg: Message = JSON.parse(incomingMsg.body)
      console.log('====================================');
      console.log(msg);
      console.log('====================================');
      setMessages((prev) => [...prev, msg]);
    });
  }, [activeChat])

  const send = async () => {
    stompClient.send('/api/chat/' + activeChat?.id, {}, JSON.stringify({ text: message.value, sender: { token: await getToken() } }));
  }

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
          {messages.map((message) => {
            return <MessageComponent key={message.id} message={message.text} sender={message.sender} />
          })}
        </ScrollView>
        <BottomBar message={message} send={send} />
      </View>
    </Swipeable>
  );
};
export default MainPage;
