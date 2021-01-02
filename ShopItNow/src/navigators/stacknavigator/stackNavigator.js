import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import constants from '../../utils/constants';
import {HomeScreen} from '../../screens/HomeScreen';
import Filters from '../../screens/Filters';
import Favorite from '../../screens/Favourite';
import Cart from '../../screens/Cart';
import Profile from '../../screens/Profile';
import SearchItems from '../../screens/SearchItems';
import SignIn  from '../../screens/SignIn'
import SignUp from '../../screens/SignUp'
import ProductScreen from '../../screens/ProductScreen'

export default function StackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={constants.Home_Screen}
        component={HomeScreen}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name={constants.Filters}
        component={Filters}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={constants.Favorite}
        component={Favorite}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={constants.Cart}
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={constants.Profile}
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={constants.SearchItems}
        component={SearchItems}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={constants.SignIn}
        component={SignIn}
        options={{headerTitleAlign:'center'}}
      />
      <Stack.Screen
        name={constants.SignUp}
        component={SignUp}
        options={{ headerTitleAlign:'center'}}
      />
        <Stack.Screen
        name={constants.Product}
        component={ProductScreen}
        options={{ headerTitleAlign:'center'}}
      />
    </Stack.Navigator>
  );
}
