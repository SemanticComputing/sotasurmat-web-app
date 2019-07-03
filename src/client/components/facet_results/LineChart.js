import React from 'react';
import PropTypes from 'prop-types';

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

  render() {

    return (
      <div>
      </div>
    );
  }
}

LineChart.propTypes = {
  //classes: PropTypes.object.isRequired,
  //data: PropTypes.array.isRequired,
  //fetchPlaces: PropTypes.func.isRequired
  //fetchFacet: PropTypes.func.isRequired,
};

export default withStyles(styles)(LineChart);
