import "react-native-gesture-handler";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const Message: React.FC = () => {
    return (
        <View style={styles.message}>
            <View>
                <TouchableHighlight onPress={() => { }}>
                    <View>
                        <Image
                            source={require('../../assets/icons/round-account-button-with-user-inside_icon-icons.com_72596.svg')}
                            style={styles.buttonImageIconStyle}
                        />
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.message__content}>
                <View style={styles.message__meta}>
                    <Text style={styles.message__username}>
                        luxorylife
                    </Text>
                    <Text style={styles.message__date}>
                        Вчера, 16:55
                    </Text>
                </View>
                <Text style={styles.message__data}>
                    Адаптируем под версию в браузере
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    message: {
        flexDirection: 'row',
        marginBottom: 10
    },
    message__content: {
        flexDirection: 'column'
    },
    message__meta: {
        flexDirection: 'row',
        alignItems: "flex-end"
    },
    message__userAvatar: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    message__data: {
        color: "#fff",
    },
    message__username: {
        fontWeight: "700",
        marginRight: 10,
        color: "#fff",
    },
    message__date: {
        color: "#777",
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },

});

export default Message