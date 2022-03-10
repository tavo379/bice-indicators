import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MainCard = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Hola Bice 👋</Text>
      <Text style={styles.subtitle}>Bienvenido</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    margin: 25
  },  
  title: {
    fontSize: 25,
    fontWeight: '600'
  },
  subtitle: {
    color: '#d5dbdf',
    fontSize: 20,
  }
})

export default MainCard