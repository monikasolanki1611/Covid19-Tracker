import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoginScreen from './screens/Login/LoginScreen';
import HomeScreen from './screens/Home/HomeScreen';

function RouterComponent() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="auth" hideNavBar={true}>
          <Scene key="Login" component={LoginScreen} title="Login" hideNavBar={false}/>
        </Scene>
        <Scene key="main" hideNavBar={true} gesturesEnabled={false}>
          <Scene key="Home" component={HomeScreen} title="Home" hideNavBar={false} gesturesEnabled={true}/>
        </Scene>
      </Scene>
    </Router>
  );
}

export default RouterComponent;