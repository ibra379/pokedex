import { ViewStyle } from "react-native";

export const Shadows = {
  dp2: {
    shadowOpacity: 0.2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
} satisfies Record<string, ViewStyle>;

export const ShadowsDark = {
  dp2: {
    shadowOpacity: 0.2,
    shadowColor: "#cccccc7c",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
} satisfies Record<string, ViewStyle>;
