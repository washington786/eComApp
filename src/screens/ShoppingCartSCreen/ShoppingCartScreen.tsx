import { FlatList, StyleSheet, View,Text,Dimensions, ActivityIndicator} from 'react-native'
import React,{useState,useEffect} from 'react'
import {SafeAreaView } from 'react-native-safe-area-context'
import CartItemCard from '../../components/CartItemCard'
import Cart from '../../data/Cart'
import { Divider } from 'react-native-paper'
import Button from '../../components/Button'

import { useNavigation } from '@react-navigation/native';
const h = Dimensions.get('screen').height;

// amplify
import {Auth,DataStore} from 'aws-amplify';
import {CartProduct} from '../../models'
import { Product } from '../../models';

const ShoppingCartScreen = () => {

    const [cartProductItem,setCartProductItem] = useState<CartProduct[]>([])
    // const [loading,setLoading] = useState(true);

    // const totalPrice = Cart.reduce((sumPrice,item)=>(
    //     sumPrice + item.item.price * item.quantity
    // ),0);

    const totalPrice = 0;
    useEffect(()=>{
       
        const fetchCartData = async()=>{
            // TODO: FOR THE ADDED CART ITEMS
            // setLoading(true)
            DataStore.query(CartProduct).then(setCartProductItem);
        }
        fetchCartData();

    },[])

    useEffect(()=>{
        // filter products that are added into cart do have a product
        if(cartProductItem.filter(cartProd => cartProd.product).length !==0){
            // setLoading(false)
            return;
        }
        // query all products added into cart
        const fetchAllProducts = async ()=>{
            const productsInCart = await Promise.all(
                cartProductItem.map(item=>DataStore.query(Product,item.productID))
            );

             // assign products added to the cart into cart items
            setCartProductItem(currentCartProductItem=>(currentCartProductItem.map(cartItem=>({
                ...cartItem,
                product: productsInCart.find(
                    product=>product.id == cartItem.id
                    )
            }))))
        }
        
        fetchAllProducts();

    },[cartProductItem])

    const navigation = useNavigation();

  return (
    <SafeAreaView>
        <View style={{position:'relative', height:h, width:'100%'}}>

            <View style={styles.bottomCon}>
                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'space-between', marginHorizontal:14}}>
                        <Text style={styles.total}>SubTotal Price ({cartProductItem.length} items) </Text>
                        {/* <Divider style={{width:120}}/> */}
                        <Text style={styles.totalPrice}>R{totalPrice.toFixed(2)}</Text>
                    </View>

                    <View>
                        <Button text={"Proceed To checkout"} customStyle onPress={() =>{navigation.navigate('addressFormScreen')}}/>
                    </View>

            </View>

            <Text style={{fontWeight: 'bold', color: 'grey', marginHorizontal:15,textDecorationLine:'underline'}}>You have {cartProductItem.length} items</Text>

            <FlatList
                data={cartProductItem}
                renderItem={({item})=>(
                    <CartItemCard
                        product={item}
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