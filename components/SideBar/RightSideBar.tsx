import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import { Button } from "react-native-paper";
import { navigateKostil } from "../../pages/MainPage/MainPage";
import { Colors, IconButton } from "react-native-paper";
import RightMenu from "../../pages/MainPage/RightMenu/RightMenu";

const RightSideBar = () => {
  return <RightMenu />;
};

export default RightSideBar;
