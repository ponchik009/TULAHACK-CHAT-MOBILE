import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { logout } from "../../api/auth";
const UserSettings = ({ setIsAuth }: any) => {



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
                <Image
                    source={require("../../assets/icons/round-account-button-with-user-inside_icon-icons.com_72596.png")}
                    style={styles.myAvatar}
                />
                <Text style={styles.username}>
                    CoolSheff
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Настройки пользователя
                </Text>
                <TouchableHighlight onPress={handleLogout}>
                    <View style={styles.iconBtn}>
                        <Image
                            source={require("../../assets/icons/exit.png")}
                            style={styles.btnIcon}
                        />
                        <Text style={styles.iconBtn__text}>Выйти</Text>
                    </View>
                </TouchableHighlight>
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