import React, { useState } from 'react';
import * as Font from 'expo-font';
// import Home from './screens/home';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';

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
      <Navigator/>
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
