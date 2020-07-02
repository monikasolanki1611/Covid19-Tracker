/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import COLORS from '../../const/Colors';
import CaseDetail from '../../components/CaseDeatil';

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
