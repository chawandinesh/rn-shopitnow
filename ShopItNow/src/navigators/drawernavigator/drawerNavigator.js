import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import StackNavigator from '../stacknavigator/stackNavigator'
import DrawerContent from '../../screens/DrawerContent'

export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator()
    return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeDrawer" drawerContent={(props) => <DrawerContent {...props}/>}>
            <Drawer.Screen name="HomeDrawer" component={StackNavigator}/>
        </Drawer.Navigator>
    </NavigationContainer>
    )
}
