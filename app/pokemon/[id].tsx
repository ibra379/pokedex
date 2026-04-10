import { Card } from "@/components/Card";
import { PokemonSpec } from "@/components/pokemon/PokemonSpec";
import { PokemonStat } from "@/components/pokemon/PokemonStat";
import { PokemonType } from "@/components/pokemon/PokemonType";
import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { formatSize, formatWeight, getPokemonArtwork } from "@/functions/pokemon";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import { router, useLocalSearchParams } from "expo-router";
import { ArrowLeftIcon, RulerIcon, WeightIcon } from "lucide-react-native";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function PokemonDetails() {
    const colors = useThemeColors()
    const params = useLocalSearchParams() as { id: string };
    const { data: pokemon } = useFetchQuery("pokemon/[id]", { id: params.id });
    const { data: species } = useFetchQuery("pokemon-species/[id]", { id: params.id });
    const types = pokemon?.types ?? []
    const mainType = types[0]?.type.name
    const colorType = mainType ? Colors.type[mainType] : Colors.type.normal;
    const bio = species?.flavor_text_entries?.find(
        ({language}) => language.name === "en"
    )?.flavor_text.replaceAll(/[\n\f\r]/g, '. ')

    return (
        <RootView edges={["top"]} style={{ backgroundColor: colorType }}>
            <View style={{flex: 1}}>
                <Image
                    width={208}
                    height={208}
                    style={styles.pokeball}
                    source={require('@/assets/images/big-pokeball.png')}
                />
                <Row style={styles.header}>
                    <Pressable onPress={router.back}>
                        <Row gap="8">
                            <ArrowLeftIcon size={32} color={colors.grayWhite}></ArrowLeftIcon>
                            <ThemedText color="grayWhite" variant="headline" style={{ textTransform: 'capitalize' }}>
                                {pokemon?.name}
                            </ThemedText>
                        </Row>
                    </Pressable>

                    <ThemedText color="grayWhite" variant="subtitle2">
                        #{params.id.padStart(3, '0')}
                    </ThemedText>
                </Row>

                <Card style={styles.card}>
                    <Image
                        style={styles.artwork}
                        width={200}
                        height={200}
                        source={{ uri: getPokemonArtwork(parseInt(params.id)) }}
                    />
                    <Row style={{ gap: 16 }}>
                        {types?.map((type) => (
                            <PokemonType key={type.type.name} name={type.type.name} />
                        ))}
                    </Row>

                    {/* About */}
                    <ThemedText variant="subtitle1" style={{ color: colorType }}>
                        About
                    </ThemedText>

                    <Row>
                        <PokemonSpec
                            style={{ borderStyle: 'solid', borderRightWidth: 1, borderColor: colors.grayLight }}
                            title={formatWeight(pokemon?.weight)}
                            description="weight"
                            icon={WeightIcon}
                        />
                        <PokemonSpec
                            style={{ borderStyle: 'solid', borderRightWidth: 1, borderColor: colors.grayLight }}
                            title={formatSize(pokemon?.height)}
                            description="size"
                            icon={RulerIcon}
                        />
                        <PokemonSpec
                            title={pokemon?.moves.slice(0, 2).map((m) => m.move.name).join("\n")}
                            description="Moves"
                        />
                    </Row>

                    {/* Bio */}
                    <ThemedText variant="body3">
                        {bio}
                    </ThemedText>

                    {/* Stats */}
                    <ThemedText variant="subtitle1">
                        Base stats
                    </ThemedText>

                    <View>
                        {pokemon?.stats.map((stat) => (
                            <PokemonStat
                                key={stat.stat.name}
                                name={stat.stat.name}
                                value={stat.base_stat}
                                color={colorType}
                            />
                        ))}
                    </View>
                </Card>
            </View>
        </RootView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginHorizontal: 20,
        justifyContent: 'space-between',

    },
    pokeball: {
        position: 'absolute',
        top: 0,
        right: 8,
        opacity: .1,
        zIndex: -1,
    },
    artwork: {
        top: -144,
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 20,
        zIndex: 2
    },
    card: {
        flex: 1,
        marginTop: 144,
        paddingHorizontal: 20,
        paddingTop: 80,
        gap: 16,
        alignItems: 'center'
    }
})