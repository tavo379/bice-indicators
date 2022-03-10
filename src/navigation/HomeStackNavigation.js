import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';
import ProfileScreen from '../screens/Profile';

const Stack = createNativeStackNavigator();

const  HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigation;