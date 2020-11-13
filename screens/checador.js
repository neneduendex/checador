import React from 'react';
import {Image, View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

export default function checador(props){
    return(
        <View style={estilos.safe}>
            <View style={{flex:1, justifyContent: 'space-around', flexDirection:'column'}}>
                <TouchableOpacity style = {{alignItems: 'center', justifyContent: 'center'}} >
                <Text style={{color:'white'}}><MaterialCommunityIcons name="fingerprint" size={200} color="#ffb200" /></Text>
                <Text style={{color:'white'}}>Marcar Entrada</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{alignItems: 'center', justifyContent: 'center'}} >
                <Text style={{color:'white'}}><MaterialCommunityIcons name="fingerprint-off" size={200} color="#ca2323" /></Text>
                <Text style={{color:'white'}}>Marcar Salida</Text>
                </TouchableOpacity>
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