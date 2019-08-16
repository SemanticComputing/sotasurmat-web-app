import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import SurmatutPageTable from '../perspectives/SurmatutPageTable';
import TaistelutPageTable from '../perspectives/TaistelutPageTable';


const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    padding: theme.spacing(1),
    width: 800,
    overflowY: 'auto'
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  sahaButton: {
    marginTop: theme.spacing(2),
  },
  spinnerContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

class InstanceHomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      instanceHeading: '',
      localID: []
    };
  }

  componentDidMount = () => {
    let uri = '';
    let base = 'http://ldf.fi/siso';
    const localID = this.props.routeProps.location.pathname.split('/').pop();
    this.setState({ localID: localID });
    switch(this.props.resultClass) {
      case 'surmatut':
        this.setState({
          instanceHeading: 'Henkilö',
        });
        uri = `${base}/death_records/${localID}`;
        break;
      case 'taistelut':
        this.setState({
          instanceHeading: 'Taistelu',
        });
        uri = `${base}/sita/${localID}`;
        break;
    }
    this.props.fetchByURI({
      resultClass: this.props.resultClass,
      facetClass: null,
      variant: null,
      uri: uri
    });
  }

  renderTable = () => {
    let tableEl = null;
    if (this.state.instanceClass !== '') {
      switch (this.state.instanceHeading) {
        case 'Henkilö':
          tableEl =
            <SurmatutPageTable
              data={this.props.data}
            />;
          break;
        case 'Taistelu':
          tableEl =
              <TaistelutPageTable
                data={this.props.data}
              />;
          break;
        default:
          tableEl = <div></div>;
      }
    }
    return tableEl;
  }

  render = () => {
    const { classes, data, isLoading } = this.props;
    const hasData = data !== null && Object.values(data).length >= 1;
    return(
      <div className={classes.root}>
        <Paper className={classes.content}>
          {isLoading &&
            <div className={classes.spinnerContainer}>
              <CircularProgress style={{ color: purple[500] }} thickness={5} />
            </div>
          }
          {!hasData &&
            <React.Fragment>
              <Typography variant='h4'>{this.state.instanceHeading}</Typography>
              <Divider className={classes.divider} />
              <Typography variant='h6'>
                No data found for id: <span style={{ fontStyle: 'italic'}}>{this.state.localID}</span>
              </Typography>
            </React.Fragment>
          }
          {hasData &&
            <React.Fragment>
              <Typography variant='h4'>{this.state.instanceHeading}</Typography>
              <Divider className={classes.divider} />
              <Typography variant='h6'>{data.prefLabel.prefLabel}</Typography>
              {this.renderTable()}
              <Button
                className={classes.sahaButton}
                variant='contained'
                target='_blank'
                rel='noopener noreferrer'
                href={data.id}
              >
                Open in Linked Data Browser
              </Button>
            </React.Fragment>
          }
        </Paper>
      </div>
    );
  }
}

InstanceHomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  resultClass: PropTypes.string.isRequired,
  data: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  routeProps: PropTypes.object.isRequired
};

export default withStyles(styles)(InstanceHomePage);
