import React from "react";
import { FlatList, Image, ListRenderItem, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { IChannel } from "../../types/entities";

const ChannelList = () => {
  const [channels, setChannels] = React.useState<IChannel[]>([
    {
      id: 0,
      name: "name 0",
      image: require(`../../assets/ls_channel_logo.png`),
    },
    {
      id: 1,
      name: "name 1",
      image: require(`../../assets/channel_logo.png`),
    },
    {
      id: 2,
      name: "name 2",
      image: require(`../../assets/channel_logo.png`),
    },
    {
      id: 3,
      name: "name 3",
      image: require(`../../assets/channel_logo.png`),
    },
  ]);

  const [activeItem, setActiveItem] = React.useState(1);

  const handleClickChannel = (id: number) => {
    setActiveItem(id);
  };

  const renderItem: ListRenderItem<IChannel> = ({
    item,
  }: {
    item: IChannel;
  }) => (
    <TouchableOpacity
      style={[activeItem === item.id && styles.selectedChannel, styles.channel]}
      onPress={() => handleClickChannel(item.id)}
    >
      <Image
        source={item.image}
        style={{ borderRadius: 50, width: 71, height: 71 }}
      />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={channels}
      keyExtractor={(channel) => String(channel.id)}
      renderItem={renderItem}
      style={{ paddingVertical: 10 }}
    />
  );
};

const styles = StyleSheet.create({
  channel: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  selectedChannel: {
    backgroundColor: "#27292E",
  },
});

export default ChannelList;
