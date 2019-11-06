import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import PerspectiveTabs from './PerspectiveTabs';
import SurmatutHomePageTable from './SurmatutHomePageTable';
import SurmatutExtraTable from './SurmatutExtraTable';
import LeafletMap from '../facet_results/LeafletMap';
import Export from '../facet_results/Export';
import { Route, Redirect } from 'react-router-dom';
import { has } from 'lodash';

const styles = () => ({
  root: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    height: 'calc(100% - 72px)',
    overflow: 'auto'
  },
  spinnerContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class InstanceHomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      localID: null
    };
  }

  componentDidMount = () => {
    let uri = '';
    let base = 'http://ldf.fi/siso';
    const locationArr = this.props.routeProps.location.pathname.split('/');
    let localID = locationArr.pop();
    this.props.tabs.map(tab => {
      if (localID === tab.id) {
        localID = locationArr.pop(); // pop again if tab id
      }
    });
    this.setState({ localID: localID });
    switch(this.props.resultClass) {
      case 'surmatut':
        this.setState({
          instanceHeading: 'Henkilö',
        });
        uri = `${base}/death_records/${localID}`;
        break;
    }
    this.props.fetchByURI({
      resultClass: this.props.resultClass,
      facetClass: null,
      variant: null,
      uri: uri
    });
    this.props.fetchByURI({
      resultClass: 'personExtras',
      facetClass: null,
      variant: null,
      uri: uri
    });
  }

  createPlaceArray = events => {
    let places = {};
    events = Array.isArray(events) ? events : [ events ];
    events.map(event => {
      if (has(event, 'place')) {
        const eventPlaces = Array.isArray(event.place) ? event.place : [ event.place ];
        eventPlaces.map(place => {
          if (!has(places, place.id)) {
            places[place.id] = {
              id: place.id,
              prefLabel: place.prefLabel,
              lat: place.lat,
              long: place.long,
              events: [ event ] // gather events here
            };
          } else {
            places[place.id].events.push(event);
          }
        });
      }
    });
    places = Object.values(places);
    places.map(place => place.instanceCount = place.events.length);
    return places;
  }

  getVisibleRows = rows => {
    let visibleRows = [];
    const instanceClass = this.props.data.type ? this.props.data.type.id : '';
    rows.map(row => {
      if ((has(row, 'onlyForClass') && row.onlyForClass == instanceClass)
       || !has(row, 'onlyForClass')) {
        visibleRows.push(row);
      }
    });
    return visibleRows;
  }

  render = () => {
    const { classes, data, extras, isLoading, resultClass } = this.props;
    const hasData = data !== null && Object.values(data).length >= 1;
console.log(this.props)
    return(
      <div className={classes.root}>
        <PerspectiveTabs
          routeProps={this.props.routeProps}
          tabs={this.props.tabs}
        />
        <Paper square className={classes.content}>
          {isLoading &&
            <div className={classes.spinnerContainer}>
              <CircularProgress style={{ color: purple[500] }} thickness={5} />
            </div>
          }
          {!hasData &&
            <React.Fragment>
              <Typography variant='h6'>
                No data found for id: <span style={{ fontStyle: 'italic'}}>{this.state.localID}</span>
              </Typography>
            </React.Fragment>
          }
          {hasData &&
            <React.Fragment>
              <Route
                exact path={`${this.props.rootUrl}/${resultClass}/page/${this.state.localID}`}
                render={() => <Redirect to={`${this.props.rootUrl}/${resultClass}/page/${this.state.localID}/table`} />}
              />
              <Route
                path={`${this.props.rootUrl}/${resultClass}/page/${this.state.localID}/table`}
                render={() =>
                  <SurmatutHomePageTable
                    data={data}
                    tableRows={this.getVisibleRows(this.props.tableRows)}
                  />}
              />
              <Route
                path={`${this.props.rootUrl}/${resultClass}/page/${this.state.localID}/extra`}
                render={() =>
                  <SurmatutExtraTable
                    extras={extras}
                    tableRows={this.getVisibleRows(this.props.tableRows)}
                  />}
              />
              <Route
                path={`${this.props.rootUrl}/${resultClass}/page/${this.state.localID}/map`}
                render={() =>
                  <LeafletMap
                    results={this.createPlaceArray(data.event)}
                    resultClass='instanceEvents'
                    pageType='instancePage'
                    mapMode='cluster'
                    instance={null}
                    fetchByURI={this.props.fetchByURI}
                    fetching={this.props.isLoading}
                    showInstanceCountInClusters={true}
                  />}
              />
              <Route
                path={`${this.props.rootUrl}/${resultClass}/page/${this.state.localID}/export`}
                render={() =>
                  <Export
                    sparqlQuery={this.props.sparqlQuery}
                    pageType='instancePage'
                    id={data.id}
                  />}
              />
            </React.Fragment>
          }
        </Paper>
      </div>
    );
  }
}

InstanceHomePage.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  resultClass: PropTypes.string.isRequired,
  data: PropTypes.object,
  extras: PropTypes.object,
  sparqlQuery: PropTypes.string,
  tableRows: PropTypes.array.isRequired,
  tabs: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  routeProps: PropTypes.object.isRequired
};

export default withStyles(styles)(InstanceHomePage);
