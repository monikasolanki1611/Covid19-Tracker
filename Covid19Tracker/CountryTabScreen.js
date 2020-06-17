import * as React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from './Colors';
import CountryDetailScreen from './CountryDetailScreen';
import CaseDetailChart from './CaseDetailChart';

const Tab = createBottomTabNavigator();

const CountryTabScreen = ({route, navigation}) => {
  const {country} = route.params;
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: COLORS.medPrimaryColor},
        headerTintColor: COLORS.whiteTextColor,
        headerTitleStyle: {fontWeight: 'bold', fontSize: 25},
      }}>
      <Tab.Screen
        name="CountryDetailScreen"
        component={CountryDetailScreen}
        initialParams={{countryItem: country}}
        options={{
          title: 'Country Detail',
        }}
      />
      <Tab.Screen
        name="CaseDetailChart"
        component={CaseDetailChart}
        initialParams={{countryItem: country}}
        options={{
          title: 'Detail Chart',
        }}
      />
    </Tab.Navigator>
  );
};

export default CountryTabScreen;
