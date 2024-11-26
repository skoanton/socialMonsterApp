import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Monster } from "../types/monsters";
import { useMonster } from "../context/MonsterContext";
import { router } from "expo-router";

type MonsterListCardProps = {
  monster: Monster;
};

export default function MonsterListCard({ monster }: MonsterListCardProps) {
  const monsterContext = useMonster();
  const handleLogin = () => {
    if (monster) {
      monsterContext?.selectMonster(monster);
      console.log("Login as", monster.name);
      router.push("/feed");
    } else {
      console.error("No monster selected");
    }
  };
  return (
    <>
      <TouchableOpacity onPress={() => handleLogin()}>
        <View style={styles.container}>
          <Text style={styles.text}>{monster.name}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});
