import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetail';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function homeNavigator() {
 return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4F6742',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerTitle: () => <Header navigation={navigation} title='Game Zone'/>,
          })}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            title:'Review',
          }}
        />
      </Stack.Navigator> 
 )
};