import React from 'react';
import HomeDrawer from './src/navigators/drawernavigator/drawerNavigator';
import Signin from './src/screens/SignIn'
import {Provider} from 'react-redux';
import {store} from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <HomeDrawer />
    </Provider>
  );
};

export default App;
