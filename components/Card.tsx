import { Shadows } from "@/constants/Shadows";
import { useThemeColors } from "@/hooks/useThemeColors";
import { View, type ViewProps, ViewStyle } from "react-native";

type CardProps = ViewProps

export function Card({ style, ...rest }: CardProps) {
    const colors = useThemeColors()
    return (
        <View {...rest} style={[styles, { backgroundColor: colors.grayWhite }, style]} />
    )
}

const styles = {
    borderRadius: 8,
    ...Shadows.dp2
} satisfies ViewStyle