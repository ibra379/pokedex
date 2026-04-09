import { Shadows, ShadowsDark } from "@/constants/Shadows";
import { useColorScheme } from "react-native";

export function useShadows() {
  const scheme = useColorScheme();
  return scheme === "dark" ? ShadowsDark : Shadows;
}
