import { Image, StyleSheet, Text, View ,Dimensions,TouchableOpacity} from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const w = Dimensions.get('screen').width;

interface ProductItemProps{
    item:{
        id: string;
        title: string;
        image: string;
        avgRating?: number;
        ratings?: number;
        price: number;
        oldPrice?: number;
        images: string[];
        description?: string;
        options?: string[];
    };
}

const SearchProductCard = ({item}: ProductItemProps) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=>{
        navigation.navigate('productDetailsScreenStack',
        {
            id: item.id,
            title: item.title,
            images: item.images,
            image: item.image,
            price: item.price,
            oldPrice: item.oldPrice,
            description: item.description,
            avgRating: item.avgRating,
            ratings: item.ratings,
            options: item.options,
        });
    }} style={styles.card}>
        {/* image view */}
        <View style={styles.imageCard}>
            <Image source={{uri:item.image}} style={styles.image}/>
        </View>
        {/* content view */}
        <View style={{flex:3, paddingHorizontal:2, position: 'relative', height: '100%',paddingTop: 7}}>
            <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
            {/* <Text style={styles.price}>from R{item.price.toFixed(2)}
                {item.oldPrice && (<Text style={{color:'red', textDecorationLine: 'line-through', paddingHorizontal:6}}>  R{item.oldPrice.toFixed(2)}</Text>)}
            </Text> */}
            <Text style={styles.price}>
            from R{item.price.toFixed(2)}
            {item.oldPrice && (
                <Text style={{color:'red', textDecorationLine: 'line-through', paddingHorizontal:6}}> R{item.oldPrice.toFixed(2)}</Text>
            )}
            </Text>
            <View style={styles.ratingCard}>
               
                {/* <FontAwesome name="star" size={20} color="gold" />
                <Text style={styles.rating}>{item.ratings} reviews</Text> */}
                {[0, 0, 0, 0, 0].map((el, i) => (
                    <FontAwesome
                    key={`${item.id}-${i}`}
                    style={{flexDirection:'row'}}
                    name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                    size={10}
                    color={'#e47911'}
                    />
                ))}
                <Text style={styles.rating}>{item.ratings} reviews</Text>
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
        flexDirection:'row',
        alignItems: 'center',
        position: 'absolute',
        bottom:0,
        right: 5,
        backgroundColor:'#eee',
        borderBottomRightRadius:5,
        width: 120,
        height: 35,
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
        fontSize:8,
        paddingLeft:5
    }
})