import React from 'react';
import StackNavigator from './src/navigators/stacknavigator'
import BottomSheet from './src/components/BottomActionSheet'
import ReAnimatedSheet from './src/components/ReanimatedBottomSheet'
import HomeDrawer from './src/navigators/drawernavigator/drawerNavigator'
import CardItem from './src/components/CardItem'
import {Text} from 'react-native';

const App = () => {
  return <HomeDrawer/>;
};

export default App;
