/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from '../../const/Colors';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();
export default function HomestackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Home',
        headerStyle: {backgroundColor: COLORS.medPrimaryColor},
        headerTintColor: COLORS.whiteTextColor,
        headerTitleStyle: {fontWeight: 'bold', fontSize: 25},
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
