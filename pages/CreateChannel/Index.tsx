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

const CreateChannel = () => {
  const [image, setImage] = React.useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
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
          />
        </View>
        <Button title="Создать" onPress={() => { }} />
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
