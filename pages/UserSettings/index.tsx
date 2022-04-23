import { StyleSheet, Text, View } from "react-native";
import { Button, Colors, IconButton } from "react-native-paper";
import { logout } from "../../api/auth";
import * as ImagePicker from "expo-image-picker";
import React from "react";
const UserSettings = ({ setIsAuth }: any) => {
    const [image, setImage] = React.useState<string | null>(null);
    const pickAvatar = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const handleLogout = async () => {
        try {
            await logout()
            setIsAuth(false)
        } catch (error) {

        }

    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <IconButton
                    icon="account-circle"
                    color={Colors.white}
                    size={120}
                    onPress={() => pickAvatar()}
                />
                <Text style={styles.username}>
                    CoolSheff
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Настройки пользователя
                </Text>
                <Button icon="exit-to-app" mode="text" contentStyle={styles.btn} style={styles.btn} color="white" onPress={() => handleLogout()}>
                    Выйти
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#1C1E1F",
    },
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    btn: {
        fontSize: 100,
        alignSelf: 'stretch',

    },
    title: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: '500',
        marginBottom: 10,
        marginTop: 10,
    },
    iconBtn: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',

    },
    iconBtn__text: {
        color: '#fff'
    },
    header: {
        backgroundColor: "#181A1B",
    },
    columns: {
        flex: 1,
        flexDirection: "row",
    },

    username: {
        color: '#fff',
        fontSize: 40,
        marginLeft: 10
    },
    channels__wrapper: {
        backgroundColor: "#1C1E1F",
        justifyContent: "flex-start",
    },
    chats__wrapper: {
        backgroundColor: "#181A1B",
        justifyContent: "center",
        alignItems: "center",
    },
    bottomBar: {
        backgroundColor: "#1C1E1F",
        flexDirection: 'row'
    },
    btnIcon: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: "stretch",
    },
    myAvatar: {
        padding: 10,
        margin: 5,
        height: 75,
        width: 75,
        resizeMode: "stretch",
    }
});

export default UserSettings