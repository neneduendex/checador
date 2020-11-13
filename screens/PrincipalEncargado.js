import React from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesome5, MaterialIcons,Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Cuenta from './cuenta';
import Relacionados from './relacionados';
import Login from './login';
import Registro from './registrarRelacionado';

export default function PrincipalEncargado(props){
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    let icono;
                    if(route.name == 'Relacionados'){
                        icono = 'users';
                    } else if(route.name == 'Registro'){
                        icono = 'user-plus';
                    } else if(route.name == 'Cuenta'){
                        icono = 'user-alt';
                    }

                    return <FontAwesome5 name={icono} size={20} color={color}/>
                }
            })
        }
            tabBarOptions={{
                activeBackgroundColor:'black',
                inactiveBackgroundColor:'black',
                activeTintColor: '#ca2323',
                inactiveTintColor: 'white',
                showLabel: true
            }}
        >
            <Tab.Screen
                name='Relacionados'
                component={Relacionados}
                options={{title: 'Relacionados'}}
            />
            <Tab.Screen
                name='Registro'
                component={Registro}
                options={{title: 'Registro'}}
            />
            <Tab.Screen
                name='Cuenta'
                component={Cuenta}
                options={{title: 'Cuenta'}}
            />
        </Tab.Navigator> 
    );
}