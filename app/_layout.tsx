import { Slot, Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MonsterProvider, useMonster } from "../context/MonsterContext";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";

export default function HomeLayout() {
  const monsterContext = useMonster();
  console.log("HomeLayout:", monsterContext?.currentMonster?.name);
  return (
    <MonsterProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </MonsterProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*     backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center", */
  },
});
