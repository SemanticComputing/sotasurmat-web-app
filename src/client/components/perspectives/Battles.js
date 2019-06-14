import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import PerspectiveTabs from '../main_layout/PerspectiveTabs';
import ResultTable from '../facet_results/ResultTable';
// import Tree from './Tree';
import LeafletMap from '../facet_results/LeafletMap';
// import Deck from './Deck';

let Battles = props => {
  //console.log(props.search.places)
  return (
    <React.Fragment>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={{
          [`${props.rootUrl}/taistelut/table`]: {
            label: 'lista',
            value: 0,
            icon: 'CalendarViewDay',
          },
          [`${props.rootUrl}/taistelut/map`]: {
            label: 'kartta',
            value: 1,
            icon: 'AddLocation',
          },
        }}
      />
      <Route
        exact path={`${props.rootUrl}/taistelut`}
        render={() => <Redirect to={`${props.rootUrl}/taistelut/table`} />}
      />
      <Route
        path={`${props.rootUrl}/taistelut/table`}
        render={routeProps =>
          <ResultTable
            rootUrl={props.rootUrl}
            data={props.battles}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='battles'
            facetClass='battles'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            perspectiveUrl='taistelut'
          />
        }
      />
      <Route
        path={`${props.rootUrl}/taistelut/map`}
        render={() =>
          <LeafletMap
            results={props.battles.results}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='battles'
            facetClass='battles'
            instance={props.battles.instance}
            fetchResults={props.fetchResults}
            fetchByURI={props.fetchByURI}
            fetching={props.battles.fetching}
            mapMode={'cluster'}
            variant='battlePlaces'
            showInstanceCountInClusters={false}
          />}
      />
    </React.Fragment>
  );
};

Battles.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  battles: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchPaginatedResults: PropTypes.func.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired
};

export default Battles;
