import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ChatList from "../../../components/Lists/ChatList";
import ChannelList from "../../../components/Lists/ChannelList";

import { Colors, IconButton } from "react-native-paper";
import { getChannels } from "../../../api/channel";
import Channel from "../../../types/Channel";
import Chat from "../../../types/Chat";
import { getChatsInChannel, getPersonalChats } from "../../../api/chat";

interface LeftMenuProps {
  navigation: { navigate: (nae: string) => void },
  activeChat: Chat | null
  setActiveChat: (chat: Chat) => void
}

const LeftMenu: React.FC<LeftMenuProps> = ({ navigation, activeChat, setActiveChat }) => {
  const [channels, setChannels] = React.useState<Channel[]>([]);
  const [chats, setChats] = React.useState<Chat[]>([]);

  const [selectedChannel, setSelectedChannel] = React.useState<Channel | null>(null);


  React.useEffect(() => {
    getChannels().then(channels => {
      console.log(channels);
      setChannels(channels)
    })
  }, [])

  const handleClickChannel = async (selectedChannel: Channel | null) => {
    setSelectedChannel(selectedChannel);
    if (selectedChannel) {
      const chatsInSelectedChannel = await getChatsInChannel(selectedChannel.id)
      console.log(chatsInSelectedChannel);
      setChats(chatsInSelectedChannel)
    } else {
      const personalChats = await getPersonalChats()
      console.log(personalChats);
      setChats(personalChats)
    }
  };

  const handleClickUserSettings = () => {
    navigation.navigate('UserSettings')
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.columns} >
        <View style={styles.channels__wrapper}>
          <ChannelList
            navigation={navigation}
            channels={channels}
            selectedChannel={selectedChannel}
            handleClickChannel={handleClickChannel}
          />
        </View>
        <View style={styles.chats__wrapper} >
          {
            <ChatList channelName={selectedChannel?.name || 'Личные сообщения'} navigation={navigation} chats={chats} activeChat={activeChat} setActiveChat={setActiveChat} />
          }
        </View>
      </View>
      <View style={styles.bottomBar}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <IconButton
            icon="account"
            color={Colors.white}
            size={20}
            onPress={() => { }}
          />
          <Text style={styles.username}>CoolSheff</Text>
        </View>

        <IconButton
          icon="cog"
          color={Colors.white}
          size={20}
          onPress={() => { handleClickUserSettings() }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column'
  },
  columns: {
    flex: 1,
    flexDirection: "row",
  },
  username: {
    color: '#fff',
    marginLeft: 10
  },
  channels__wrapper: {
    backgroundColor: "#1C1E1F",
    justifyContent: "flex-start",
  },
  chats__wrapper: {
    flex: 1,
    backgroundColor: "#181A1B",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'stretch',
    width: 300,
  },
  bottomBar: {
    backgroundColor: "#1C1E1F",
    flexDirection: 'row'
  },
  myAvatar: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  }
});

export default LeftMenu;
