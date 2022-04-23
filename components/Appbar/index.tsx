import "react-native-gesture-handler";
import React, { RefObject } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableHighlight } from "react-native-gesture-handler";

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
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
    },
});

export default AppBar