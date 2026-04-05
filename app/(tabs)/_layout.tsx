import { useThemeColors } from "@/hooks/useThemeColors";
import { Tabs } from "expo-router";
import { Home, Info } from "lucide-react-native";

export default function TabsLayout() {
  const colors = useThemeColors();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.grayMedium,
        tabBarStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.grayWhite,
          borderTopWidth: 0,
          elevation: 8,
          height: 58,
          borderRadius: 58,
          marginHorizontal: 20,
          paddingBottom: 0,
          marginBottom: 16,
          position: "absolute",
          shadowColor: "#000",
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Pokédex",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => <Info color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
