import { Colors } from "@/constants/Colors";
import { View, ViewStyle } from "react-native";
import { ThemedText } from "../ThemedText";

type PokemonTypeProps = {
    name: keyof typeof Colors['type'];
}

export function PokemonType({ name }: PokemonTypeProps) {
    return (
        <View style={[rootStyle, { backgroundColor: Colors.type[name] }]}>
            <ThemedText color="grayWhite" variant="subtitle2" style={{textTransform: 'capitalize'}}>
                {name}
            </ThemedText>
        </View>
    )
}

const rootStyle = {
    flex: 0,
    height: 20,
    paddingHorizontal: 8,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 8
} satisfies ViewStyle