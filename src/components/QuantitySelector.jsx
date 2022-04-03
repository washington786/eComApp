import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'

const QuantitySelector = ({quantity,setQuantity}) => {

  const onMinus=()=>{
    setQuantity(Math.max(0,quantity-1));
  }

  const onPlus=()=>{
    setQuantity(quantity+1);
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={onMinus} style={styles.Btn}>

          <Text style={{fontSize:18, fontWeight: 'bold'}}>-</Text>

      </TouchableOpacity>

      <View style={{backgroundColor:'#eee',elevation:2, width:30, height:30, borderRadius:100, alignItems:'center', justifyContent: 'center', paddingHorizontal:8}}>
            <Text style={{color:'#0E185F'}}>{quantity}</Text>
      </View>

      <TouchableOpacity onPress={onPlus} style={styles.Btn}>

          <Text style={{fontSize:18, fontWeight: 'bold'}}>+</Text>

      </TouchableOpacity>

    </View>
  )
}

export default QuantitySelector

const styles = StyleSheet.create({
    container: {
        marginHorizontal:0,
        marginVertical:4,
        flexDirection:'row',
    },
    Btn:{
        paddingVertical:5,
        backgroundColor: '#ddd',
        paddingHorizontal: 8,
        marginHorizontal:8,
        width:35,
        alignItems: 'center',
        justifyContent:'center'
    }
})