import React from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Colors, IconButton } from "react-native-paper";
import { navigateKostil } from "../../pages/MainPage/MainPage";

import { IChannel, IChat } from "../../types/entities";

interface IChatListProps {
  channel: IChannel;
}

const ChatList: React.FC<IChatListProps> = ({ channel }) => {
  const [chats, setChats] = React.useState<IChat[]>([
    {
      id: 0,
      name: "name 0",
      image: require(`../../assets/chat_logo.png`),
    },
    {
      id: 1,
      name: "name 1",
      image: require(`../../assets/chat_logo.png`),
    },
    {
      id: 2,
      name: "name 2",
      image: require(`../../assets/chat_logo.png`),
    },
    {
      id: 3,
      name: "name 3",
      image: require(`../../assets/chat_logo.png`),
    },
  ]);

  const [activeChat, setActiveChat] = React.useState(chats[0].id);

  const handleClickChat = (id: number) => {
    setActiveChat(id);
  };

  const renderItem: ListRenderItem<IChannel> = ({ item }: { item: IChat }) => (
    <TouchableOpacity
      style={[activeChat === item.id && styles.selectedChat, styles.chat]}
      onPress={() => handleClickChat(item.id)}
    >
      <Image
        source={item.image}
        style={{ borderRadius: 50, width: 40, height: 40 }}
      />
      <View style={{ marginLeft: 5 }}>
        <Text style={{ fontSize: 16, color: "#fff" }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: "#BABABA" }}>
          Ник: последнее сообщение
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Text style={{ marginTop: 10, fontSize: 18, color: "#fff" }}>
        {channel.name}
      </Text>
      <FlatList
        data={chats}
        keyExtractor={(channel) => String(channel.id)}
        renderItem={renderItem}
        style={{ paddingVertical: 10, marginTop: 10 }}
      />
      <Button icon="plus-circle" mode="text" contentStyle={styles.btn} style={styles.btn} color="white" onPress={() => navigateKostil.navigate('CreateChat')}>
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
