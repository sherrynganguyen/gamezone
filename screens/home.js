import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {title:'The 100', rating: 4, body: 'good show', key: '1'},
    {title:'The Kingdom', rating: 5, body: 'heloasd asd', key: '2'},
    {title:'Jumazi', rating: 4, body: 'nasd asd', key: '3'},
    {title:'The Last Empress', rating: 3, body: 'ad ae dsfaf', key: '4'},
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate({name: 'ReviewDetails',params: {item}})}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
