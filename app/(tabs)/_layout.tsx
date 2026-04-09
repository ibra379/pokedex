import { useThemeColors } from "@/hooks/useThemeColors";
import { useShadows } from "@/hooks/useShadows";
import { Tabs } from "expo-router";
import { Home, Info } from "lucide-react-native";
import { Pressable } from "react-native";

function TabButton({ "aria-selected": focused, children, onPress, onLongPress, style }: any) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={[
        style,
        {
          borderRadius: focused ? 50 : 0,
          margin: 8,
          justifyContent: "center",
          alignItems: "center",
          height: 50
        },
      ]}
    >
      {children}
    </Pressable>
  );
}

export default function TabsLayout() {
  const colors = useThemeColors();
  const shadows = useShadows();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.grayMedium,
        tabBarStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.grayWhite,
          borderTopWidth: 0,
          width: 'auto',
          height: 58,
          borderRadius: 58,
          marginHorizontal: 20,
          paddingBottom: 0,
          marginBottom: 16,
          position: "absolute",
          ...shadows.dp2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Pokédex",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          tabBarButton: (props) => <TabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => <Info color={color} size={size} />,
          tabBarButton: (props) => <TabButton {...props} />,
        }}
      />
    </Tabs>
  );
}
