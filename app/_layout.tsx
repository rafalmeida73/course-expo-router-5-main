import { AuthContext, AuthProvider } from '@/provider/AuthProvider';
import { Stack } from 'expo-router';
import { use } from 'react';
import { Text } from 'react-native';

const Layout = () => {
  const { user, loading, role } = use(AuthContext);
  const isAuthenticated = !!user;
  const isAdmin = role === 'admin';

  if (loading) return <Text>Loading....</Text>;

  return (
    <Stack>
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen
          name="(public)"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Protected>

      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen
          name="(authenticated)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Protected guard={isAdmin}>
          <Stack.Screen
            name="admin"
            options={{
              presentation: 'modal',
            }}
          />
        </Stack.Protected>
      </Stack.Protected>
    </Stack>
  );
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}
