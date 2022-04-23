import React from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  View,
  Text,
  Modal,
  Alert,
  Pressable,
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
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <FlatList
        data={channels}
        keyExtractor={(channel) => String(channel.id)}
        renderItem={renderItem}
        style={{ paddingVertical: 10 }}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable style={styles.centeredView} onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button]}
              onPress={() => { navigateKostil.navigate('CreateChannel'); setModalVisible(!modalVisible) }}
            >
              <Text style={styles.textStyle}>Создать канал</Text>
            </Pressable>

            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Присоединиться к каналу</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
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
        onPress={() => setModalVisible(true)}
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
  centeredView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
    flex: 1,
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
    backgroundColor: '#333',
    borderRadius: 2,
    marginBottom: 5,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default ChannelList;
