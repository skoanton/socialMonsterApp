import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  onPress: () => void;
  title: string;
};

export default function Button({ onPress, title }: ButtonProps) {
  return (
    <>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    color: "white",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: "90%",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
});
