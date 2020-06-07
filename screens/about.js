import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default About = () => {
  retunr (
    <View style={styles.container}>
      <Text> About Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
})