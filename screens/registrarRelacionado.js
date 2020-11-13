import React from 'react';
import {Image, View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

export default function registrarRelacionado(props){
    return(
        <View style={{flex:1, backgroundColor: '#000'}}>
        <ScrollView style={estilos.safe}>
        <TouchableOpacity>
        <View style={[estilos.view, {backgroundColor:"#000", justifyContent: "space-evenly", borderBottomEndRadius: 18, borderBottomStartRadius: 18}]}>
            <Image style={estilos.img} source={require('../assets/logo-rimo.png')} />
        </View>
        </TouchableOpacity>
        <View style={{flex: 2, justifyContent: "space-evenly", backgroundColor: '#000'}}>
            <TextInput autoCapitalize='none' keyboardType='default' placeholderTextColor='white' placeholder='Nombre' selectionColor='#428AF8' style={[estilos.texto, {fontSize: 15}]}></TextInput>
            <TextInput autoCapitalize='none' keyboardType='email-address' placeholderTextColor='white' placeholder='Correo' selectionColor='#428AF8' style={[estilos.texto, {fontSize: 15}]}></TextInput>
            <TextInput autoCapitalize='none' keyboardType='ascii-capable' placeholderTextColor='white' placeholder='Contraseña' secureTextEntry={true} selectionColor='#428AF8' style={[estilos.texto, {fontSize: 15}]}></TextInput>
            <TextInput autoCapitalize='none' keyboardType='number-pad' placeholderTextColor='white' placeholder='IMEI' selectionColor='#428AF8' style={[estilos.texto, {fontSize: 15}]}></TextInput>
        </View>
        <View style={{justifyContent:'center', flexDirection: 'row'}}>
            <TouchableOpacity 
            onPress = {() => {
                Alert.alert(
                'Confirmar registro',
                '¿La informacion es correcta?',
                [
                    {
                    text: 'No',
                    onPress : () => { }
                    },
                    {
                    text: 'Si',
                    onPress : () => { }
                    }
                ],
                {cancelable : true}
                );
            }}
            style = {[estilos.touch ,{borderColor:'#ca2323' ,backgroundColor: '#ca2323'}]}>
                <Text style={{fontSize: 15, color: 'white'}}><MaterialCommunityIcons name="account-multiple-check" size={15}/>&nbsp;Registrar Asociado</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
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