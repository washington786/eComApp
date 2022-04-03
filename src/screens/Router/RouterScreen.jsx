// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from '../ProductDetailScreen/ProductDetailScreen';

const Stack = createStackNavigator();

const RouterScreen = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen component={ProductDetailScreen} name="details"/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RouterScreen

// const styles = StyleSheet.create({})