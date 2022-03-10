import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import HomeStackNavigation from './TabNavigation'
import ProfileStackNavigation from './ProfileStackNavigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Home" 
        component={HomeStackNavigation} 
        options = {{
          tabBarLabel:  "Inicio",
          tabBarIcon: ({ color, size}) => (
            <Icon name="home" color={color}  size={size} />
          ),
        }}
      />
    
      <Tab.Screen 
        name="Profile" 
        component={ProfileStackNavigation} 
        options = {{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size}) => (
            <Icon name="user" color={color}  size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation