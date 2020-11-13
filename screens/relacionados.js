import React from 'react';
import {Image, View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

export default function relacionados(props){
    return(
        <ScrollView style={estilos.safe}>
            <Text style={{color:'white'}}>Listado de alumnos o empleado</Text>
        </ScrollView>
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
            borderRadius: 300,
            marginTop: 10
        },
        texto:{
            backgroundColor: '#0000',
            color: '#FFF',
            borderColor: '#00ada9',
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
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