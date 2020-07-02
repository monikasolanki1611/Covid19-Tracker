/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import COLORS from '../../const/Colors';
import CountryListingScreen from './countryListing/CountryListingScreen';
import CountryTabScreen from './countryDetail/CountryTabScreen';


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
        name="CountryTabScreen"
        component={CountryTabScreen}
        options={{
          title: 'Country Detail',
        }}
      />
    </Stack.Navigator>
  );
}
