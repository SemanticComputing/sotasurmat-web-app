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
    titleRow.push('vuosi');
    titleRow.push('syntyneitä');
    newArray.push(titleRow);
    for (let item of dataArray) {
      let subArray = [];
      subArray.push(item.year);
      subArray.push(parseInt(item.yearCount));
      newArray.push(subArray);
    }
    return newArray;
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
            title: 'Vuosi',
          },
          vAxis: {
            title: 'Vuonna syntyneitä datssa',
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
