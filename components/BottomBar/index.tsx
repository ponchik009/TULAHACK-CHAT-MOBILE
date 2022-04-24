import "react-native-gesture-handler";
import React from "react";
import {
    StyleSheet,
    View,
    TextInput,
} from "react-native";
import stompClient from "../../api/websocket";
import { Colors, IconButton } from "react-native-paper";
import { getToken } from "../../api/token";

export interface BottomBarProps {
    message: {
        value: string;
        onChange: (text: string) => void;
    };
    send: () => {}
}

const BottomBar: React.FC<BottomBarProps> = ({ message, send }) => {
    return (
        <View style={styles.bottomBar}>
            <IconButton
                icon="camera"
                color={Colors.white}
                size={20}
                onPress={() => { }}
            />
            <IconButton
                icon="image-plus"
                color={Colors.white}
                size={20}
                onPress={() => { }}
            />

            <TextInput
                placeholder="Написать"
                style={styles.input}
                value={message.value}
                onChangeText={message.onChange}
            />
            <IconButton
                icon="send"
                color={Colors.white}
                size={20}
                onPress={() => { send() }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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

export default BottomBar;
