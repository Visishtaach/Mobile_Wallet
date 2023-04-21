import React from 'react';
// import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home/Home';
import SignUp from '../components/SignUp/SignUp';
import CreateWallet from '../components/Login/CreateWallet';
import Tour from '../components/Login/Tour';
import Settings from '../components/Home/SettingsScreen';
import Browser from '../components/Home/Browser';
import Screen1 from '../components/Screens/Screen1';
import Screen2 from '../components/Screens/Screen2';
import Discover from '../components/Home/Discover';
import Search from '../components/Screens/Search';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Wallet',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="wallet" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          title: 'Discover',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="compass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Browser"
        component={Browser}
        options={{
          title: 'Browser',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="th-large" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ size, color }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Auth() {
  // const window = useWindowDimensions();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CreateWallet" component={CreateWallet} />
        <Stack.Screen name="Tour" component={Tour} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>

    //  </SafeAreaView>
  );
}
