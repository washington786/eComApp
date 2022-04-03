import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({text, onPress,customStyle}) => {
  return (
    <View style={[styles.container,customStyle]}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        marginHorizontal:15,
        marginVertical:15
    },
    button: {
        backgroundColor: '#051367',
        justifyContent:'center',
        alignItems: 'center',
        color: 'white',
        padding: 10,
        borderRadius:2
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform:'uppercase'
    }
})