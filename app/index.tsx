import { Card } from "@/components/Card";
import { FilterButton } from "@/components/FilterButton";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import { Row } from "@/components/Row";
import { SearchBar } from "@/components/SearchBar";
import { ThemedText } from "@/components/ThemedText";
import { getPokemonId } from "@/functions/pokemon";
import { useInfiniteFetchQuery } from "@/hooks/useFetchQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import { useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const colors = useThemeColors()
  const [search, setSearch] = useState("");
  const [filterKey, setFilterKey] = useState<'id' | 'name'>('id');
  const { data, isFetching, fetchNextPage } = useInfiniteFetchQuery("pokemon?limit=21")
  const pokemons = data?.pages.flatMap((page) => page.results.map((p) => ({ ...p, id: getPokemonId(p.url) }))) ?? [];
  const filterPokemons = [...search ?
    pokemons.filter(
      (p) => p.name.includes(search.toLowerCase()) || p.id.toString() === search
    ) :
    pokemons].sort((a, b) => (a[filterKey] > b[filterKey] ? 1 : -1));

  return (
    <SafeAreaView edges={["top"]} style={[styles.container, { backgroundColor: colors.tint }]}>
      <Row style={styles.header}>
        <Image width={24} height={24} source={require("@/assets/images/pokeball.png")} />
        <ThemedText variant="headline" color="grayLight">Pokedex</ThemedText>
      </Row>

      <Row style={{ marginHorizontal: 12, gap: 16 }}>
        <SearchBar value={search} onChange={setSearch} />
        <FilterButton value={filterKey} onChange={setFilterKey} />
      </Row>

      <Card style={styles.body}>
        <FlatList
          data={filterPokemons}
          numColumns={3}
          columnWrapperStyle={styles.gridGap}
          contentContainerStyle={[styles.gridGap, styles.list]}
          keyExtractor={(pokemon) => pokemon.id.toString()}
          onEndReached={search ? undefined : () => {
            if (!isFetching && filterKey !== 'name') fetchNextPage()
          }}
          ListFooterComponent={isFetching ? <ActivityIndicator color={colors.tint} /> : null}
          renderItem={({ item }) => (
            <PokemonCard id={item.id} name={item.name} style={{ flex: 1 / 3 }} />
          )}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    gap: 16,
    padding: 12
  },
  body: {
    flex: 1,
    marginTop: 16,
  },
  gridGap: {
    gap: 8
  },
  list: {
    padding: 12
  }
})
