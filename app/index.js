
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Login/Home';
import  SignUp  from '../components/SignUp/SignUp';
import CreateWallet from '../components/Login/CreateWallet';
import Tour from '../components/Login/Tour';
const Stack = createNativeStackNavigator();

export default function index() {
  return (
    
    
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='SignUp' screenOptions={{headerShown:false}}>
      
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CreateWallet" component={CreateWallet} />
        <Stack.Screen name="Tour" component={Tour} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>


  
  );
}







