import { FlatList, StyleSheet, View,Text,Dimensions} from 'react-native'
import React from 'react'
import {SafeAreaView } from 'react-native-safe-area-context'
import CartItemCard from '../../components/CartItemCard'
import Cart from '../../data/Cart'
import { Divider } from 'react-native-paper'
import Button from '../../components/Button'

import { useNavigation } from '@react-navigation/native';
const h = Dimensions.get('screen').height;

const ShoppingCartScreen = () => {

    const totalPrice = Cart.reduce((sumPrice,item)=>(
        sumPrice + item.item.price * item.quantity
    ),0);

    const navigation = useNavigation();

  return (
    <SafeAreaView>
        <View style={{position:'relative', height:h, width:'100%'}}>

            <View style={styles.bottomCon}>
                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'space-between', marginHorizontal:14}}>
                        <Text style={styles.total}>SubTotal Price ({Cart.length} items) </Text>
                        {/* <Divider style={{width:120}}/> */}
                        <Text style={styles.totalPrice}>R{totalPrice.toFixed(2)}</Text>
                    </View>

                    <View>
                        <Button text={"Proceed To checkout"} onPress={() =>{navigation.navigate('addressFormScreen')}}/>
                    </View>

            </View>

            <Text style={{fontWeight: 'bold', color: 'grey', marginHorizontal:15,textDecorationLine:'underline'}}>You have {Cart.length} items</Text>

            <FlatList
                data={Cart}
                keyExtractor={({item})=>item.id}
                renderItem={({item})=>(
                    <CartItemCard
                        title={item.item.title}
                        quantity={item.quantity}
                        color={item.option}
                        price={item.item.price}
                        rating={item.item.ratings}
                        image = {item.item.image}
                    />
                )}
            />

        </View>
    </SafeAreaView>
  )
}

export default ShoppingCartScreen

const styles = StyleSheet.create({
    bottomCon:{
        height: 90,
        backgroundColor: 'transparent',
        marginHorizontal:2,
        padding: 5,
        marginTop: 20
    },
    total:{
        fontSize:14,
        fontWeight: 'bold',
        // marginHorizontal:8
    },
    totalPrice:{
        fontSize:14,
        fontWeight: 'bold',
        color: 'red'
    }
})