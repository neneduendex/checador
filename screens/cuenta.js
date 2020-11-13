import React from 'react';
import {Image, View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

export default function cuenta(props){
    return(
        <ScrollView style={estilos.safe}>
        <View style={[estilos.view, {backgroundColor:"#000", justifyContent: "space-evenly", borderBottomEndRadius: 18, borderBottomStartRadius: 18}]}>
            <Image style={estilos.img} source={require('../assets/logo-rimo.png')} />
            <Text style={{fontSize: 20, color:"#FFF", margin: 15}}>Nombre</Text>
        </View>
        <View style={{flex: 2, justifyContent: "space-evenly", backgroundColor: '#000'}}>
            <Text style={[estilos.texto, {fontSize: 15}]}><MaterialIcons name="email" size={13}/>&nbsp;Correo</Text>
            <Text style={[estilos.texto, {fontSize: 15}]}><MaterialIcons name="location-city" size={13}/>&nbsp;Estado</Text>
            <Text style={[estilos.texto, {fontSize: 15}]}><MaterialIcons name="location-city" size={13}/>&nbsp;CP</Text>
        </View>
        <View style={{justifyContent:'center', flexDirection: 'row'}}>
            <TouchableOpacity 
            onPress = {() => {
                Alert.alert(
                '¿Confirmar?',
                '¿Esta seguro de cerrar sesion?',
                [
                    {
                    text: 'Cancelar',
                    onPress : () => { }
                    },
                    {
                    text: 'Estoy seguro',
                    onPress : () => { 
                        SecureStore.deleteItemAsync('id')
                        SecureStore.deleteItemAsync('correo');
                        props.navigation.replace('Login') }
                    }
                ],
                {cancelable : true}
                );
            }}
            style = {[estilos.touch ,{borderColor:'red' ,backgroundColor: 'red'}]}>
                <Text style={{fontSize: 15, color: 'white'}}><MaterialCommunityIcons name="logout" size={13}/>&nbsp;Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
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