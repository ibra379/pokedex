import { useThemeColors } from "@/hooks/useThemeColors";
import { ViewProps, ViewStyle } from "react-native";
import { Edge, SafeAreaView } from "react-native-safe-area-context";

type RootViewProps = ViewProps & { edges?: Edge[] }


export function RootView({ edges, style, ...rest }: RootViewProps) {
    const colors = useThemeColors()
    return <SafeAreaView
        edges={edges}
        style={[rootStyle, { backgroundColor: colors.tint }, style]}
        {...rest}
    />
}

const rootStyle = {
    flex: 1,
} satisfies ViewStyle
