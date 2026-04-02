import { View, ViewProps, ViewStyle } from "react-native";

type RowProps = ViewProps

export function Row({style, ...rest}: RowProps) {
    return <View
        style={[
            rowStyle,
            style
        ]}
        {...rest}
    />
}

const rowStyle = {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center'
} satisfies ViewStyle