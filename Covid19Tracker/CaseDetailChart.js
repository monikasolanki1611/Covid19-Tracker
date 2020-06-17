import React from 'react';
import ReactDOM from 'react-dom';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';
import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import COLORS from './Colors';

const CaseDetailChart = ({route, navigation}) => {
  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
  ];
  return (
    //     <View>
    //   <Text>Bezier Line Chart</Text>
    //   <LineChart
    //     data={{
    //       labels: ["January", "February", "March", "April", "May", "June"],
    //       datasets: [
    //         {
    //           data: [
    //             Math.random() * 100,
    //             Math.random() * 100,
    //             Math.random() * 100,
    //             Math.random() * 100,
    //             Math.random() * 100,
    //             Math.random() * 100
    //           ]
    //         }
    //       ]
    //     }}
    //     width={Dimensions.get("window").width} // from react-native
    //     height={220}
    //     yAxisLabel="$"
    //     yAxisSuffix="k"
    //     yAxisInterval={1} // optional, defaults to 1
    //     chartConfig={{
    //       backgroundColor: COLORS.medPrimaryColor,
    //       backgroundGradientFrom: COLORS.medPrimaryColor,
    //       backgroundGradientTo: COLORS.darkPrimaryColor,
    //       decimalPlaces: 2, // optional, defaults to 2dp
    //       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    //       labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    //       style: {
    //         borderRadius: 16
    //       },
    //       propsForDots: {
    //         r: "6",
    //         strokeWidth: "2",
    //         stroke: COLORS.darkPrimaryColor
    //       }
    //     }}
    //     bezier
    //     style={{
    //       marginVertical: 8,
    //       borderRadius: 16
    //     }}
    //   />
    // </View>
    <View style={styles.container}>
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default CaseDetailChart;
