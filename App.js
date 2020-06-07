import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import drawerNavigator from './routes/drawer';

const getFonts = () => {
  return Font.loadAsync({
    'roboto_regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    'roboto_light': require('./assets/fonts/RobotoCondensed-Light.ttf'),
    'roboto_bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
  })
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      drawerNavigator()
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}