import { Image, StyleSheet, Text, View ,Dimensions,TouchableOpacity} from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const w = Dimensions.get('screen').width;

const SearchProductCard = ({
    name,
    image,
    price,
    ratings, 
    oldPrice,
    averageRatings,
    onPress
}) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=>{
        navigation.navigate('productDetailsScreenStack')
    }} style={styles.card}>
        {/* image view */}
        <View style={styles.imageCard}>
            <Image source={{uri:image}} style={styles.image}/>
        </View>
        {/* content view */}
        <View style={{flex:3, paddingHorizontal:2, position: 'relative', height: '100%',paddingTop: 7}}>
            <Text style={styles.title} numberOfLines={3}>{name}</Text>
            <Text style={styles.price}>from R{price}
                {oldPrice && <Text style={{color:'red', textDecorationLine: 'line-through', paddingHorizontal:6}}>  R{oldPrice}</Text>}
            </Text>
            <View style={styles.ratingCard}>
               
                <FontAwesome name="star" size={20} color="gold" />
                <Text style={styles.rating}>{ratings} reviews</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default SearchProductCard

const styles = StyleSheet.create({
    card:{
        height: 120,
        backgroundColor: '#F7F7F7',
        elevation: 1,
        marginHorizontal:8,
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
        marginHorizontal:8,
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
        fontSize:16,
        fontWeight:'bold',
    },
    price:{
        fontSize:14, 
        color:'grey',
    },
    rating:{
        color: 'grey',
        fontSize:8
    }
})