import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Button } from "react-native-paper";
import { Colors, IconButton } from "react-native-paper";

interface RightMenuProps {
  navigation: { navigate: (name: string) => void }
}

const RightMenu: React.FC<RightMenuProps> = ({ navigation }) => {
  const handleInviteUsers = () => {
    navigation.navigate("InviteUsers");
  };
  return (
    <View style={styles.constainer}>
      <View style={styles.content}>
        <Text style={styles.header}>Название чата</Text>
        <View style={styles.buttons}>
          <IconButton
            icon="magnify"
            color={Colors.white}
            size={20}
            onPress={() => { }}
          />
          <IconButton
            icon="pin"
            color={Colors.white}
            size={20}
            onPress={() => { }}
          />
          <IconButton
            icon="bell"
            color={Colors.white}
            size={20}
            onPress={() => { }}
          />
          <IconButton
            icon="cog"
            color={Colors.white}
            size={20}
            onPress={() => { }}
          />
        </View>
        <View>
          <Button
            icon="account-plus"
            mode="text"
            color="white"
            onPress={() => handleInviteUsers()}
          >
            Пригласить участников
          </Button>
        </View>
        <Text style={styles.users__header}>В сети</Text>
        <View style={styles.users}>
          <View style={styles.user}>
            <IconButton
              icon="account"
              color={Colors.white}
              size={20}
              onPress={() => { }}
            />
            <Text style={styles.username}>CoolSheff</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  users__header: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    color: "#fff",
    opacity: 0.5,
  },
  username: {
    marginLeft: 10,
    color: "#fff",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  users: {
    flexDirection: "column",
  },
  constainer: {
    backgroundColor: "#181A1B",
    flexDirection: 'column',
    width: 300,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default RightMenu;
