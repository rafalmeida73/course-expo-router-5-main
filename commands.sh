bunx create-expo expo-router-rsc

bun run reset-project

bun install base-64 @types/base-64
bunx expo install @react-native-async-storage/async-storage

bun i react-server-dom-webpack@~19.0.0

bunx expo export
eas deploy

bunx expo run:ios --configuration Release