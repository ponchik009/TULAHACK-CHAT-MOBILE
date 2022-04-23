import "react-native-gesture-handler";
import React from "react";
import {
    StyleSheet,
    View,
    Image,
    TextInput,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export interface BottomBarProps {
    message: {
        value: string;
        onChange: (text: string) => void;
    };
}

const BottomBar: React.FC<BottomBarProps> = ({ message }) => {
    return (
        <View style={styles.bottomBar}>
            <TouchableHighlight onPress={() => { }}>
                <View>
                    <Image
                        source={require("../../assets/icons/photo-camera-black-tool_icon-icons.com_72960.png")}
                        style={styles.buttonImageIconStyle}
                    />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { }}>
                <View>
                    <Image
                        source={require("../../assets/icons/add_image_icon_215147.png")}
                        style={styles.buttonImageIconStyle}
                    />
                </View>
            </TouchableHighlight>
            <TextInput
                placeholder="Написать"
                style={styles.input}
                value={message.value}
                onChangeText={message.onChange}
            />
            <TouchableHighlight onPress={() => { }}>
                <View>
                    <Image
                        source={require("../../assets/icons/send_90420.png")}
                        style={styles.buttonImageIconStyle}
                    />
                </View>
            </TouchableHighlight>
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

export default BottomBar