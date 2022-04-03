import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomRouter from '../MainBottomNav/BottomRouter';

const Stack = createStackNavigator();

const StackNavScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen component={BottomRouter} name="bottomTabs"/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavScreen
