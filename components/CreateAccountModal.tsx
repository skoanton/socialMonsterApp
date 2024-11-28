import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Monster } from "../types/monsters";
import { createMonster, fetchMonsters } from "../api/monsters";
import Button from "./Button";
type CreateAccountModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

export default function CreateAccountModal({
  isVisible,
  onClose,
}: CreateAccountModalProps) {
  const [username, setUsername] = useState("");
  const [color, setColor] = useState("");
  const [eyes, setEyes] = useState("");

  const handleCreateAccount = async () => {
    console.log("Create account");
    const totalMonsters: number = await fetchMonsters().then((response) => {
      return response.length;
    });
    const newMonster: Monster = {
      id: totalMonsters + 1,
      name: username,
      color: color,
      eyes: Number(eyes),
    };
    if (newMonster) {
      const createdMonster = await createMonster(newMonster);
      console.log(createdMonster);
    } else {
      console.error("No monster created");
    }
    onClose();
  };

  return (
    <Modal animationType="slide" visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Skapa konto</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={22} />
          </Pressable>
        </View>
        <View>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Color"
            value={color}
            onChangeText={setColor}
          />
          <TextInput placeholder="Eyes" value={eyes} onChangeText={setEyes} />
        </View>
        <Button onPress={handleCreateAccount} title="Skapa konto" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    height: "25%",
    width: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
  },
});
