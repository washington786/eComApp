import { StyleSheet, View, Dimensions, Text, FlatList } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchProductCard from '../../components/SearchProductCard'
import Product from '../../data/Product';
import SearchCard from '../../components/SearchCard';

// declaring screen sizes
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

const SearchScreen = () => {
  const [searchValue,setSearchValue] = useState('');
  return (
    <SafeAreaView style={{height:h, width:w,paddingHorizontal:0}}>
      <View style={styles.container}>
        {/* search component */}
        <SearchCard searchValue={searchValue} setSearchValue={setSearchValue}/>

        {/* products list */}
        <Text style={{marginHorizontal:8, marginVertical:10, fontWeight: 'bold', fontSize: 15}}>Recommended Products</Text>
        <FlatList
        showsVerticalScrollIndicator={false}
          keyExtractor={(item)=>item.id}
          data = {Product}
          renderItem={({item})=>(
            <SearchProductCard
              name={item.title}
              image={item.image}
              ratings = {item.ratings}
              price ={item.price}
              oldPrice = {item.oldPrice}
              averageRatings ={item.avgRating}
              
            />
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