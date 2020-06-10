import React from 'react';
import { ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';

export default function BackgroundImage(props) {
  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
        { props.children }
    </ImageBackground>
  )
};