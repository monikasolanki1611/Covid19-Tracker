/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './Colors';
import CountryListingScreen from './CountryListingScreen';
import CountryDetailScreen from './CountryDetailScreen';

const Stack = createStackNavigator();

export default function CountrystackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: COLORS.medPrimaryColor},
        headerTintColor: COLORS.whiteTextColor,
        headerTitleStyle: {fontWeight: 'bold', fontSize: 25},
      }}>
      <Stack.Screen
        name="CountryListingScreen"
        component={CountryListingScreen}
        options={{
          title: 'Country List',
        }}
      />
      <Stack.Screen
        name="CountryDetailScreen"
        component={CountryDetailScreen}
        options={{
          title: 'Country Detail',
        }}
      />
    </Stack.Navigator>
  );
}
