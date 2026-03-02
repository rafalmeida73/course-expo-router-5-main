import { PokemonList } from '@/actions/pokemon';
import { Suspense } from 'react';
import { ActivityIndicator, View } from 'react-native';
const Page = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Suspense fallback={<ActivityIndicator />}>{PokemonList()}</Suspense>
    </View>
  );
};
export default Page;
