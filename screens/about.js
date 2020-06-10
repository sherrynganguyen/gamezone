import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import BackgroundImage from '../shared/backgroundImage';

export default function About() {
  return (
    <BackgroundImage style={globalStyles.container}>
      <Text> About Screen</Text>
    </BackgroundImage>
  )
}
