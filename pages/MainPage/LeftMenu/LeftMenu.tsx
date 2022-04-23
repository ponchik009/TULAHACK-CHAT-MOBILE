import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { IChannel } from "../../../types/entities";
import ChatList from "../../../components/Lists/ChatList";
import ChannelList from "../../../components/Lists/ChannelList";
import { TouchableHighlight } from "react-native-gesture-handler";
import { navigateKostil } from "../MainPage";

const LeftMenu = () => {
  const [channels, setChannels] = React.useState<IChannel[]>([
    {
      id: 0,
      name: "name 0",
      image: require(`../../../assets/ls_channel_logo.png`),
    },
    {
      id: 1,
      name: "name 1",
      image: require(`../../../assets/channel_logo.png`),
    },
    {
      id: 2,
      name: "name 2",
      image: require(`../../../assets/channel_logo.png`),
    },
    {
      id: 3,
      name: "name 3",
      image: require(`../../../assets/channel_logo.png`),
    },
  ]);

  const [activeChannel, setActiveChannel] = React.useState<number>(0);

  const handleClickChannel = (id: number) => {
    setActiveChannel(id);
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
            activeItem={activeChannel}
            handleClickChannel={handleClickChannel}
          />
        </View>
        <View style={styles.chats__wrapper} >
          <ChatList channel={channels[activeChannel]} />
        </View>
      </View>
      <View style={styles.bottomBar}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableHighlight onPress={() => { }}>
            <View >
              <Image
                source={require("../../../assets/icons/round-account-button-with-user-inside_icon-icons.com_72596.png")}
                style={styles.myAvatar}
              />
            </View>
          </TouchableHighlight>
          <Text style={styles.username}>CoolSheff</Text>
        </View>
        <TouchableHighlight onPress={handleClickUserSettings}>
          <View >
            <Image
              source={require("../../../assets/icons/gear.png")}
              style={styles.myAvatar}
            />
          </View>
        </TouchableHighlight>
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
    backgroundColor: "#181A1B",
    justifyContent: "center",
    alignItems: "center",
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
