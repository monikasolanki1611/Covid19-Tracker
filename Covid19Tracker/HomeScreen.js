/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Card} from '@paraboly/react-native-card';
import COLORS from './Colors';
import CaseDetail from './CaseDeatil';

export default function HomeScreen({navigation}) {
  const [globalData, setGlobalData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    navigation.setOptions({
      title: 'Global',
    });
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(json => {
        setGlobalData(json.Global);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [globalData, navigation]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isLoading ? <ActivityIndicator /> : <CaseDetail data={globalData} />}
    </View>
  );
}
