import React from "react";
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Button, Colors, IconButton, Modal, Portal } from "react-native-paper";
import Channel from "../../types/Channel";

interface IChannelListProps {
  navigation: { navigate: (name: string) => void }
  channels: Channel[];
  selectedChannel: Channel | null;
  handleClickChannel: (selectedChannel: Channel | null) => void;
}

const ChannelList: React.FC<IChannelListProps> = ({
  navigation,
  channels,
  selectedChannel,
  handleClickChannel,
}) => {

  const renderItem: ListRenderItem<Channel> = ({
    item,
  }: {
    item: Channel;
  }) => (<IconButton
    icon="camera"
    style={[selectedChannel?.id === item.id && styles.selectedChannel, styles.channel]}
    color={Colors.white}
    size={50}
    onPress={() => { handleClickChannel(item) }}
  />
  );
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleClickCreateChannel = () => {
    navigation.navigate('CreateChannel')
    hideModal()
  }
  const handleClickFindChannel = () => {
    navigation.navigate('FindChannel')
    hideModal()
  }

  return (
    <>
      <IconButton
        icon="camera-account"
        style={[!selectedChannel && styles.selectedChannel, styles.channel]}
        color={Colors.white}
        size={50}
        onPress={() => { handleClickChannel(null) }}
      />
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
