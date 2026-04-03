import { useThemeColors } from "@/hooks/useThemeColors"
import { StyleSheet, View } from "react-native"

type RadioInputProps = {
    checked: boolean
}

export function RadioInput({ checked }: RadioInputProps) {
    const colors = useThemeColors()

    return (
        <View style={[styles.radio, { borderColor: colors.tint }]}>
            {checked && <View style={[styles.radioInner, { backgroundColor: colors.tint }]} />}
        </View>
    )
}

const styles = StyleSheet.create({
    radio: {
        height: 14,
        width: 14,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioInner: {
        height: 6,
        width: 6,
        borderRadius: 6,
    }
})