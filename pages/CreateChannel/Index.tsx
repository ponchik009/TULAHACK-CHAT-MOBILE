//@ts-nocheck
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { createChannel } from "../../api/channel";
import { Button, TextInput, IconButton, Colors } from "react-native-paper";

const CreateChannel = ({ navigation }: any) => {
  const [image, setImage] = React.useState<string | null>(null);
  const [name, setName] = React.useState("");
  const [about, setAbout] = React.useState("");

  const pickImage = async () => {
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

  const handleSubmit = async () => {
    try {
      await createChannel(name, about, image);
    } catch (error) {}
    navigation.navigate("Home");
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={Keyboard.dismiss}
      activeOpacity={1}
    >
      <Text style={[styles.text, { fontSize: 30 }]}>
        Создание нового канала
      </Text>
      <View style={{ width: "80%" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {image ? (
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={{ uri: image }}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
            </TouchableOpacity>
          ) : (
            <IconButton
              icon="camera-image"
              color={Colors.white}
              size={200}
              onPress={pickImage}
              style={{ image }}
            />
          )}
        </View>
        <View
          style={{
            marginVertical: 5,
          }}
        >
          <Text style={[styles.text, { fontSize: 20 }]}>Название</Text>
          <TextInput
            label="Название"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View
          style={{
            marginVertical: 5,
          }}
        >
          <Text style={[styles.text, { fontSize: 20 }]}>Описание</Text>
          <TextInput
            label="Описание"
            value={about}
            onChangeText={(text) => setAbout(text)}
          />
        </View>
        <Button mode="contained" color="#333" onPress={handleSubmit}>
          <Text>Создать канал</Text>
        </Button>
      </View>
    </TouchableOpacity>
  );
};

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

export default CreateChannel;
