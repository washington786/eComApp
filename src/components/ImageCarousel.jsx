import { FlatList, Image, StyleSheet, View, Dimensions} from 'react-native'
import React,{useCallback} from 'react';

const w = Dimensions.get('screen').width;

const ImageCarousel = ({images}) => {

    const [activeImage,setActiveImage] = React.useState(0)

    const itemChangedScroll=useCallback(({viewableItems})=>{
        if(viewableItems.length>0){
            setActiveImage(viewableItems[0].index || 0)
        }
        console.log(viewableItems);
    },[]);

  return (
    
    <View
        style={{padding:5}}
        >
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={({id})=>id}
        data={images}
        renderItem={({item})=>(
            <Image
                source={{uri:item}}
                style={[{resizeMode:'cover', height: 200, margin:12},{width:w-40}]}
            />
        )}
        snapToAlignment={'center'}
        snapToInterval={w-20}
        decelerationRate={'fast'}
        viewabilityConfig={{
            viewAreaCoveragePercentThreshold:50
        }}
        onViewableItemsChanged={itemChangedScroll}
      />
      
      {/* images index using dots */}
      <View style={styles.dotsCon}>
        {
            images.map((images,index)=>(<View style={[styles.dots, {backgroundColor: index==activeImage? '#051367': 'transparent'}]}/>))
        }
      </View>
    </View>
  )
}

export default ImageCarousel

const styles = StyleSheet.create({
    dots:{
        width: 10, 
        height: 10,
        borderRadius: 15,
        borderWidth:1,
        borderColor: '#051367',
        marginHorizontal:3,
        backgroundColor: '#051367'
    },
    dotsCon:{
        flexDirection:'row',
        justifyContent: 'center',
    }
})