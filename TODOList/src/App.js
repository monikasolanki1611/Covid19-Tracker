/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RouterComponent from './RouterComponent';
import {connect, Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import authReducer from './reducers/authReducer';
import firebase from 'firebase';
import thunk from 'redux-thunk';

class App extends React.Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyCzEu1oxSFYUxyoyAy7SI2xLiN4y0bpgHo',
      authDomain: 'covid19tracker-3d5b4.firebaseapp.com',
      databaseURL: 'https://covid19tracker-3d5b4.firebaseio.com',
      projectId: 'covid19tracker-3d5b4',
      storageBucket: 'covid19tracker-3d5b4.appspot.com',
      messagingSenderId: '45062454326',
      appId: '1:45062454326:web:4ae8a7db272c3568b9ac97',
      measurementId: 'G-EV8JHDGMXL',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(authReducer, {}, applyMiddleware(thunk))}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
