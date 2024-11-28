import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useMonster } from "../../../context/MonsterContext";
import { router } from "expo-router";
import Button from "../../../components/Button";

type indexProps = {};

export default function index({}: indexProps) {
  const monsterContext = useMonster();

  const onPress = () => {
    monsterContext?.selectMonster(null);
    router.push("/");
  };

  return (
    <>
      <View style={styles.container}>
        {monsterContext?.currentMonster ? (
          <>
            <Text>
              Du är inloggad som : {monsterContext.currentMonster.name}
            </Text>
            <Button onPress={onPress} title="Logga ut" />
          </>
        ) : (
          <Text>Du är inte inloggad</Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
