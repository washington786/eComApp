import { StyleSheet, Text, View, Image} from 'react-native'
import React,{useState} from 'react'
import { Divider } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from './QuantitySelector';
import OutlinedButton from './OutlinedButtons';

interface cartItemProps{
    product:{
        title: string,
        image: string,
        price: number,
        quantity: number,
        options: string,
    }
}
const CartItemCard = ({product}: cartItemProps) => { 
    const [cartQty,setQty] = useState(product.quantity)

  return (
    <View style={{position: 'relative', height: 170, borderBottomColor:'grey', borderBottomWidth:0.5, marginHorizontal:10, marginBottom:5}}>
        <View style={styles.card}>

            <View style={styles.imageCard}>
                <Image source={{uri:product.image}} style={styles.image}/>
            </View>

            <View style={{flex:3, paddingHorizontal:2, position: 'relative', height: '100%',paddingTop: 7}}>
                <Text style={styles.title} numberOfLines={3}>{product.title}</Text>
                <Text style={styles.price}>Price: {"\t"}R{product.price}</Text>
                <Divider/>
                <Text style={styles.qty}>Quantity: {"\t"}{cartQty}</Text>
                <Divider/>
                {product.options &&
                <Text style={styles.qty}>Options: {"\t"}{product.options}</Text>}
            </View>
            
        </View>
        {/* quantity buttons */}
        <View style={styles.quantity}>
                <View style={{marginTop:0}}>
                <QuantitySelector quantity={cartQty} setQuantity={setQty}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <OutlinedButton text={"save for later"} onPress={() =>{}}/>
                    <OutlinedButton text={"Delete"} onPress={() =>{}}/>
                </View>
        </View>
        <Divider style={{position: "absolute", bottom: 0}}/>
    </View>
  )
}

export default CartItemCard

const styles = StyleSheet.create({
    card:{
        height: 120,
        // backgroundColor: '#F7F7F7',
        // elevation: 1,
        // marginHorizontal:8,
        marginVertical:8,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        paddingVertical:3,
        width: 140,
        height: 100,
        resizeMode:'contain',
    },
    imageCard:{
        paddingVertical:6,
        marginHorizontal:-20,
        alignItems:'center',
        height:'100%',
        justifyContent:'center',
        flex:2,
    },
    ratingCard:{
        flexDirection:'column',
        alignItems: 'center',
        position: 'absolute',
        bottom:0,
        right: 5,
        backgroundColor:'#eee',
        borderBottomRightRadius:5,
        width: 60,
        height: 40,
        justifyContent:'center'
    },
    title:{
        paddingVertical:2,
        fontSize:14,
        fontWeight:'bold',
    },
    price:{
        fontSize:14, 
        color:'red',
        fontWeight: 'bold'
    },
    rating:{
        color: 'grey',
        fontSize:8
    },
    qty:{
        fontSize:14, 
        color:'grey',
        paddingTop:4
    },
    quantity:{
        position: 'absolute',
        bottom: -10,
        left: 5,
        flexDirection: 'row',
        alignItems: 'center',
    }
})