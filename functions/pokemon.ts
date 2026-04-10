export function getPokemonId(url: string): number {
  const match = url.match(/pokemon\/(\d+)/);
  return match ? parseInt(match[1]!, 10) : 0;
}

export function getPokemonArtwork(id: number | string) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export function formatWeight(weight?: number): string {
  if (!weight) return "0";

  return (weight / 10).toString().replace(".", ",") + " kg"; // Convert from hectograms to kilograms
}

export function formatSize(size?: number): string {
  if (!size) return "0";

  return (size / 10).toString().replace(".", ",") + " m"; // Convert from decimeters to meters
}