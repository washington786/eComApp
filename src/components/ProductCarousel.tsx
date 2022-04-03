import React,{useCallback} from 'react'
import {View,Text,StyleSheet,Dimensions,FlatList,Image} from 'react-native';

const w = Dimensions.get('screen').width;

const ProductCarousel = ({images}:{images:string[]}) => {

  const [activeImage,setActiveImage] = React.useState(0)

    const itemChangedScroll=useCallback(({viewableItems})=>{
        if(viewableItems.length>0){
            setActiveImage(viewableItems[0].index || 0)
        }
        console.log(viewableItems);
    },[]);

  return (
    <View style={{padding:5}}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(id)=>id}
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

      <View style={styles.dotsCon}>
        {
          images.map((images,index)=>(<View key={images} style={[styles.dots, {backgroundColor: index==activeImage? '#051367': 'transparent'}]}/>))
        }
      </View>
    </View>
  )
}

export default ProductCarousel

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