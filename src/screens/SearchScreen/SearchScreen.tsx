import { StyleSheet, View, Dimensions, Text, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchProductCard from '../../components/SearchProductCard'
// import ProductItem from '../../data/Product';
import SearchCard from '../../components/SearchCard';

// amplify
import {DataStore} from 'aws-amplify';
import {Product} from '../../models'

// declaring screen sizes
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

const SearchScreen = () => {
  const [searchValue,setSearchValue] = useState('');

  // querying of product
  const [products,setProducts] = useState<Product[]>([]);

  useEffect(()=>{
      const fetchData = async ()=>{
        const res = await DataStore.query(Product);
        setProducts(res)
      }
      fetchData();
  },[]);

  return (
    <SafeAreaView style={{height:h, width:w,paddingHorizontal:0}}>
      <View style={styles.container}>
        {/* search component */}
        <SearchCard searchValue={searchValue} setSearchValue={setSearchValue}/>

        {/* products list */}
        <Text style={{marginHorizontal:8, marginVertical:10, fontWeight: 'bold', fontSize: 15}}>Recommended Products</Text>
        <FlatList
        showsVerticalScrollIndicator={false}
          // keyExtractor={(item)=>item.id}
          data = {products}
          renderItem={({item})=>(
            <SearchProductCard item={item}/>
          )}
        
        />
        
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    height:h,
    width:'100%',
    paddingBottom:130
  }
})