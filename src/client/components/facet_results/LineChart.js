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
    //console.log(this.lenght(dataArray))
    //console.log(this.lenght(dataArray))
    if (this.lenght(dataArray) > 0) {
      return weightedSum / sum; // minus the first line with titles from lenght
    }
    else if (this.lenght(dataArray) === 1 ) {
      return weightedSum;
    } else {
      return NaN;
    }
  }

  render() {
    let years = this.props.data.results;
    let yearsArray = this.makeArray(years);
    return (
      <Chart
        width={'1200px'}
        height={'700px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={yearsArray}
        options={{
          hAxis: {
            title: 'Vuosi;  ' + 'keskiarvo:  ' + Math.round(this.average(yearsArray)),
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
