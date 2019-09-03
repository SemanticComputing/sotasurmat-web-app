import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import PerspectiveTabs from '../main_layout/PerspectiveTabs';
import ResultTable from '../facet_results/ResultTable';
import Pie from '../facet_results/Pie';
import LineChart from '../facet_results/LineChart';
import ExportCSV from '../facet_results/ExportCSV';

let Surmatut = props => {
  return (
    <React.Fragment>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
      />
      <Route
        exact path={`${props.rootUrl}/surmatut/faceted-search`}
        render={() => <Redirect to={`${props.rootUrl}/surmatut/faceted-search/lista`} />}
      />
      <Route
        path={`${props.rootUrl}/surmatut/faceted-search/lista`}
        render={routeProps =>
          <ResultTable
            rootUrl={props.rootUrl}
            data={props.surmatut}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='surmatut'
            facetClass='surmatut'
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
        path={`${props.rootUrl}/surmatut/faceted-search/piirakkakaavio`}
        render={routeProps =>
          <Pie
            data={props.facetData.facets}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='surmatut'
            facetClass='surmatut'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            fetchFacet={props.fetchFacet}
            resultCount={props.surmatut.resultCount}
          />
        }
      />
      <Route
        path={`${props.rootUrl}/surmatut/faceted-search/viivakaavio`}
        render={routeProps =>
          <LineChart
            data={props.dates}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='dates'
            facetClass='surmatut'
            fetchPaginatedResults={props.fetchPaginatedResults}
            fetchResults={props.fetchResults}
            updatePage={props.updatePage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            fetchFacet={props.fetchFacet}
            resultCount={props.surmatut.resultCount}
          />
        }
      />
      <Route
        path={`${props.rootUrl}/surmatut/faceted-search/csv`}
        render={() =>
          <ExportCSV
            resultClass='csvDeaths'
            facetClass='surmatut'
            facetUpdateID={props.facetData.facetUpdateID}
            facets={props.facetData.facets}
          />}
      />
    </React.Fragment>
  );
};

Surmatut.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  surmatut: PropTypes.object.isRequired,
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
  fetchFacet: PropTypes.func.isRequired, // lisäys
  resultCount: PropTypes.number, //
  perspective: PropTypes.object.isRequired
};

export default Surmatut;
