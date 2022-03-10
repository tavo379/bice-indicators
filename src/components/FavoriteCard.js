import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react'

const FavoriteCard = (props) => {
  const { name, description, value } = props

  return (
    <View style={styles.groupContainer}>
      <View style={styles.cardContainer}>
        <Text style={styles.subtitle}>Producto: {name}</Text>
        <Text style={styles.value}>${value}</Text>
        <Text style={styles.subtitle}>{description}</Text>
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} name={'money-bill-alt'} color={'#fff'} size={20}/>
        </View>
      </View>
      <View style={styles.subcard}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  groupContainer: {
    marginHorizontal: 25,
    marginBottom: 20
  },
  cardContainer: {
    backgroundColor: '#1b2536',
    borderRadius: 20,
    height: 150,
    padding: 20,
    position: 'relative',
    zIndex: 20,
    elevation: 20
  }, 
  titleContainer: {
    margin: 25
  },  
  value: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '600',
    marginVertical: 5
  },
  subtitle: {
    color: '#d5dbdf',
    fontSize: 15,
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 12,
    backgroundColor: '#374355',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    right: 15
  },
  subcard: {
    backgroundColor: '#2663e9',
    borderRadius: 20,
    position: 'absolute',
    height: 30,
    transform: [{ translateY: '10px'}],
    zIndex: 10,
    elevation: 10,
    width: '95%',
    bottom: 5,
    left: 7
  }
})

export default FavoriteCard