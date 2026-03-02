'use client';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
interface Type {
  slot: number;
  type: Stat;
}

interface Stat {
  name: string;
  url: string;
}

const Types = ({ types }: { types: Type[] }) => {
  const colorForType = (type: string) => {
    switch (type) {
      case 'normal':
        return 'gray';
      case 'fire':
        return 'red';
      case 'water':
        return 'blue';
      case 'electric':
        return 'yellow';
      case 'grass':
        return 'green';
      case 'ice':
        return 'blue';
      case 'fighting':
        return 'red';
      case 'poison':
        return 'purple';
      case 'ground':
        return 'brown';
      case 'flying':
        return 'blue';
      case 'psychic':
        return 'purple';
      case 'bug':
        return 'green';
      case 'rock':
        return 'brown';
    }
  };
  return (
    <View style={{ alignItems: 'center', gap: 8, marginTop: 8 }}>
      <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
        {types.map((type) => (
          <Text
            key={type.type.name}
            style={{
              backgroundColor: colorForType(type.type.name),
              padding: 4,
              borderRadius: 4,
              color: 'white',
            }}>
            {type.type.name}
          </Text>
        ))}
      </View>
      <TouchableOpacity onPress={() => Alert.alert('Make Favorite')}>
        <Ionicons name="heart" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};
export default Types;
