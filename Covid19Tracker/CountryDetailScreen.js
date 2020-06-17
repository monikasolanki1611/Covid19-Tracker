import React from 'react';
import {View, Text} from 'react-native';
import CaseDeatil from './CaseDeatil';
import CaseDetail from './CaseDeatil';

export default function CountryDetailScreen({route, navigation}) {
  const {countryItem} = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: countryItem.Country,
    });
  });

  return <CaseDetail data={countryItem} />;
}
