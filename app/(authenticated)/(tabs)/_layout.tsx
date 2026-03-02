import { Tabs } from 'expo-router';
const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="pokemon" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="index" />
    </Tabs>
  );
};
export default Layout;
