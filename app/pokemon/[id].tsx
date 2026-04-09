import { RootView } from "@/components/RootView";
import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

export default function PokemonDetails() {
    const params = useLocalSearchParams()

    return (
        <RootView>
            <ThemedText variant="headline">Pokemon Details</ThemedText>
        </RootView>
    )
}

const styles = StyleSheet.create({
    
})