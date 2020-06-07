// import 'react-native-gesture-handler';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Navigator from './routes/homeStack';
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetail';
const getFonts = () => {
  return Font.loadAsync({
    'roboto_regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    'roboto_light': require('./assets/fonts/RobotoCondensed-Light.ttf'),
    'roboto_bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
  })
};

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator> 
    </NavigationContainer>
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