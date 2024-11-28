import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useMonster } from "../../context/MonsterContext";
type TabsLayoutProps = {};

export default function TabsLayout({}: TabsLayoutProps) {
  const monsterContext = useMonster();
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="feed/index"
        options={{
          title: "Discover",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="at-circle" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          href: monsterContext?.currentMonster ? "/profile" : null,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
