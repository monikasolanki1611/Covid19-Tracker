/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomestackScreen from './HomestackScreen';
import CountrystackScreen from './CountrystackScreen';

const lightPrimaryColor = '#ffeeff';
const medPrimaryColor = '#f8bbd0';
const darkPrimaryColor = '#c48b9f';
const lightSecondaryColor = '#a98274';
const medSecondaryColor = '#795548';
const darkSecondaryColor = '#4b2c20';
const whiteTextColor = '#ffffff';
const blackTextColor = '#000000';
const commonThemeColor = '#ffffff';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeBackgroundColor: medSecondaryColor,
          inactiveTintColor: blackTextColor,
          backgroundColor: commonThemeColor,
          activeTintColor: whiteTextColor,
          fontSize: 20,
        }}>
        <Drawer.Screen
          name="Home"
          component={HomestackScreen}
          options={{title: 'Home'}}
        />
        <Drawer.Screen
          name="CountryList"
          component={CountrystackScreen}
          options={{title: 'CountryList'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
