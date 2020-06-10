import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import BackgroundImage from '../shared/backgroundImage';
import ReviewForm from './reviewForm';
export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {title:'The 100', rating: 4, body: 'good show', key: '1'},
    {title:'The Kingdom', rating: 5, body: 'heloasd asd', key: '2'},
    {title:'Jumazi', rating: 4, body: 'nasd asd', key: '3'},
    {title:'The Last Empress', rating: 3, body: 'ad ae dsfaf', key: '4'},
  ])
  const [modelOpen, setModalOpen] = useState(false);
  return (
    <BackgroundImage>
      <Modal visible={modelOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{...styles.modalToggle, ...styles.modalClose}}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm/>
        </View>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate({name: 'ReviewDetails',params: {item}})}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </BackgroundImage>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: "#91AA8D"
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  }
})
