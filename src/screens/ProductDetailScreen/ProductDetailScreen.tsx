import { StyleSheet, Text, View,Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import React,{useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import { Divider } from 'react-native-paper';
import ProductCarousel from '../../components/ProductCarousel';

import {useRoute,useNavigation} from '@react-navigation/native';
import ToolBar from '../../components/ToolBar';

// amplify imports
import {Auth,DataStore} from 'aws-amplify';
import {CartProduct} from '../../models'
import { Product } from '../../models';

const ProductDetailScreen = () => {

    const route = useRoute();
    const id = route.params.id;
    const title = route.params.title;
    const image = route.params.image;
    const description = route.params.description;
    const price = route.params.price;
    const oldPrice = route.params.oldPrice;
    const avgRating = route.params.avgRating;
    const rating = route.params.rating;
    const options = route.params.options;
    const images = route.params.images;

    const w= Dimensions.get('screen').width;
    const h = Dimensions.get('screen').height;

    // hook for product item color 
    // const [selectedOption, setSelectedOption] = useState<String|null>(null);
    const [selectedOption, setSelectedOption] = useState(options? options[0]:null);
    // quantity hook
    const [quantity,setQuantity] = useState(1);

    // add product to cart method
    const addToCart= async()=>{
        const currentUser = await Auth.currentAuthenticatedUser();

        if(!currentUser){
            return;
        }
       
        const newCartProduct=new CartProduct({
            userSub: currentUser.attributes.sub,
            options: selectedOption,
            quantity: quantity,
            productID: id,
            
        })

        DataStore.save(newCartProduct);
    }
    

    // querying data for products using a useEffect
    // const [product,setProduct] = useState<Product | undefined>(undefined);

    // useEffect(()=>{

    //     if(!route.params?.id){
    //         return;
    //     }

    //     DataStore.query(Product,route.params.id).then(
    //         setProduct
    //     );

    //     // returning activity indicator for null product details
    //     if(!product){
    //         <ActivityIndicator/>
    //     }

    //     useEffect(()=>{
    //         if(product?.options){
    //             setSelectedOption(product.options[0])
    //         }
    //     })

    // },[route.params?.id]);

  return (
    <SafeAreaView style={{height:h, width:w, position:'relative'}}> 

    <ToolBar toolBarText={"PRODUCT DETAILS"} customStyle={{backgroundColor:'#fff'}}/>

    <ProductCarousel images={images}/>

        <ScrollView style={{height:h, width:w}}>
            <View style={{paddingHorizontal:10, paddingBottom:40}}>

                {/* product name */}
                <Text style={{marginVertical:10,fontWeight: 'bold'}}>
                    {title}
                </Text>

                {/* price */}
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'grey'}}>Was <Text style={styles.oldPrice}>R{oldPrice.toFixed(2)}</Text></Text>
                    <Text style={{color:'black', paddingHorizontal:5, fontWeight: 'bold'}}>And Now R{price.toFixed(2)}</Text>
                </View>


                <View style={{backgroundColor:'#f1f1f1', elevation:1, marginVertical:5, padding:4}}>
                    <Text style={{paddingTop:10, fontWeight: 'bold', fontSize:18}}>Product Details</Text>
                    <Divider style={{marginHorizontal:0, paddingTop:1}}/>

                    <Text style={{paddingVertical:2, lineHeight:20}}>{description}</Text>
                    {/* <Divider style={{marginHorizontal:0}}/> */}
                </View>

                {/* picker for product item colors and quantity */}
                <View style={{backgroundColor:'#f1f1f1', elevation:1, marginVertical:5}}>
                    <Text style={{color:'black', fontWeight: 'bold', paddingHorizontal:6, paddingVertical:5}}>Select Product Color</Text>

                    <Picker 
                        selectedValue={selectedOption}
                        onValueChange={(val)=>setSelectedOption(val)}
                        >
                        {options.map(option=>(
                            <Picker.Item label={option} value={option} />)
                        )}
                        
                    </Picker>

                    <Divider style={{marginHorizontal:5}}/>

                    <Text style={{color:'black', fontWeight: 'bold', paddingHorizontal:6, paddingVertical:5}}>Select Product QTy</Text>
                    {/* quantity selector */}
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                </View>

                {/* button */}
                <View style={{paddingBottom:80}}>
                    <Button text={"Add To Cart"} onPress={addToCart} customStyle/>
                    <Button text={"BUY NOW"} onPress={() =>{}} customStyle={{marginTop:-6}}/>
                </View>

            </View>
        </ScrollView>

    </SafeAreaView>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    oldPrice: {
        textDecorationLine:'line-through',
        color: 'red',
    }
})