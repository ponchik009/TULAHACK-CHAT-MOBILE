//@ts-nocheck
import React from "react";
import {

    StyleSheet,
    Text,
    View,
    Keyboard,
    TouchableOpacity,
} from "react-native";
import { Button, RadioButton, TextInput } from "react-native-paper";

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
                    <Text style={[styles.text, { fontSize: 20 }]}>Название чата</Text>
                    <TextInput
                        label="Название чата"
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View
                    style={{
                        marginVertical: 5,
                    }}
                >
                    <Text style={[styles.text, { fontSize: 20 }]}>Тип чата</Text>
                    <RadioButton.Group onValueChange={value => setChatType(value)} value={chatType}>
                        <RadioButton.Item color="#fff" labelStyle={{ color: '#fff' }} label="Групповой" value="1" />
                        <RadioButton.Item color="#fff" labelStyle={{ color: '#fff' }} label="Информационный" value="2" />
                    </RadioButton.Group>
                </View>
                <Button mode="contained" color="#333" onPress={handleCreateChat} >
                    <Text>Создать чат</Text>
                </Button>
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