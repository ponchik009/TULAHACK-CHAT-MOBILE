import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import {
  TextInput,
} from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { createChannel } from "../../api/channel";

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
      await createChannel(name, about, image)

    } catch (error) {

    }
    navigation.navigate('Home')
  }

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
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200, borderRadius: 50 }}
            />
          )}
          <Button title="Загрузить изображение" onPress={pickImage} />
        </View>
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
          <Text style={[styles.text, { fontSize: 20 }]}>Описание</Text>
          <TextInput
            placeholder="Описание"
            multiline
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
            value={about}
            onChangeText={setAbout}
          />
        </View>
        <Button title="Создать" onPress={handleSubmit} />
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
