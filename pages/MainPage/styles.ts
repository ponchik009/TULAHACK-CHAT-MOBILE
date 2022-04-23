import { StyleSheet } from "react-native";

export const createStyles = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#181A1B",
      width: width,
      height: height - 100,
    },
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

    bottomBar: {
      width: "100%",
      flexDirection: "row",
      backgroundColor: "#303030",
      alignItems: "center",
      padding: 10,
    },
    buttonImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
    },
    input: {
      flex: 1,
      fontSize: 30,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: "#fff",
      backgroundColor: "#161819",
      borderRadius: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
