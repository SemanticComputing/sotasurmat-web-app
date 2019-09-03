import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CSVLink } from 'react-csv';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  csvLink: {
    textDecoration: 'none'
  },
  csvButton: {
    margin: theme.spacing(3),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
});

class CSVButton extends React.Component {

  componentDidMount = () => {
    this.props.fetchResults({
      resultClass: this.props.resultClass,
      facetClass: this.props.facetClass,
      sortBy: null,
    });
    //const { routeProps } = this.props;
    //this.props.fetchByURI('deaths', 'deaths', 'deaths', 'http://ldf.fi/siso/death_records/victim_' + routeProps.match.params.id,);
  }

  componentDidUpdate = prevProps => {
    // check if filters have changed
    if (prevProps.facetUpdateID !== this.props.facetUpdateID) {
      this.props.fetchResults({
        resultClass: this.props.resultClass,
        facetClass: this.props.facetClass,
        sortBy: null,
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <CSVLink className={classes.csvLink} data={this.props.results}>
          <Button variant="contained" color="primary" className={classes.csvButton}>
          lataa
            <CloudDownloadIcon className={classes.rightIcon} />
          </Button>
        </CSVLink>
      </Paper>
    );
  }
}

CSVButton.propTypes = {
  classes: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired,
  facetClass: PropTypes.string.isRequired,
  resultClass: PropTypes.string.isRequired,
  fetchResults: PropTypes.func.isRequired,
  facetUpdateID: PropTypes.number,
};

export default withStyles(styles)(CSVButton);
