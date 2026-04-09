import { useShadows } from "@/hooks/useShadows";
import { useThemeColors } from "@/hooks/useThemeColors";
import { View, type ViewProps } from "react-native";

type CardProps = ViewProps

export function Card({ style, ...rest }: CardProps) {
    const colors = useThemeColors()
    const shadows = useShadows()
    return (
        <View {...rest} style={[{ borderRadius: 8, ...shadows.dp2, backgroundColor: colors.grayWhite }, style]} />
    )
}
