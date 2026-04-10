import { StyleSheet, View, ViewProps } from "react-native";
import { Row } from "../Row";
import { ThemedText } from "../ThemedText";

type PokemonStatProps = ViewProps & {
    name: string;
    value: number;
    color: string
}


export function PokemonStat({ style, ...rest }: PokemonStatProps) {
    return (
        <Row style={[styles.root, style]} {...rest}>
            <View style={styles.name}>
                <ThemedText>{rest.name}</ThemedText>
            </View>
        </Row>
    )
}

const styles = StyleSheet.create({
    root: {},
    name: {
        width: 31,
    }
})  