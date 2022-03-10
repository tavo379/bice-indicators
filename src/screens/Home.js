import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { getData, getDetail } from '../api/indecon'

import MainCard from '../components/MainCard'
import FavoriteCard from '../components/FavoriteCard'
import IndicatorList from '../components/IndicatorList'


const HomeScreen = () => {
  const [values, setValues] = useState([])
  const [ detailData, setDetailData ] = useState('Dolar')
  const [ value, setValue] = useState('0')

  useEffect(() => {
    (async() => {
      await loadData()
    })()
  }, [])

  const loadData = async () => {
    try {
      const response = await getData()
      const allData = []

      Object.entries(response).map(async item => {        
        // const indicatorDetail = await getDetail(item[1].key)
        allData.push({
          name: item[1].key,
          value: item[1].value
        })
      })


      setValues(allData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async() => {
      await loadDetail('dolar')
    })()
  }, [])

  const loadDetail = async (key) => {
    try {
      const response = await getDetail(key)
      const value = Object.entries(response.values).slice(-1)
      setValue(value)
      setDetailData(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.listContainer}>
      <MainCard />
      <FavoriteCard name={detailData.key} description={detailData.name} value={value[0][1]}/>
      <IndicatorList values={values}/>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#fff',
  }
})

export default HomeScreen