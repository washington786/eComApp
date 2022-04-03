import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ShoppingCartScreen from '../../ShoppingCartSCreen/ShoppingCartScreen'

const CartScreenNav = () => {
  return (
    <SafeAreaView>
      <ShoppingCartScreen/>
    </SafeAreaView>
  )
}

export default CartScreenNav

const styles = StyleSheet.create({})