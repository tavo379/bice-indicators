import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DetailScreen from '../screens/Detail';
import ProfileScreen from  '../screens/Profile'

const Stack = createNativeStackNavigator();

const  ProfileStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStackNavigation;