import {
    StyleSheet,
    Text,
    View,
} from "react-native";

const FindChannel = () => {
    return (
        <View style={styles.container}>
            <Text>
                Find Channel
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

export default FindChannel