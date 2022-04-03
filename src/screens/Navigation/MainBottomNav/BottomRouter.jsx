import React from 'react'
import Icons from 'react-native-vector-icons/MaterialIcons'

// import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreenNav from '../Screens/HomeScreenNav';
import CartScreenNav from '../Screens/CartScreenNav';
import AccountScreenNav from '../Screens/AccountScreenNav';
import HomeStackNavigationScreen from '../../StackNavigationScreens/HomeStackNavigationScree';
import CartStackNavScreen from '../../StackNavigationScreens/CartStackNavScreen';

const Tabs = createBottomTabNavigator();

const BottomRouter = () => {
  return (
    <>
        <Tabs.Navigator
          screenOptions={{
            tabBarActiveTintColor:'#03045E',
            headerShown:false,
            tabBarStyle:{
              paddingVertical:10,
              paddingHorizontal:10,
            },
            "tabBarActiveTintColor":'#03045E',
        }}
        >

        <Tabs.Screen component={HomeStackNavigationScreen} name="HomeScreenBottom" options={{
            tabBarIcon:({color})=>(
                <Icons name='dashboard' size={30} color={color} style={{paddingVertical:0}}/>
            ),
            tabBarLabel:'Home',
            headerShown:false,
        }}/>
        
        <Tabs.Screen component={CartStackNavScreen} name="CartScreenBottom" options={{
            tabBarIcon:({color})=>(
                <Icons name='shopping-cart' size={30} color={color} style={{paddingVertical:0}}/>
            ),
            tabBarLabel:'My Cart',
            headerShown:false,
        }}/>

        <Tabs.Screen component={AccountScreenNav} name="AccountScreenBottom" options={{
            tabBarIcon:({color})=>(
                <Icons name='person' size={30} color={color} style={{paddingVertical:0}}/>
            ),
            tabBarLabel:'My Account',
            headerShown:false,
        }}/>

        <Tabs.Screen component={AccountScreenNav} name="AccountScreenBottom2" options={{
            tabBarIcon:({color})=>(
                <Icons name='menu' size={30} color={color} style={{paddingVertical:0}}/>
            ),
            tabBarLabel:'Other Services',
            headerShown:false,
        }}/>

        </Tabs.Navigator>
    </>
  )
}

export default BottomRouter
