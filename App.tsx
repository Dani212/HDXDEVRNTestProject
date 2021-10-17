import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hook';
import AppComponent from './src/component';

export default function App() {
  // This function is used to load fonts and it is a hook
  const isLoadingComplete = useCachedResources();

  // This means the app will not open if the fonts failed to load
  if (!isLoadingComplete) {
    return null;
  }
  // The safe area provider work with the safeareaview
  // which will help push the screen view from the status bar
  // Appcomponent as the name implies is where the app component is written
  return (
    <SafeAreaProvider>
      <AppComponent />
    </SafeAreaProvider>
  );
}
