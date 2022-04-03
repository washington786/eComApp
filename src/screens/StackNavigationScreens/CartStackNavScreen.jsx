import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CartScreenNav from '../Navigation/Screens/CartScreenNav';
import AddressFormScreen from '../AddressFormScreen/AddressFormScreen';

const Stack = createStackNavigator();

const CartStackNavScreen = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen component={CartScreenNav} name="shoppingCartScreen"/>
          <Stack.Screen component={AddressFormScreen} name="addressFormScreen"/>
      </Stack.Navigator>
    </>
  )
}

export default CartStackNavScreen
