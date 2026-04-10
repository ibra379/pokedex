import { getPokemonArtwork } from "@/functions/pokemon";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, View, type ViewStyle } from "react-native";
import { Card } from "../Card";
import { ThemedText } from "../ThemedText";

type PokemonCardProps = {
    style: ViewStyle
    id: number;
    name: string;
}

export function PokemonCard({ style, id, name }: PokemonCardProps) {
    const colors = useThemeColors()

    return (
        <Link href={{pathname: "/pokemon/[id]", params: { id }}} asChild>
            <Pressable style={style}>
                <Card style={[styles.card]}>
                    <ThemedText
                        variant="caption"
                        color="grayMedium"
                        style={styles.id}
                    >
                        #{id.toString().padStart(3, '0')}
                    </ThemedText>
                    <Image width={72} height={72} source={{ uri: getPokemonArtwork(id) }} />
                    <ThemedText numberOfLines={1} style={styles.name}>{name}</ThemedText>

                    <View style={[styles.shadow, { backgroundColor: colors.grayBackground }]} />
                </Card>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    card: {
        borderColor: '#000',
        position: 'relative',
        alignItems: 'center',
        padding: 4,
    },
    id: {
        alignSelf: 'flex-end'
    },
    name: {
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    shadow: {
        zIndex: -1,
        flex: 1,
        position: 'absolute',
        left: 0, right: 0,
        bottom: 0,
        height: 44,
        borderRadius: 7
    }
})