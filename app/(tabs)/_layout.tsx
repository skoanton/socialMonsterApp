import { Slot, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
type TabsLayoutProps = {};

export default function TabsLayout({}: TabsLayoutProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen name="feed/index" />
      </Tabs>
    </SafeAreaView>
  );
}
