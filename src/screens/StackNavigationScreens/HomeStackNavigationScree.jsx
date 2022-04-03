import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../SearchScreen/SearchScreen';
import ProductDetailScreen from '../ProductDetailScreen/ProductDetailScreen';

const Stack = createStackNavigator();

const HomeStackNavigationScreen = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen component={SearchScreen} name="homeScreenStack"/>
          <Stack.Screen component={ProductDetailScreen} name="productDetailsScreenStack"/>
      </Stack.Navigator>
    </>
  )
}

export default HomeStackNavigationScreen
