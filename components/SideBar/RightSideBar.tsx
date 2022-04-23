import "react-native-gesture-handler";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  Image,
  Button,
} from "react-native";

const width = Dimensions.get("window").width; //full width

const RightSideBar = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.content}>
        <Text style={styles.header}>Название чата</Text>
        <View style={styles.buttons}>
          <TouchableHighlight onPress={() => { }}>
            <View>
              <Image
                source={require("../../assets/icons/icons8-поиск.svg")}
                style={styles.buttonImageIconStyle}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { }}>
            <View>
              <Image
                source={require("../../assets/icons/icons8-поиск.svg")}
                style={styles.buttonImageIconStyle}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { }}>
            <View>
              <Image
                source={require("../../assets/icons/icons8-поиск.svg")}
                style={styles.buttonImageIconStyle}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { }}>
            <View>
              <Image
                source={require("../../assets/icons/icons8-поиск.svg")}
                style={styles.buttonImageIconStyle}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <Button
            onPress={() => console.log("invite")}

            title="Пригласить участников"
          />
        </View>
        <Text style={styles.users__header}>В сети</Text>
        <View style={styles.users}>
          <View style={styles.user}>
            <TouchableHighlight onPress={() => { }}>
              <View>
                <Image
                  source={require("../../assets/icons/round-account-button-with-user-inside_icon-icons.com_72596.png")}
                  style={styles.buttonImageIconStyle}
                />
              </View>
            </TouchableHighlight>
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
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  constainer: {
    backgroundColor: "#181A1B",
    flexDirection: "row",
    width: (width * 2) / 3,
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
export default RightSideBar;
