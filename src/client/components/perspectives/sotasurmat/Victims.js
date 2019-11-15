import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import PerspectiveTabs from '../../main_layout/PerspectiveTabs';
import ResultTable from '../../facet_results/ResultTable';
import Pie from '../../facet_results/Pie';
import LineChart from '../../facet_results/LineChart';
import ExportCSV from '../../facet_results/ExportCSV';
import LeafletMap from '../../facet_results/LeafletMap';

const Victims = props => {
//console.log(props)
  return (
    <React.Fragment>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
      />
      <Route
        exact path={`${props.rootUrl}/victims/faceted-search`}
        render={() => <Redirect to={`${props.rootUrl}/victims/faceted-search/table`} />}
      />
      <Route
        path={`${props.rootUrl}/victims/faceted-search/table`}
        render={routeProps =>
          <ResultTable
            rootUrl={props.rootUrl}
            data={props.victims}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='victims'
            facetClass='victims'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            perspective={props.perspective}
          />
        }
      />
      <Route
        path={`${props.rootUrl}/victims/faceted-search/pie`}
        render={routeProps =>
          <Pie
            data={props.facetData.facets}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='victims'
            facetClass='victims'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            fetchFacet={props.fetchFacet}
            resultCount={props.victims.resultCount}
          />
        }
      />
      <Route
        path={`${props.rootUrl}/victims/faceted-search/line`}
        render={routeProps =>
          <LineChart
            data={props.dates}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='dates'
            facetClass='victims'
            fetchPaginatedResults={props.fetchPaginatedResults}
            fetchResults={props.fetchResults}
            updatePage={props.updatePage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            fetchFacet={props.fetchFacet}
            resultCount={props.victims.resultCount}
          />
        }
      />
      <Route
        path={`${props.rootUrl}/victims/faceted-search/map`}
        render={() =>
          <LeafletMap
            results={props.places.results}
            pageType='facetResults'
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='deathPlaces'
            facetClass='victims'
            instance={props.places.instance}
            fetchResults={props.fetchResults}
            fetchByURI={props.fetchByURI}
            fetching={props.places.fetching}
            mapMode={'cluster'}
            showInstanceCountInClusters={true}
          />}
      />
      <Route
        path={`${props.rootUrl}/victims/faceted-search/csv`}
        render={() =>
          <ExportCSV
            resultClass='csvDeaths'
            facetClass='victims'
            facetUpdateID={props.facetData.facetUpdateID}
            facets={props.facetData.facets}
          />}
      />
    </React.Fragment>
  );
};

Victims.propTypes = {
  places: PropTypes.object.isRequired,
  rootUrl: PropTypes.string.isRequired,
  victims: PropTypes.object.isRequired,
  dates: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchPaginatedResults: PropTypes.func.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired,
  updateFacetOption: PropTypes.func.isRequired,
  fetchFacet: PropTypes.func.isRequired,
  resultCount: PropTypes.number,
  perspective: PropTypes.object.isRequired
};

export default Victims;
