import { StyleSheet, Text, View } from "react-native";
import { useMonster } from "../context/MonsterContext";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const monsterContext = useMonster();
  if (monsterContext && monsterContext.currentMonster) {
    console.log("Header:", monsterContext.currentMonster.name);
  } else {
    console.log("No monster selected");
  }
  return (
    <>
      <View style={styles.container}>
        <Text>Logged in as : {monsterContext?.currentMonster?.name}</Text>
      </View>
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
