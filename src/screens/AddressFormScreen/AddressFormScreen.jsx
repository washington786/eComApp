import { StyleSheet, Text, View,Dimensions, ScrollView, TextInput,Alert,KeyboardAvoidingView} from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Divider } from 'react-native-paper';
import Button from '../../components/Button';

const w= Dimensions.get('screen').width;
const h= Dimensions.get('screen').height;

const AddressFormScreen = () => {

    const [selectedProvince, setSelectedProvince] = useState();
    const [fullNames, setFullNames] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [street,setStreet] = useState('');
    const [suburb,setSuburb] = useState('');
    const [city,setCity] = useState('');
    const [code,setCode] = useState('');
    const [email,setEmail] = useState('');
    const [town,setTown] = useState('');

    // method
    const continueToCheckOut = ()=>{
        if(!fullNames){
            Alert.alert('Please enter your full name');
            return;
        }
        if(!phoneNo){
            Alert.alert('Please enter your full name');
            return;
        }
        if(!email){
            Alert.alert('Please enter your full name');
            return;
        }
        if(!street){
            Alert.alert('Please enter your full name');
            return;
        }
        if(!suburb){
            Alert.alert('Please enter your full name');
            return;
        }
        if(!city){
            Alert.alert('Please enter your full name');
            return;
        }
        if(!town){
            Alert.alert('Please enter your full name');
            return;
        }
        if(!code){
            Alert.alert('Please enter your full name');
            return;
        }

        if(fullNames|phoneNo|email|street|suburb|city|town|code){
            console.warn('All fields filled now!!')
        }
        
    }

  return (
    <SafeAreaView>
         <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View>
                    <ScrollView style={{ height:h, backgroundColor:'white'}}>

                        <View style={{ height:h, marginHorizontal:15,marginTop:20 }}>

                            <Text>Select Province</Text>

                            <View style={styles.con}>
                                <Picker
                                    selectedValue={selectedProvince}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedProvince(itemValue)
                                    }>
                                    <Picker.Item label="Eastern Cape" value="Eastern Cape" />
                                    <Picker.Item label="Free State" value="Free State" />
                                    <Picker.Item label="Gauteng" value="Gauteng" />
                                    <Picker.Item label="KwaZule-Natal" value="KwaZule-Natal"/>
                                    <Picker.Item label="Limpopo" value="Limpopo"/>
                                    <Picker.Item label="Mpumalanga" value="Mpumalanga"/>
                                    <Picker.Item label="Northern Cape" value="Northern Cape"/>
                                    <Picker.Item label="North West" value="North West"/>
                                    <Picker.Item label="Western Cape" value="Western Cape"/>
                                </Picker>
                            </View>
                            
                            {/* names */}
                            <View style={styles.input}>
                                <Icon name="person" size={20} color={'grey'} style={styles.iconStyle}/>
                                <TextInput placeholder="Full Names" value={fullNames} onChangeText={text=>setFullNames(text)} style={styles.inputs} />
                            </View>

                            {/* phone */}
                            <View style={styles.input}>
                                <Icon name="phone" size={20} color={'grey'} style={styles.iconStyle}/>
                                <TextInput placeholder="Phone Number" value={phoneNo} onChangeText={text=>setPhoneNo(text)} style={styles.inputs} keyboardType={'phone-pad'}/>
                            </View>

                            {/* email */}
                            <View style={styles.input}>
                                <Icon name="email" size={20} color={'grey'} style={styles.iconStyle}/>
                                <TextInput placeholder="Email address" value={email} onChangeText={text=>setEmail(text)} style={styles.inputs} keyboardType={'email-address'}/>
                            </View>

                            {/* addresss */}
                            <Text>Address Line</Text>
                            <View style={[styles.input,{marginBottom:0,flexDirection:'column', alignItems:'flex-start',height:80}]}>
                                <TextInput placeholder="Street address or P.O Box" value={street} onChangeText={text=>setStreet(text)} style={[styles.inputs,{height:40}]}/>
                                <Divider style={{width: '100%'}}/>
                                <TextInput placeholder="Suburb Name" value={suburb} onChangeText={text=>setSuburb(text)} style={[styles.inputs,{height:40}]}/>
                            </View>

                            {/* city */}
                            <View style={[styles.input,{marginTop:20}]}>
                                <Icon name="location-city" size={20} color={'grey'} style={styles.iconStyle}/>
                                <TextInput placeholder="City Name" value={city} onChangeText={text=>setCity(text)} style={styles.inputs}/>
                            </View>

                            {/* town */}
                            <View style={[styles.input,{marginTop:5}]}>
                                <Icon name="location-city" size={20} color={'grey'} style={styles.iconStyle}/>
                                <TextInput placeholder="Town Name" value={town} onChangeText={text=>setTown(text)} style={styles.inputs}/>
                            </View>

                            {/* code */}
                            <View style={[styles.input,{marginTop:5, width:120}]}>
                                <Icon name="code" size={20} color={'grey'} style={styles.iconStyle}/>
                                <TextInput placeholder="ZIP Code" value={code} onChangeText={text=>setCode(text)} style={styles.inputs}/>
                            </View>

                            <View>
                                <Button text="Continue" onPress={continueToCheckOut}/>
                            </View>

                        </View>

                    </ScrollView>
                </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default AddressFormScreen

const styles = StyleSheet.create({
    con:{
        backgroundColor:'#f1f1f1', 
        elevation:1,
        padding: 2,
        borderRadius:4,
        marginBottom:10
    },
    input:{
        backgroundColor:'#f1f1f1', 
        elevation:1,
        height: 45,
        borderRadius:4,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:20
    },
    inputs:{
        paddingHorizontal:5
    },
    iconStyle:{
        paddingHorizontal:5
    }
})