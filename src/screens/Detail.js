import { View, Text, StyleSheet } from 'react-native'
import React, {  useState, useEffect } from 'react'
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

import {
  LineChart,
} from "react-native-chart-kit";

import { getDetail } from '../api/indecon'
import FavoriteCard from '../components/FavoriteCard';

const DetailScreen = (props) => {
  const { navigation, route: { params } } = props
  const [ detailData, setDetailData ] = useState(null)
  const [ chartData, setCharData ] = useState([])
  const [ value, setValue] = useState(0)
  const [chartParentWidth, setChartParentWidth] = useState(0);


  const Labels = chartData.map(item => {
    let epochToHuman = new Date(parseInt(item[0]*1000))
    let formatDate = epochToHuman.getDate() + "-"+ epochToHuman.getMonth()+ "-" +epochToHuman.getFullYear();
    return formatDate
  })
  const LabelsData= chartData.map(item => {
    return item[1]
  })

  useEffect(() => {
    (async () => {
      try {
        const response = await getDetail(params.key)
        const chartValues = Object.entries(response.values).slice(-4)
        const priceValue = chartValues[chartValues.length -1][1]
        setValue(priceValue)
        setCharData(chartValues)
        setDetailData(response)
      } catch (error) {
        navigation.goBack()
      }
    }

    )()
  }, [params])
  
  if(!detailData) return null;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Detalles 💸</Text>
        <Text style={styles.subtitle}>Detalles del producto</Text>
      </View>
      <FavoriteCard name={detailData.key} description={detailData.name} value={value} />

      <View 
      	onLayout={({ nativeEvent }) => setChartParentWidth(nativeEvent.layout.width)}
	      style={styles.chartWrapper}
      >
        <LineChart
          data={{
            labels: Labels,
            datasets: [
              {
                data: LabelsData
              }
            ]
          }}
          width={chartParentWidth}
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#6b76fb",
            backgroundGradientFrom: "#6b76fb",
            backgroundGradientTo: "#6b76fb",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#3b4afd"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 18,
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  chartWrapper: {
    marginHorizontal: 25,
    borderRadius: 16
  },
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

export default DetailScreen