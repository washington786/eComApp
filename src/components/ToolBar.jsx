import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const ToolBar = ({ customStyle,toolBarText }) => {

    const navigation = useNavigation();

    const goBack = ()=>{
        navigation.goBack();
    }

    return (
        <View style={[styles.container, customStyle]}>
            <TouchableOpacity style={{justifyContent:'flex-start'}} onPress={goBack}>
                <Icons name="keyboard-backspace" size={23} color="grey" style={{textAlign:'left'}}/>
            </TouchableOpacity>
            
            <Text style={{textAlign:'center', fontSize:16, fontWeight: 'bold', width:'85%',textTransform:'uppercase', color:'grey'}}>{toolBarText}</Text>
        </View>
    )
}

export default ToolBar

const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    }
})