import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from "react-native";

import ChannelList from "../Lists/ChannelList";
import { IChannel } from "../../types/entities";
import ChatList from "../Lists/ChatList";
import LeftMenu from "../../pages/MainPage/LeftMenu/LeftMenu";

const width = Dimensions.get("window").width; //full width

interface IProps {}

const LeftSideBar: React.FC<IProps> = () => {
  // const [channels, setChannels] = React.useState<IChannel[]>([
  //   {
  //     id: 0,
  //     name: "name 0",
  //     image: require(`../../assets/ls_channel_logo.png`),
  //   },
  //   {
  //     id: 1,
  //     name: "name 1",
  //     image: require(`../../assets/channel_logo.png`),
  //   },
  //   {
  //     id: 2,
  //     name: "name 2",
  //     image: require(`../../assets/channel_logo.png`),
  //   },
  //   {
  //     id: 3,
  //     name: "name 3",
  //     image: require(`../../assets/channel_logo.png`),
  //   },
  // ]);

  // const [activeChannel, setActiveChannel] = React.useState<number>(0);

  // const handleClickChannel = (id: number) => {
  //   setActiveChannel(id);
  // };

  return (
    // <View
    //   style={{
    //     flexDirection: "row",
    //     width: (width * 2) / 2.5,
    //   }}
    // >
    //   <View style={{ backgroundColor: "#1C1E1F" }}>
    //     {/* <ChannelList
    //       channels={channels}
    //       activeItem={activeChannel}
    //       handleClickChannel={handleClickChannel}
    //     /> */}
    //   </View>
    //   <View style={{ backgroundColor: "#181A1B", flex: 1 }}>
    //     <ChatList channelId={1} />
    //   </View>
    // </View>
    <LeftMenu />
  );
};

export default LeftSideBar;
