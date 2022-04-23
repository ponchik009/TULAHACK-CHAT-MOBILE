import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from "react-native";
import { IChannel } from "../../../types/entities";
import ChatList from "../../../components/Lists/ChatList";
import ChannelList from "../../../components/Lists/ChannelList";

const width = Dimensions.get("window").width; //full width

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

  return (
    <View
      style={{
        flexDirection: "row",

      }}
    >
      <View
        style={{
          backgroundColor: "#1C1E1F",
          justifyContent: "flex-start",
        }}
      >
        <ChannelList
          channels={channels}
          activeItem={activeChannel}
          handleClickChannel={handleClickChannel}
        />
      </View>
      <View
        style={{
          backgroundColor: "#181A1B",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ChatList channel={channels[activeChannel]} />
      </View>
    </View>
  );
};

export default LeftMenu;
