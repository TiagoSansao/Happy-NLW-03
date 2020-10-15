import React from 'react';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_800ExtraBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import Routes from './src/routes';

export default function App() {

  const [FontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!FontsLoaded) {
    return null
  }

  return (
    <Routes />
  );
}
