import {StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const IndicatorCard = (props) => {
  const { indicator } = props;
  const Navigation =  useNavigation()

  const goToDetail = () => {
    Navigation.navigate("Detail", { key: indicator.name })
  }

  return (
    <TouchableWithoutFeedback testID='indicator-card' onPress={goToDetail}>
      <View style={styles.card}>
        <View>
          <Text style={styles.name}>{ indicator.name }</Text>
        </View>
        <View style={styles.valueLabel}>
          <Text style={styles.labelText}>{ indicator.value}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles  = StyleSheet.create({
  card:  {
    backgroundColor: '#f9fbfc',
    borderRadius:  20,
    flex: 1,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20,
    zIndex: 1,
    elevation: 1,
    position: 'relative'
  },
  name: {
    textTransform: 'capitalize',
    fontWeight: 'bold'
  },
  valueLabel: {
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#fea18b',
    height: 25,
    paddingHorizontal: 20
  },

  labelText: {
    color: '#fff',
  },

  spacing: {
    flex: 1,
    padding: 5
  }
})

export default IndicatorCard