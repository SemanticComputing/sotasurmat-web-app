import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';

//import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexGrow: 1,
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'calc(100% - 50px)',
    maxWidth: 900,
    height: '100%',
    alignItems: 'center',
  },
  Chart: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2),
  },
  legend: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4),
  },
  legendPaper: {
    height: 275,
    overflowY: 'auto',
  }
});

class LineChart extends React.Component {

  componentDidMount = () => {
    // mihin tämä menee?
    //kadottaa tieddot faceteista
    this.props.fetchResults({
      resultClass: 'dates',
      facetClass: 'deaths',
      sortBy: null,
      variant: 'birthYearCount',
    });
    //const { routeProps } = this.props;
    //this.props.fetchByURI('deaths', 'deaths', 'deaths', 'http://ldf.fi/siso/death_records/victim_' + routeProps.match.params.id,);
  }

  componentDidUpdate = prevProps => {
    // check if filters have changed
    if (prevProps.facetUpdateID !== this.props.facetUpdateID) {
      this.props.fetchResults({
        resultClass: 'dates',
        facetClass: 'deaths',
        sortBy: null,
        variant: 'birthYearCount',
      });
    }
  }

  makeArray = dataArray => {
    let newArray = [];
    let titleRow = [];
    //console.log(dataArray)
    //const years = dataArray.map(row => row.year);
    let nextYear = -1;
    titleRow.push('vuosi');
    titleRow.push('syntyneiden määrä');
    newArray.push(titleRow);

    for (let item of dataArray) {
      let thisYear = parseInt(item.year);
      ///console.log(thisYear + '   '  + nextYear);
      if (nextYear == -1) {
        let subArray = [];
        nextYear = thisYear + 1;
        subArray.push(item.year);
        subArray.push(parseInt(item.yearCount));
        newArray.push(subArray);
      } else {
        while (thisYear > nextYear) {
          let subArray = [];
          subArray.push(nextYear.toString());
          subArray.push(0);
          newArray.push(subArray);
          nextYear++;
        }
        let subArray = [];
        subArray.push(item.year);
        subArray.push(parseInt(item.yearCount));
        newArray.push(subArray);
        nextYear++;
      }
    }
    return newArray;
  }

  lenght = dataArray => {
    let items = 0;
    for (let item of dataArray) {
      items = items + 1;
    }
    return items;
  }

  average = dataArray => {
    let weightedSum = 0;
    let sum = 0;
    for (let item of dataArray) {
      if (!isNaN(item[1])) {
        weightedSum = weightedSum + (parseInt(item[0]) * parseInt(item[1]));
      }
    }
    for (let item of dataArray) {
      if (!isNaN(item[1])) {
        sum = sum + (parseInt(item[1]));
      }
    }
    if (this.lenght(dataArray) > 0) {
      return weightedSum / sum;
    }
    else if (this.lenght(dataArray) === 1 ) {
      return weightedSum;
    } else {
      return NaN;
    }
  }

  sum = dataArray => {
    let fullSum = 0;
    for (let item of dataArray) {
      if (!isNaN(item[1])) {
        fullSum = fullSum + (parseInt(item[1]));
      }
    }
    return fullSum;
  }

  // median may be wrong?

  median = dataArray => {
    let fullSum = this.sum(dataArray);
    let helpSum = 0;
    let help = -1;
    let length = this.lenght(dataArray);
    let remainder = length % 2;
    if (fullSum > 0) {
      for (let row of dataArray) {
        if (!isNaN(row[1])) {
          helpSum = helpSum + (parseInt(row[1]));
          if (helpSum >= fullSum / 2) {
            if (remainder != 0) {
              return parseInt(row[0]);
            } else {
              if (help == -1) {
                help = parseInt(row[0]);
              } else {
                return (help + parseInt(row[0])) / 2;
              }
            }
          }
        }
      }
    } else {
      return NaN;
    }
  }

  render() {
    let years = this.props.data.results;
    let yearsArray = this.makeArray(years);
    //console.log(this.median(yearsArray));
    //medianArray = ['mediaani vuosi', 'med'], []
    return (
      <Chart
        width={'1200px'}
        height={'700px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={yearsArray}
        options={{
          hAxis: {
            title: 'Vuosi  (' + 'keskiarvo noin  ' + Math.round(this.average(yearsArray)) + ', mediaani noin ' + Math.round(this.median(yearsArray)) + ')',
            subtitle: 'test',
          },
          vAxis: {
            title: 'Vuonna syntyneitä datassa',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    );
  }
}

LineChart.propTypes = {
  //classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  facetUpdateID: PropTypes.number,
};

export default withStyles(styles)(LineChart);
