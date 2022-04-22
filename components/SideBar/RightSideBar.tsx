import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import Swipeable from "react-native-gesture-handler/Swipeable";

const width = Dimensions.get("window").width; //full width

const RightSideBar = () => {
  return (
    <View
      style={{
        backgroundColor: "#181A1B",
        flexDirection: "row",
        width: (width * 2) / 3,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text>Список участников</Text>
      </View>
    </View>
  );
};

export default RightSideBar;
