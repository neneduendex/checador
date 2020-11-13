import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/login';
import Principal from './screens/principal';
import {View, Image} from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
          headerStyle:{
          backgroundColor:'#000',          
        },
      }}
      >
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{title: ''}}
        />
        <Stack.Screen 
          name='Principal'
          component={Principal}
          options={{
            headerLeft:() => (
              <View style={{ alignContent:'center' }}>
              <Image
                source={require('./assets/logo-rimo-letras.png')} 
                style={{
                  width: 62,
                  height:34,
                  marginLeft:10
                }}
              />
            </View>
              )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
