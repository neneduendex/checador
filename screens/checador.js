import React from 'react';
import {Image, View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

export default function checador(props){
    return(
        <View style={estilos.safe}>
            <View style={{flex:1, justifyContent: 'space-around', flexDirection:'column'}}>
            <View style={{flex:1, backgroundColor:'red', justifyContent:'center'}}>
                <TouchableOpacity 
                style = {{alignItems: 'center', justifyContent: 'center'}} >
                {/*<Image source={require('../assets/logo-rimo.png')} />*/}
                <Text style={{color:'white'}}>MARCAR ENTRADA</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1, backgroundColor:'blue',  justifyContent:'center'}}>  
                <TouchableOpacity 
                style = {{alignItems: 'center', justifyContent: 'center'}} >
                 {/*<Image source={require('../assets/logo-rimo.png')} />*/}
                 <Text style={{color:'white'}}>MARCAR SALIDA</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create(
    {
        safe: 
        {
            flex: 1,
            backgroundColor: 'black'
        },
        view:
        {
            flex: 1,
            alignItems: "center"
        },
        img:
        {
            width: 150, 
            height: 150,
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 300,
            marginTop: 10
        },
        texto:{
            backgroundColor: '#0000',
            color: '#FFF',
            borderColor: '#00ada9',
            borderWidth: 2,
            padding: 10,
            borderRadius: 20,
            margin: 20,
        },
        touch:
        {
            backgroundColor: '#FFF',
            color: '#000',
            borderWidth: 2,
            padding: 10,
            borderRadius: 18,
            margin: 20,
            width: 150,
            alignItems: 'center'
            
        }   
    }
)