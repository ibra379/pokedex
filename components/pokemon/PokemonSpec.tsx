import { useThemeColors } from "@/hooks/useThemeColors"
import { LucideIcon } from "lucide-react-native"
import { StyleSheet, View, ViewProps } from "react-native"
import { Row } from "../Row"
import { ThemedText } from "../ThemedText"

type PokemonSpecProps = ViewProps & {
    title?: string,
    description?: string,
    icon?: LucideIcon
}

export function PokemonSpec({ style, title, description, icon: Icon, ...rest }: PokemonSpecProps) {
    const colors = useThemeColors()

    return (
        <View style={[styles.root, style]} {...rest}>
            <Row style={styles.row}>
                {Icon && <Icon size={16} color={colors.grayMedium} />}
                <ThemedText>{title}</ThemedText>
            </Row>
            <ThemedText variant="caption" color="grayMedium">
                {description}
            </ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        gap: 4,
    },
    row: {
        height: 32,
        alignItems: 'center'
    }
})