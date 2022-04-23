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
import { navigateKostil } from "../../pages/MainPage/MainPage";

import { IChannel } from "../../types/entities";

interface IChannelListProps {
  channels: IChannel[];
  activeItem: number;
  handleClickChannel: (id: number) => void;
}

const ChannelList: React.FC<IChannelListProps> = ({
  channels,
  activeItem,
  handleClickChannel,
}) => {
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
        style={{ borderRadius: 50, width: 56, height: 56 }}
      />
    </TouchableOpacity>
  );

  return (
    <>
      <FlatList
        data={channels}
        keyExtractor={(channel) => String(channel.id)}
        renderItem={renderItem}
        style={{ paddingVertical: 10 }}
      />
      <TouchableOpacity
        style={{
          borderRadius: 50,
          width: 56,
          height: 56,
          backgroundColor: "#263893",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
          marginLeft: 5,
        }}
        onPress={() => navigateKostil.navigate('CreateChannel')}
      >
        <Text style={{ fontSize: 40, color: "#fff" }}>+</Text>
      </TouchableOpacity>
    </>
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
