import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import PerspectiveTabs from '../main_layout/PerspectiveTabs';
import ResultTable from '../facet_results/ResultTable';
import LeafletMap from '../facet_results/LeafletMap';

let Taistelut = props => {
  return (
    <React.Fragment>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
      />
      <Route
        exact path='/taistelut/faceted-search'
        render={() => <Redirect to='/taistelut/faceted-search/map' />}
      />
      <Route
        path={'/taistelut/faceted-search/table'}
        render={routeProps =>
          <ResultTable
            rootUrl={props.rootUrl}
            data={props.taistelut}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='taistelut'
            facetClass='taistelut'
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
        path={'/taistelut/faceted-search/map'}
        render={() =>
          <LeafletMap
            results={props.taistelut.results}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='taistelut'
            facetClass='taistelut'
            instance={props.taistelut.instance}
            fetchResults={props.fetchResults}
            fetchByURI={props.fetchByURI}
            fetching={props.taistelut.fetching}
            mapMode={'cluster'}
            variant='battletaistelut'
            showInstanceCountInClusters={false}
          />}
      />
    </React.Fragment>
  );
};

Taistelut.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  taistelut: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchPaginatedResults: PropTypes.func.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired,
  perspective: PropTypes.object.isRequired
};

export default Taistelut;