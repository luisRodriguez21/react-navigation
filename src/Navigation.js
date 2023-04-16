import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AwesomeIcons from 'react-native-vector-icons/FontAwesome';

// screens
import HomeScreen from './screens/HomeScreen';
import StackScreen from './screens/StackScreen';
import SettingsScreen from './screens/SettingsScreen';


const Tab = createBottomTabNavigator();
const HomeStackNavigation = createNativeStackNavigator();


function MyStack() {
    return (
        <HomeStackNavigation.Navigator
            initialRouteName="HomeScreen"
            screenOptions= {{
                headerBackTitleVisible: false,
            }}
        >
            <HomeStackNavigation.Screen
                name="HomeScreen"
                component={HomeScreen}
            />

            <HomeStackNavigation.Screen
                name="Stack"
                component={StackScreen}                
            />


        </HomeStackNavigation.Navigator>
    ) 
}


function NavTab (){
    return (         
        <Tab.Navigator
            initialRouteName="home"
            screenOptions= {{
                tabBarActiveTintColor: '#e91e63'
            }}
        >

            <Tab.Screen 
                name="Home" 
                component={MyStack} 
                options= {{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color, size }) => (
                        <AwesomeIcons name="home" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />

            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options= {{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color, size }) => (
                        <AwesomeIcons name="gear" color={color} size={size} />
                    ),
                    tabBarBadge: 3, 
                    
                }}
            />
        
        </Tab.Navigator>
    )
}


export default function Navigation (){

    return (
        <NavigationContainer> 
            <NavTab />
        </NavigationContainer>
    )
    
}
