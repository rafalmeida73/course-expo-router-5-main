import { Stack } from 'expo-router';

export const unstable_settings = {
  anchor: '(tabs)',
};

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(modal)/news" options={{ presentation: 'modal' }} />
      <Stack.Screen
        name="(modal)/sheet"
        options={{
          presentation: 'formSheet',
          sheetAllowedDetents: [0.3, 0.6, 1],
          animation: 'slide_from_bottom',
          sheetExpandsWhenScrolledToEdge: true,
          sheetGrabberVisible: true,
          sheetCornerRadius: 20,
          headerShown: false,
          contentStyle: {
            backgroundColor: 'blue',
          },
          sheetInitialDetentIndex: 0,
        }}
      />
    </Stack>
  );
};
export default Layout;
