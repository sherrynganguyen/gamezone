import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {
  const { title, rating, body } = route.params.item
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{rating}</Text>
        <Text>{body}</Text>
      </Card>
    </View>
  )
}
