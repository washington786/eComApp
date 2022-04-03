import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const OutlinedButton = ({text, onPress}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default OutlinedButton

const styles = StyleSheet.create({
    container: {
        marginHorizontal:5,
        marginVertical:15
    },
    button: {
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems: 'center',
        color: 'white',
        padding: 10,
        borderRadius:8,
        borderWidth:1,
        borderColor: 'red'
    },
    buttonText:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        textTransform:'uppercase'
    }
})