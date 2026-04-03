import { RootView } from "@/components/RootView";
import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";

export default function PokemonDetails() {
    const params = useLocalSearchParams()

    return (
        <RootView>
            <ThemedText variant="headline">Pokemon Details</ThemedText>
        </RootView>
    )
}