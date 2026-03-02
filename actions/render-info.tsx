'use server';

import { Text } from 'react-native';

export async function renderInfo({ name }: { name: string }) {
  return <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello, {name}</Text>;
}
