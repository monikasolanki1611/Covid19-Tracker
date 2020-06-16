import React from 'react';
import {View, Text, Button, ActivityIndicator, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Card} from '@paraboly/react-native-card';
import CountryDetailScreen from './CountryDetailScreen';
import COLORS from './Colors';

export default function CountryListingScreen({navigation}) {
  const [countries, setCountries] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(json => {
        setCountries(json.Countries);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.medPrimaryColor,
      }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={countries}
          renderItem={({item}) => (
            <Entry
              item={item}
              navigation={navigation}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 10,
                width: '100%',
                backgroundColor: COLORS.medPrimaryColor,
              }}
            />
          )}
          keyExtractor={item => item.CountryCode}
        />
      )}
    </View>
  );
}

function Entry({item, navigation}) {
  return (
    <View>
      <Card
        iconDisable
        title={item.Country}
        content={`Confimed Cases: ${item.TotalConfirmed}`}
        bottomRightText={item.Date}
        titleColor={COLORS.darkPrimaryColor}
        bottomRightColor={COLORS.darkPrimaryColor}
        bottomRightFontSize={13}
        onPress={() => navigation.navigate('CountryDetailScreen', {country: item})}
      />
    </View>
  );
}
