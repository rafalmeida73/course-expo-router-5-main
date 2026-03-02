import { renderInfo } from '@/actions/render-info';
import { myAction } from '@/actions/server-action';
import { AuthContext } from '@/provider/AuthProvider';
import { Suspense, use, useState } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
const Page = () => {
  const { logout } = use(AuthContext);
  const [counter, setCounter] = useState(0);

  const onButtonAction = async () => {
    const newCounter = await myAction(counter);
    setCounter(newCounter);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Call action" onPress={onButtonAction} />
      <Text>{counter}</Text>
      <Button title="Logout" onPress={logout} />

      <Suspense fallback={<ActivityIndicator />}>{renderInfo({ name: 'Galaxies devs' })}</Suspense>
    </View>
  );
};
export default Page;
