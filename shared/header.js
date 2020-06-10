import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, name }) {
  const openMenu = () => {
    navigation.openDrawer();
  }
  return (
    <View style={styles.header}>
      <MaterialIcons name="menu" onPress={openMenu} size={28} style={styles.icon}/>
      <View>
        <Text style={styles.headerText}>{name}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
    letterSpacing: 1
  },
  icon: {
    position: 'absolute',
    left: 0,
    color: "#FFFFFF"
  }
})