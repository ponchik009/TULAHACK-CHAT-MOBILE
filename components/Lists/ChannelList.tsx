import React from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  View,
  Text,

  Alert,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Colors, IconButton, Modal, Portal } from "react-native-paper";
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
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  const handleClickCreateChannel = () => {
    navigateKostil.navigate('CreateChannel')
    hideModal()
  }
  const handleClickFindChannel = () => {
    navigateKostil.navigate('FindChannel')
    hideModal()
  }
  return (
    <>
      <FlatList
        data={channels}
        keyExtractor={(channel) => String(channel.id)}
        renderItem={renderItem}
        style={{ paddingVertical: 10 }}
      />
      <Portal>
        <Modal visible={visible} dismissable onDismiss={hideModal} contentContainerStyle={styles.centeredView}>
          <View style={styles.modalView}>
            <Button style={styles.button} color="#333" mode="contained" onPress={() => handleClickCreateChannel()}>
              <Text style={styles.textStyle}>Создать канал</Text>
            </Button>
            <Button style={styles.button} color="#333" mode="contained" onPress={() => handleClickFindChannel()}>
              <Text style={styles.textStyle}>Присоединиться к каналу</Text>
            </Button>
          </View>

        </Modal>
      </Portal>
      <IconButton
        icon="plus-circle"
        color={Colors.white}
        size={50}
        onPress={() => { showModal() }}
      />

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
  centeredView: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "flex-end",
  },
  modalView: {
    flex: 1,

    flexDirection: 'column',
    margin: 20,
    backgroundColor: "transparent",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    marginBottom: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default ChannelList;
