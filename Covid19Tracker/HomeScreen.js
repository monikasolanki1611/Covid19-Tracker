/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Card} from '@paraboly/react-native-card';

const Stack = createStackNavigator();

// "NewConfirmed": 133896,
//     "TotalConfirmed": 8134503,
//     "NewDeaths": 3843,
//     "TotalDeaths": 445110,
//     "NewRecovered": 87626,
//     "TotalRecovered": 3856687
export default function HomeScreen() {
  const [globalData, setGlobalData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(json => {
        setGlobalData(json.Global);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [globalData]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 120,
            marginBottom: 120,
          }}>
          <Card
            iconDisable
            title="New Confirmed"
            content="Newly Confirmed Cases"
            bottomRightText={globalData.NewConfirmed}
            onPress={() => {}}
          />
          <Card
            iconDisable
            title="Total Confirmed"
            content="Total Confirmed Cases"
            bottomRightText={globalData.TotalConfirmed}
            onPress={() => {}}
          />
          <Card
            iconDisable
            title="New Deaths"
            content="New Deaths"
            bottomRightText={globalData.NewDeaths}
            onPress={() => {}}
          />
          <Card
            iconDisable
            title="Total Deaths"
            content="Total Deaths"
            bottomRightText={globalData.TotalDeaths}
            onPress={() => {}}
          />
          <Card
            iconDisable
            title="New Recovered"
            content="Newly Recovered"
            bottomRightText={globalData.NewRecovered}
            onPress={() => {}}
          />
          <Card
            iconDisable
            title="Total Recovered"
            content="Total Recovered"
            bottomRightText={globalData.TotalRecovered}
            onPress={() => {}}
          />
        </View>
      )}
    </View>
  );
}
