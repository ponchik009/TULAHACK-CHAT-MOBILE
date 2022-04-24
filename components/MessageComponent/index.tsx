import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, IconButton } from "react-native-paper";
import User from "../../types/User";

interface MessageProps {
  message: string;
  sender: User
}

const Message: React.FC<MessageProps> = ({ message, sender }) => {
  return (
    <View style={styles.message}>
      <View>
        <IconButton
          icon="account"
          color={Colors.white}
          size={20}
          onPress={() => { }}
        />
      </View>
      <View style={styles.message__content}>
        <View style={styles.message__meta}>
          <Text style={styles.message__username}>{sender.name}</Text>
          <Text style={styles.message__date}>Вчера, 16:55</Text>
        </View>
        <Text style={styles.message__data}>
          {message}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    flexDirection: "row",
    marginBottom: 10,
  },
  message__content: {
    flexDirection: "column",
  },
  message__meta: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  message__userAvatar: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  message__data: {
    color: "#fff",
  },
  message__username: {
    fontWeight: "700",
    marginRight: 10,
    color: "#fff",
  },
  message__date: {
    color: "#777",
  }
});

export default Message;
