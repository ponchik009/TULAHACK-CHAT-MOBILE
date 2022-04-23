import "react-native-gesture-handler";
import React, { RefObject } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image,
    TextInput,
    ScrollView,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import LeftSideBar from "../../components/SideBar/LeftSideBar";
import RightSideBar from "../../components/SideBar/RightSideBar";
import { TouchableHighlight } from "react-native-gesture-handler";
import Message from "../../components/Message";
import { useInput } from "../../hooks/useInput";

export interface AppBarProps {
    sideBarRef: RefObject<Swipeable>
}

const AppBar: React.FC<AppBarProps> = ({ sideBarRef }: any) => {
    return (
        <View style={styles.appBar}>
            <TouchableHighlight
                style={styles.appBar__menu}
                onPress={() => {
                    sideBarRef.current?.openLeft();
                }}
            >
                <View>
                    <Image
                        source={require("../../assets/icons/icons8-меню-24.png")}
                        style={styles.buttonImageIconStyle}
                    />
                </View>
            </TouchableHighlight>
            <Text style={styles.chatName}>Название чата</Text>
            <TouchableHighlight onPress={() => { }}>
                <View>
                    <Image
                        source={require("../../assets/icons/icons8-поиск.png")}
                        style={styles.buttonImageIconStyle}
                    />
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => {
                    sideBarRef.current?.openRight();
                }}
            >
                <View>
                    <Image
                        source={require("../../assets/icons/group-profile-users_icon-icons.com_73540.png")}
                        style={styles.buttonImageIconStyle}
                    />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { }}>
                <View>
                    <Image
                        source={require("../../assets/icons/3844442-dot-menu-more-vertical_110310.png")}
                        style={styles.buttonImageIconStyle}
                    />
                </View>
            </TouchableHighlight>
        </View>
    )
}

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

export default AppBar