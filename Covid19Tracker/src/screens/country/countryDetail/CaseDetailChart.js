import React from 'react';
import {VictoryChart, VictoryTheme, VictoryLine} from 'victory-native';
import {View, StyleSheet} from 'react-native';

class CaseDetailChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: [],
      isLoading: true,
    };
  }

  componentWillMount() {
    console.log(this.props.route.prams);
    fetch(
      `https://api.covid19api.com/dayone/country/${
        this.props.route.params.countryItem.Country
      }`,
    )
      .then(response => response.json())
      .then(json => {
        let temp = json.map(({Date, Confirmed}) => ({
          date: Date,
          confirmedCases: Confirmed,
        }));
        console.log(temp);
        this.setState({
          countryData: temp,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryLine
            data={this.state.countryData}
            x="date"
            y="confirmedCases"
          />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default CaseDetailChart;
