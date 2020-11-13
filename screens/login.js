import React from 'react';
import {Text, View, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'

export default function Login(props){
    return(
        <View style={{flex:1, backgroundColor: '#000'}}>
        <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#000" translucent = {true}/>
        <ScrollView style={{backgroundColor: '#000'}}>
            <View  style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flex:1,marginTop:50}}>
                <Image source={require('../assets/logo-rimo.png')} />
                <TextInput autoCapitalize='none' keyboardType='email-address' style={{height:40, color:'#000', borderWidth:2, borderRadius:10, borderStyle:'solid', textAlign:'center', borderColor:'#00ada9',marginTop:80, color:'white'}} placeholderTextColor='white' placeholder='Correo' selectionColor='#428AF8'/>
                <TextInput secureTextEntry={true} autoCapitalize='none' style={{height:40, color:'#000', borderWidth:2, borderRadius:10, borderStyle:'solid', textAlign:'center', borderColor:'#00ada9', marginTop:20, color:'white'}} placeholderTextColor='white' placeholder='Contraseña' selectionColor='#428AF8' />
                <TouchableOpacity 
                onPress={() => props.navigation.replace('Principal')}
                style = {[estilos.loginBtn, {alignItems: 'center', justifyContent: 'center'}]} >
                <Text style={{fontSize: 20, color: '#FFF', fontWeight:'400'}}>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
        <View style={{backgroundColor: '#000', alignItems:'center', borderTopColor: '#00ada9', borderTopWidth: 1, borderStyle: 'dotted'}}>
            <TouchableOpacity><Text style={{fontStyle:'italic', margin:10, fontSize:12, color: 'white'}}>Recuperar Contraseña</Text></TouchableOpacity>
        </View>
        </View>
    );
}

const estilos = new StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c0e7e9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: 300,
        height: 100
    },

    datos:{
        width:"80%",
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"#000"
      },
      loginBtn:{
        height:40,
        marginTop: 40,
        margin:40,
        backgroundColor: '#fe0000',
        color: '#FFF',
        fontSize: 16,
        borderRadius: 10,
        textAlign: 'center'
    },
    input:{
      
      borderBottomColor: '#3086F7',
      borderBottomWidth: 3,
      margin: 10,
      padding: 5
    }

      
});