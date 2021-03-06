import "react-native-gesture-handler";
import React, { RefObject } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  Menu,
  IconButton,
  Colors,
} from "react-native-paper";
export interface AppBarProps {
  chatName: string
  sideBarRef: RefObject<Swipeable>;
}

const AppBar: React.FC<AppBarProps> = ({ sideBarRef, chatName }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View style={styles.appBar}>
      <IconButton
        icon="menu"
        color={Colors.white}
        size={20}
        onPress={() => {
          sideBarRef.current?.openLeft();
        }}
      />
      <Text style={styles.chatName}>{chatName}</Text>
      <IconButton
        icon="magnify"
        color={Colors.white}
        size={20}
        onPress={() => { }}
      />
      <IconButton
        icon="account-multiple"
        color={Colors.white}
        size={20}
        onPress={() => {
          sideBarRef.current?.openRight();
        }}
      />

      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            icon="dots-vertical"
            color={Colors.white}
            size={20}
            onPress={() => openMenu()}
          />
        }
      >
        <Menu.Item onPress={() => { }} title="Закреплённые сообщения" />
        <Menu.Item onPress={() => { }} title="Параметры канала" />
        <Menu.Item onPress={() => { }} title="Параметры уведомлений" />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    padding: 10,
  },
  appBar__menu: {
    marginRight: 10,
  },
  chatName: {
    flex: 1,
    color: "#fff",
    fontWeight: "500",
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
  },
});

export default AppBar;
