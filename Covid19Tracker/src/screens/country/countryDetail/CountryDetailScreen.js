import React from 'react';
import CaseDetail from '../../../components/CaseDeatil';

export default function CountryDetailScreen({route, navigation}) {
  const {countryItem} = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: countryItem.Country,
    });
  });

  return <CaseDetail data={countryItem} />;
}
