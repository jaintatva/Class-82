import *as React from 'react';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNav';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}


