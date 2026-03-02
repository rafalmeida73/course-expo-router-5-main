import { AuthContext } from '@/provider/AuthProvider';
import { Link, useRouter } from 'expo-router';
import React, { use, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Page = () => {
  const [email, setEmail] = useState('simon');
  const [password, setPassword] = useState('123456');
  const router = useRouter();
  const { login } = use(AuthContext);

  const handleLogin = async () => {
    await login(email, password);
    router.push('/(authenticated)/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
        <Link href="/(authenticated)/(tabs)" asChild>
          <Button title="Go to inside" />
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    maxWidth: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    marginBottom: 16,
    gap: 8,
  },
  message: {
    marginTop: 16,
    color: '#333',
  },
});
export default Page;
