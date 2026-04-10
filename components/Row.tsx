import { View, ViewProps, ViewStyle } from "react-native";

type RowProps = ViewProps & {gap?: string}

export function Row({style, gap, ...rest}: RowProps) {
    return <View
        style={[
            rowStyle,
            {
                gap: gap
            },
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