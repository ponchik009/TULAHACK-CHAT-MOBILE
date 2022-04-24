import React from "react";
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Colors, IconButton } from "react-native-paper";

import Chat from "../../types/Chat";

interface IChatListProps {
  navigation: { navigate: (nae: string) => void }
  chats: Chat[]
  channelName: string
  activeChat: Chat | null
  setActiveChat: (chat: Chat) => void
}

const ChatList: React.FC<IChatListProps> = ({ channelName, navigation, chats, activeChat, setActiveChat }) => {
  const handleClickChat = (chat: Chat) => {

    setActiveChat(chat);
  };

  const renderItem: ListRenderItem<Chat> = ({ item: chat }: { item: Chat }) => (
    <TouchableOpacity
      style={[activeChat?.id === chat.id && styles.selectedChat, styles.chat]}
      onPress={() => handleClickChat(chat)}
    >
      <IconButton
        icon="camera"
        color={Colors.white}
        size={20}
        onPress={() => { }}
      />
      {/* <Image
        source={item.avatarPath}
        style={{ borderRadius: 50, width: 40, height: 40 }}
      /> */}
      <View style={{ marginLeft: 5 }}>
        <Text style={{ fontSize: 16, color: "#fff" }}>{chat.name}</Text>
        <Text style={{ fontSize: 14, color: "#BABABA" }}>
          Ник: последнее сообщение
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Text style={{ marginTop: 10, fontSize: 18, color: "#fff" }}>
        {channelName}
      </Text>
      <FlatList
        data={chats}
        renderItem={renderItem}
        style={{ paddingVertical: 10, marginTop: 10 }}
      />
      <Button icon="plus-circle" mode="text" contentStyle={styles.btn} style={styles.btn} color="white" onPress={() => navigation.navigate('CreateChat')}>
        Создать чат
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  chat: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: "row",
  },
  btn: {
    fontSize: 100,
    alignSelf: 'stretch'
  },
  selectedChat: {
    backgroundColor: "#27292E",
  },
});

export default ChatList;
