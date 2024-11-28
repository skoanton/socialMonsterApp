import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { fetchMonsters } from "../api/monsters";
import { Monster } from "../types/monsters";
import { useMonster } from "../context/MonsterContext";
import Button from "./Button";
import { router } from "expo-router";
import CreateAccountModal from "./CreateAccountModal";

type MonsterListProps = {};

export default function MonsterList({}: MonsterListProps) {
  const monsterContext = useMonster();
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const getMonsters = async () => {
      const response = await fetchMonsters();
      if (response) {
        setMonsters(response);
      } else {
        console.error("Error fetching monsters");
      }
    };
    getMonsters();
  }, []);

  const handleLogin = (monster: Monster) => {
    if (monster) {
      monsterContext?.selectMonster(monster);
    } else {
      console.error("No monster selected");
    }
  };
  const handleCreateAccount = () => {
    setShowModal(true);
  };

  const onModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Välj konto</Text>
        <Button onPress={() => handleCreateAccount()} title={"Skapa konto"} />
        <FlatList
          style={styles.list}
          data={monsters}
          renderItem={({ item }) => (
            <Button onPress={() => handleLogin(item)} title={item.name} />
          )}
        />
        <CreateAccountModal isVisible={showModal} onClose={onModalClose} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {},
  header: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
  },
});
