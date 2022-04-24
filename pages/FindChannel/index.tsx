//@ts-nocheck
import React from "react";
import {
    StyleSheet,
    View,
} from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import { findChannel } from "../../api/channel";
import Channel from "../../types/Channel";

const FindChannel = () => {
    const [channelName, setChannelName] = React.useState('')
    const [findedChannels, setFindedChannels] = React.useState<Channel[]>([])
    const handleSearch = async () => {
        try {
            const channels = await findChannel(channelName)
            setFindedChannels(channels)
        } catch (error) {

        }

    }
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput
                    label="Название канала"
                    value={channelName}
                    style={styles.search__input}
                    onChangeText={text => setChannelName(text)}
                />
                <IconButton icon={"magnify"} size={80} style={styles.btn} color="#fff" onPress={handleSearch} >

                </IconButton>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#161819",
    },
    search: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    search__input: {
        flex: 1,

    },
    btn: {

        alignSelf: 'stretch'
    },
    text: {
        color: "#fff",
    },
});

export default FindChannel