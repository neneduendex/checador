import React from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import Cuenta from './cuenta';
import Calendario from './calendario';
import Login from './login';
import Checador from './checador';

export default function principal(props){
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    let icono;
                    if(route.name == 'Calendario'){
                        icono = 'calendar';
                    } else if(route.name == 'Checador'){
                        icono = 'fingerprint';
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
                activeTintColor: 'red',
                inactiveTintColor: 'white',
                showLabel: true
            }}
        >
            <Tab.Screen
                name='Checador'
                component={Checador}
                options={{title: 'Checador'}}
            />
            <Tab.Screen
                name='Calendario'
                component={Calendario}
                options={{title: 'Historial'}}
            />
            <Tab.Screen
                name='Cuenta'
                component={Cuenta}
                options={{title: 'Cuenta'}}
            />
        </Tab.Navigator> 
    );
}