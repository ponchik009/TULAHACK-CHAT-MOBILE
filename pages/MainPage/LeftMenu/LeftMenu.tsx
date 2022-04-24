import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ChatList from "../../../components/Lists/ChatList";
import ChannelList from "../../../components/Lists/ChannelList";
import { navigateKostil } from "../MainPage";
import { Colors, IconButton } from "react-native-paper";
import { getChannels } from "../../../api/channel";
import Channel from "../../../types/Channel";
import Chat from "../../../types/Chat";
import { getChatsInChannel } from "../../../api/chat";

const LeftMenu = () => {
  const [channels, setChannels] = React.useState<Channel[]>([]);
  const [chats, setChats] = React.useState<Chat[]>([]);

  const [selectedChannel, setSelectedChannel] = React.useState<Channel | null>(null);

  React.useEffect(() => {
    getChannels().then(channels => {
      console.log(channels);
      setChannels(channels)
    })
  }, [])

  const handleClickChannel = async (selectedChannel: Channel) => {
    setSelectedChannel(selectedChannel);
    const chatsInSelectedChannel = await getChatsInChannel(selectedChannel.id)
    console.log(chatsInSelectedChannel);

    setChats(chatsInSelectedChannel)
  };

  const handleClickUserSettings = () => {
    navigateKostil.navigate('UserSettings')
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.columns} >
        <View style={styles.channels__wrapper}>
          <ChannelList
            channels={channels}
            selectedChannel={selectedChannel}
            handleClickChannel={handleClickChannel}
          />
        </View>
        <View style={styles.chats__wrapper} >
          {
            selectedChannel &&
            <ChatList channel={selectedChannel} chats={chats} />
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
