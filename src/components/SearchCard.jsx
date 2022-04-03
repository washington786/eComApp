import React,{useState} from 'react'
import FIcons from 'react-native-vector-icons/Feather';
import { StyleSheet, View, TextInput,Dimensions} from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const SearchCard = ({searchValue,setSearchValue}) => {

  return (
    <View style={styles.searchCon}>

        <FIcons name='search' size={25} color='grey' style={{paddingHorizontal:5}}/>

        <TextInput 
            style={{flex:1, paddingHorizontal:10}} 
            placeholder="What would you like to buy today?"
            editable={true} 
            selectTextOnFocus={true}
            autoFocus={false}
            value = {searchValue}
            onChangeText={text=>setSearchValue(text)}
        />
    </View>
  )
}

export default SearchCard

const styles = StyleSheet.create({
    searchCon:{
        // width: width*0.95,
        marginVertical:10,
        padding: 8,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
        height: height*0.055,
        borderRadius:2,
        elevation:2,
        marginHorizontal:8
    }
})