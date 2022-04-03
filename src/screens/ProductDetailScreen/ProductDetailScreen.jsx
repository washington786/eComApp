import { StyleSheet, Text, View,Dimensions, ScrollView } from 'react-native'
import React,{useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import ProductItem from '../../data/ProductItem';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import { Divider } from 'react-native-paper';
import ProductCarousel from '../../components/ProductCarousel';

const w= Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

const ProductDetailScreen = () => {

    // hook for product item color 
    const [selectedOption, setSelectedOption] = useState(ProductItem.options? ProductItem.options[0]:null);
    // quantity hook
    const [quantity,setQuantity] = useState(1);

  return (
    <SafeAreaView style={{height:h, width:w, position:'relative'}}>
        
        {/* product image carousel */}
        <ProductCarousel images={ProductItem.images}/>

        <ScrollView style={{height:h, width:w}}>
            <View style={{paddingHorizontal:10, paddingBottom:40}}>

                {/* product name */}
                <Text style={{marginVertical:10,fontWeight: 'bold'}}>
                    {ProductItem.title}
                </Text>

                {/* price */}
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'grey'}}>Was <Text style={styles.oldPrice}>R{ProductItem.oldPrice}</Text></Text>
                    <Text style={{color:'black', paddingHorizontal:5, fontWeight: 'bold'}}>And Now R{ProductItem.price}</Text>
                </View>


                <View style={{backgroundColor:'#f1f1f1', elevation:1, marginVertical:5, padding:4}}>
                    <Text style={{paddingTop:10, fontWeight: 'bold', fontSize:18}}>Product Details</Text>
                    <Divider style={{marginHorizontal:0, paddingTop:1}}/>

                    <Text style={{paddingVertical:2, lineHeight:20}}>{ProductItem.description}</Text>
                    {/* <Divider style={{marginHorizontal:0}}/> */}
                </View>

                {/* picker for product item colors and quantity */}
                <View style={{backgroundColor:'#f1f1f1', elevation:1, marginVertical:5}}>
                    <Text style={{color:'black', fontWeight: 'bold', paddingHorizontal:6, paddingVertical:5}}>Select Product Color</Text>

                    <Picker 
                        selectedValue={selectedOption}
                        onValueChange={(val)=>setSelectedOption(val)}
                        >
                        {ProductItem.options.map(options=>(
                            <Picker.Item key={({id})=>id}label={options} value={options} />)
                        )}
                        
                    </Picker>

                    <Divider style={{marginHorizontal:5}}/>

                    <Text style={{color:'black', fontWeight: 'bold', paddingHorizontal:6, paddingVertical:5}}>Select Product QTy</Text>
                    {/* quantity selector */}
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                </View>

                {/* button */}
                <View style={{paddingBottom:80}}>
                    <Button text={"Add To Cart"} onPress={() =>{}}/>
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