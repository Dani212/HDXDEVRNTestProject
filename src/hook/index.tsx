import * as React from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Ionicons } from '@expo/vector-icons';

const poppins = require('../../assets/fonts/Poppins-Regular.ttf');
const spacemono = require('../../assets/fonts/SpaceMono-Regular.ttf');
const nunito = require('../../assets/fonts/Nunito-Regular.ttf');

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          spacemono,
          poppins,
          nunito,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
