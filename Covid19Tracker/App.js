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
import COLORS from './Colors';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeBackgroundColor: COLORS.medPrimaryColor,
          inactiveTintColor: COLORS.darkPrimaryColor,
          backgroundColor: COLORS.commonThemeColor,
          activeTintColor: COLORS.whiteTextColor,
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
