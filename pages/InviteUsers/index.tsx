import {
    StyleSheet,
    Text,
    View,
} from "react-native";


const InviteUsers = () => {
    return (
        <View style={styles.container}>
            <Text>
                Invite People
            </Text>
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
    text: {
        color: "#fff",
    },
});


export default InviteUsers