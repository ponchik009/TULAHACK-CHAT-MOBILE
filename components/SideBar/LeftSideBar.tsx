import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import Swipeable from "react-native-gesture-handler/Swipeable";

const width = Dimensions.get("window").width; //full width

const LeftSideBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: (width * 2) / 2.5,
      }}
    >
      <View style={{ backgroundColor: "#1C1E1F" }}>
        <Text>Список каналов</Text>
      </View>
      <View style={{ backgroundColor: "#181A1B", flex: 1 }}>
        <Text>Список чатоsdfsggdgegв</Text>
      </View>
    </View>
  );
};

export default LeftSideBar;
