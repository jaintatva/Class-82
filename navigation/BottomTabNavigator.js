import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import Feed from"../screens/Feed.js"
import CreateStory from '../screens/CreateStory.js';
import Profile from '../screens/Profile.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
 return(
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="Add Story" component={CreateStory}/>
    </Tab.Navigator>
 )
}
export default BottomTabNavigator;

//@react-navigation/bottom-tabs react-native-vector-icons/Ionicons @react-navigation/native @react-navigation/drawer

