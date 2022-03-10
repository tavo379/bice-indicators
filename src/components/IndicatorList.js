import { StyleSheet, View, Text, FlatList } from 'react-native'
import React from 'react'

import IndicatorCard from './IndicatorCard';

const IndicatorList = (props) => {
  const { values } = props;

  return (
    <FlatList 
      data={values}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(value) => String(value.name)}
      contentContainerStyle={styles.flatListContainer}
      renderItem={({item}) =>  <IndicatorCard indicator={item}/>}  
    />
  )
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
  }
})

export default IndicatorList

