import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';
import HomeStackNavigation from './src/navigation/HomeStackNavigation';
import ProfileStackNavigation from './src/navigation/ProfileStackNavigation';


export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
