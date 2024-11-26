import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { fetchMonsters } from "../api/monsters";
import { Monster } from "../types/monsters";
import MonsterListCard from "./MonsterListCard";

type MonsterListProps = {};

export default function MonsterList({}: MonsterListProps) {
  const [monsters, setMonsters] = useState<Monster[]>([]);
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

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Välj vem du vill logga in som</Text>
        <FlatList
          style={styles.list}
          data={monsters}
          renderItem={({ item }) => <MonsterListCard monster={item} />}
        />
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
  list: {
    width: "100%",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
  },
});
