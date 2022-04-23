import React from "react";
import {
    Button,
    StyleSheet,
    Text,
    View,
    Keyboard,
    TouchableOpacity,
    Picker,
} from "react-native";
import {
    TextInput,
} from "react-native-gesture-handler";
import { createChat } from "../../api/chat";

const CreateChat = ({ navigation }: any) => {
    const [chatType, setChatType] = React.useState('1');
    const [name, setName] = React.useState("");
    const handleCreateChat = async () => {
        try {
            await createChat(name, chatType)
            navigation.navigate('Home')
        } catch (error) {

        }

    }
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={Keyboard.dismiss}
            activeOpacity={1}
        >
            <Text style={[styles.text, { fontSize: 30 }]}>
                Создание нового чата
            </Text>
            <View style={{ width: "80%" }}>

                <View
                    style={{
                        marginVertical: 5,
                    }}
                >
                    <Text style={[styles.text, { fontSize: 20 }]}>Название</Text>
                    <TextInput
                        placeholder="Название"
                        style={[
                            styles.text,
                            {
                                fontSize: 20,
                                borderStyle: "solid",
                                borderColor: "#115511",
                                borderWidth: 2,
                                flexGrow: 1,
                            },
                        ]}
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View
                    style={{
                        marginVertical: 5,
                    }}
                >
                    <Text style={[styles.text, { fontSize: 20 }]}>Тип чата</Text>
                    <Picker
                        selectedValue={chatType}
                        style={{ flex: 1 }}
                        onValueChange={(itemValue, itemIndex) => setChatType(itemValue)}
                    >
                        <Picker.Item label="Групповой" value="1" />
                        <Picker.Item label="Информационный" value="2" />
                    </Picker>
                </View>
                <Button title="Создать" onPress={handleCreateChat} />
            </View>
        </TouchableOpacity>
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


export default CreateChat