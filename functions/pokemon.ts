export function getPokemonId(url: string): number {
  const match = url.match(/pokemon\/(\d+)/);
  return match ? parseInt(match[1]!, 10) : 0;
}
