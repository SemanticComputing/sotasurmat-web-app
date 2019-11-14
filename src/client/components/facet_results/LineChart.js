import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 72px)'
    },
    overflow: 'auto'
  },
  optionsContainer: {
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(1)
  },
  // container: {
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   width: 'calc(100% - 50px)',
  // }
});

class LineChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'age',
      label: 'Ikä',
      variant: 'ageCount'
    };
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
    var variant = 'birthYearCount';
    if (changeEvent.target.value === 'birthYear') {
      this.setState({
        label: 'Syntymävuosi',
        variant: 'birthYearCount',
      });
      variant = 'birthYearCount';
    }
    if (changeEvent.target.value === 'deathDate') {
      this.setState({
        label: 'Kuolinpäivä',
        variant: 'deathDateCount',
      });
      variant = 'deathDateCount';
    }
    if (changeEvent.target.value === 'age') {
      this.setState({
        label: 'Ikä',
        variant: 'ageCount',
      });
      variant = 'ageCount';
    }
    this.props.fetchResults({
      resultClass: variant,
      facetClass: 'surmatut',
      sortBy: null,
    });
  }

  componentDidMount = () => {
    this.props.fetchResults({
      resultClass: this.state.variant,
      facetClass: 'surmatut',
      sortBy: null,
    });
    //const { routeProps } = this.props;
    //this.props.fetchByURI('deaths', 'deaths', 'deaths', 'http://ldf.fi/siso/death_records/victim_' + routeProps.match.params.id,);
  }

  componentDidUpdate = prevProps => {
    // check if filters have changed
    if (prevProps.facetUpdateID !== this.props.facetUpdateID) {
      this.props.fetchResults({
        resultClass: this.state.variant,
        facetClass: 'surmatut',
        sortBy: null,
      });
    }
  }

  makeDateArray = (dataArray, firstTitle, secondTitle, fillEmptyValues) => {
    let newArray = [];
    let titleRow = [];
    titleRow.push(firstTitle);
    titleRow.push(secondTitle);
    newArray.push(titleRow);
    let momentArray = [];
    let nextMoment = undefined;

    for (let item of dataArray) {
      let subArray = [];
      // check if values actually dates
      if (item.counted < 6) {
        let emptyArray = [];
        return emptyArray;
      }
      subArray.push(moment(item.counted));
      subArray.push(parseInt(item.count));
      momentArray.push(subArray);
    }
    //console.log(momentArray);
    for (let item of momentArray) {
      let thisMoment = item[0];

      // console.log('this');
      // console.log(thisMoment.format('YYYY-MM-DD'));
      // console.log('next');
      // console.log(nextMoment.format('YYYY-MM-DD'));
      ///console.log(thisItem + '   '  + nextItem);
      if (nextMoment == undefined) {
        let subArray = [];
        nextMoment = moment(thisMoment.format('YYYY-MM-DD')).add(1, 'days');
        subArray.push(thisMoment.format('YYYY-MM-DD'));
        subArray.push(item[1]);
        newArray.push(subArray);
      } else {
        //while (thisMoment.isAfter(nextMoment)) {
        while (thisMoment.isAfter(nextMoment)) {
          // console.log('this');
          // console.log(thisMoment.format('YYYY-MM-DD'))
          // console.log('next');
          // console.log(nextMoment.format('YYYY-MM-DD'))
          let subArray = [];
          subArray.push(nextMoment.format('YYYY-MM-DD'));
          subArray.push(0);
          newArray.push(subArray);
          nextMoment = moment(nextMoment.format('YYYY-MM-DD')).add(1, 'days');
          // console.log('new next');
          // console.log(nextMoment.format('YYYY-MM-DD'))
          // console.log('new this');
          // console.log(thisMoment.format('YYYY-MM-DD'))
        }
        let subArray = [];
        subArray.push(thisMoment.format('YYYY-MM-DD'));
        subArray.push(item[1]);
        newArray.push(subArray);
        nextMoment = moment(nextMoment.format('YYYY-MM-DD')).add(1, 'days');
      }
    }
    //console.log(newArray);
    return newArray;
  }


  makeArray = (dataArray, firstTitle, secondTitle, fillEmptyValues) => {
    let newArray = [];
    let titleRow = [];
    //const years = dataArray.map(row => row.year);
    let nextItem = -1;
    titleRow.push(firstTitle);
    titleRow.push(secondTitle);
    newArray.push(titleRow);

    if (!fillEmptyValues) {
      for (let item of dataArray) {
        let subArray = [];
        subArray.push(item.counted);
        subArray.push(parseInt(item.count));
        newArray.push(subArray);
        nextItem++;
      }
    } else {
      for (let item of dataArray) {
        let thisItem = parseInt(item.counted);
        ///console.log(thisItem + '   '  + nextItem);
        if (nextItem == -1) {
          let subArray = [];
          nextItem = thisItem + 1;
          subArray.push(item.counted);
          subArray.push(parseInt(item.count));
          newArray.push(subArray);
        } else {
          while (thisItem > nextItem) {
            let subArray = [];
            subArray.push(nextItem.toString());
            subArray.push(0);
            newArray.push(subArray);
            nextItem++;
          }
          let subArray = [];
          subArray.push(item.counted);
          subArray.push(parseInt(item.count));
          newArray.push(subArray);
          nextItem++;
        }
      }
    }
    //console.log(newArray);
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

  date_diff = (date1, date2) => {
    return Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) ) / (1000 * 60 * 60 * 24));
  }


  render() {
    //var d = new Date('2015-03-25T12:00:00+04:00');
    //console.log(d)
    var title = '';
    var explanation = '';
    var xTitle = '';
    var yTitle = '';
    let fillEmpty = false;
    let infoString = '';

    let results = this.props.data.results;
    const { classes } = this.props;
    //console.log(this.props)
    if (results == undefined) {
      return (
        <p>Virhe kaavion tulosten latautumisessa!</p>
      );
    }
    if (this.state.variant == 'birthYearCount') {
      title = 'Vuosi';
      explanation = 'Henkilöiden määrä';
      xTitle = 'Vuosi';
      yTitle = 'Syntyneiden määrä datassa';
      fillEmpty = true;
    }
    if (this.state.variant == 'ageCount') {
      title = 'Ikä';
      explanation = 'Henkilöiden määrä';
      xTitle = 'Ikä';
      yTitle = 'Henkilöiden määrä';
      fillEmpty = true;
    }
    if (this.state.variant == 'deathDateCount') {
      title = 'Kuolinpäivä';
      explanation = 'Henkilöiden määrä';
      xTitle = 'Kuolinpäivä';
      yTitle = 'Henkilöiden määrä';
      fillEmpty = true;
    }
    let resultsArray = [];
    if (this.state.variant != 'deathDateCount') {
      resultsArray = this.makeArray(results, title, explanation, fillEmpty);
    } else {
      resultsArray = this.makeDateArray(results, title, explanation, fillEmpty);
    }

    if (this.state.variant != 'deathDateCount') {
      infoString = '(' + 'keskiarvo noin  ' + Math.round(this.average(resultsArray)) + ', mediaani noin ' + Math.round(this.median(resultsArray)) + ')';
    }
    if (this.state.variant == 'deathDateCount') {
      infoString = '';
    }
    //console.log(resultsArray)
    //console.log(this.median(yearsArray));
    //medianArray = ['mediaani vuosi', 'med'], []
    return (
      <Paper square className={classes.root}>
        <div className={classes.optionsContainer}>
          <form>
            <div>
              <label>
                <input type="radio" value="age"
                  checked={this.state.selectedOption === 'age'}
                  onChange={this.handleOptionChange} />
                  Ikä
              </label>
            </div>
            <div>
              <label>
                <input type="radio" value="birthYear"
                  checked={this.state.selectedOption === 'birthYear'}
                  onChange={this.handleOptionChange} />
                  Syntymävuosi
              </label>
            </div>
            <div>
              <label>
                <input type="radio" value="deathDate"
                  checked={this.state.selectedOption === 'deathDate'}
                  onChange={this.handleOptionChange} />
                  Kuolinpäivä
              </label>
            </div>
          </form>
        </div>
        <Chart
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={resultsArray}
          height={450}
          options={{
            hAxis: {
              title: xTitle + '  ' + infoString,
            },
            vAxis: {
              title: yTitle,
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </Paper>
    );
  }
}

LineChart.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  facetUpdateID: PropTypes.number,
};

export default withStyles(styles)(LineChart);
