import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'base-64';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

// Types
interface AuthContextType {
  user: string | null;
  token: string | null;
  role: 'admin' | 'user' | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  role: null,
  loading: false,
  login: async () => {},
  logout: async () => {},
});

// Dummy JWT generator and validator
const DUMMY_SECRET = 'dummy_secret';
const TOKEN_KEY = 'auth_token';

function generateDummyJWT(email: string): string {
  // This is NOT a real JWT, just a base64 string for demo
  const role = email === 'admin' ? 'admin' : 'user';
  const payload = {
    email,
    role,
    exp: Date.now() + 1000 * 60 * 60, // 1 hour expiry
  };
  console.log('🚀 ~ generateDummyJWT ~ payload:', payload);
  const token = base64.encode(JSON.stringify(payload)) + '.' + DUMMY_SECRET;
  return token;
}

function parseDummyJWT(
  token: string
): { email: string; role: 'admin' | 'user'; exp: number } | null {
  try {
    const [payload] = token.split('.');
    return JSON.parse(base64.decode(payload));
  } catch {
    return null;
  }
}

function isTokenValid(token: string | null): boolean {
  if (!token) return false;
  const payload = parseDummyJWT(token);
  if (!payload) return false;
  return payload.exp > Date.now();
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<'admin' | 'user' | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore token on app start
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const storedToken = await AsyncStorage.getItem(TOKEN_KEY);
        console.log('🚀 ~ storedToken:', storedToken);
        if (storedToken && isTokenValid(storedToken)) {
          const payload = parseDummyJWT(storedToken);
          setUser(payload?.email || null);
          setRole(payload?.role || null);
          setToken(storedToken);
        } else {
          setUser(null);
          setRole(null);
          setToken(null);
          await AsyncStorage.removeItem(TOKEN_KEY);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Dummy login
  const login = async (email: string, password: string) => {
    const newToken = generateDummyJWT(email);
    const payload = parseDummyJWT(newToken);
    setUser(email);
    setRole(payload?.role || null);
    setToken(newToken);
    await AsyncStorage.setItem(TOKEN_KEY, newToken);
  };

  // Dummy logout
  const logout = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY);
    setUser(null);
    setRole(null);
    setToken(null);
  };

  return (
    <AuthContext value={{ user, token, role, loading, login, logout }}>{children}</AuthContext>
  );
};
