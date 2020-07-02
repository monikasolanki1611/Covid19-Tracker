import React from 'react';
import {View} from 'react-native';
import {Card} from '@paraboly/react-native-card';
import COLORS from '../const/Colors';

const CaseDetail = ({data}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: 80,
      marginBottom: 170,
    }}>
    <Card
      iconDisable
      title="New Confirmed"
      content="Newly Confirmed Cases"
      bottomRightText={data.NewConfirmed}
      titleColor={COLORS.darkPrimaryColor}
      bottomRightColor={COLORS.darkPrimaryColor}
      onPress={() => {}}
    />
    <Card
      iconDisable
      title="Total Confirmed"
      content="Total Confirmed Cases"
      bottomRightText={data.TotalConfirmed}
      titleColor={COLORS.darkPrimaryColor}
      bottomRightColor={COLORS.darkPrimaryColor}
      onPress={() => {}}
    />
    <Card
      iconDisable
      title="New Deaths"
      content="New Deaths"
      bottomRightText={data.NewDeaths}
      titleColor={COLORS.darkPrimaryColor}
      bottomRightColor={COLORS.darkPrimaryColor}
      onPress={() => {}}
    />
    <Card
      iconDisable
      title="Total Deaths"
      content="Total Deaths"
      bottomRightText={data.TotalDeaths}
      titleColor={COLORS.darkPrimaryColor}
      bottomRightColor={COLORS.darkPrimaryColor}
      onPress={() => {}}
    />
    <Card
      iconDisable
      title="New Recovered"
      content="Newly Recovered"
      bottomRightText={data.NewRecovered}
      titleColor={COLORS.darkPrimaryColor}
      bottomRightColor={COLORS.darkPrimaryColor}
      onPress={() => {}}
    />
    <Card
      iconDisable
      title="Total Recovered"
      content="Total Recovered"
      bottomRightText={data.TotalRecovered}
      titleColor={COLORS.darkPrimaryColor}
      bottomRightColor={COLORS.darkPrimaryColor}
      onPress={() => {}}
    />
  </View>
);

export default CaseDetail;
