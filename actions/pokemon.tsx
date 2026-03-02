'use server';
import 'server-only';

import Types from '@/components/Types';
import { Image, ScrollView, Text, View } from 'react-native';

export async function Pokemon({ id }: { id: number }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = await res.json();

  return (
    <View style={{ padding: 8, borderWidth: 1 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{json.name}</Text>
      <Image source={{ uri: json.sprites.front_default }} style={{ width: 100, height: 100 }} />
      {json.abilities.map((ability: any) => (
        <Text key={ability.ability.name}>- {ability.ability.name}</Text>
      ))}
      <Types types={json.types} />
    </View>
  );
}

export async function PokemonList() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const json = await res.json();

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 8,
        gap: 8,
        justifyContent: 'center',
      }}>
      {json.results.map((pokemon: any) => (
        <Pokemon key={pokemon.name} id={pokemon.name} />
      ))}
    </ScrollView>
  );
}
