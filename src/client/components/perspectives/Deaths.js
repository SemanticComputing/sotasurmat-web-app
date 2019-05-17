import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import PerspectiveTabs from '../main_layout/PerspectiveTabs';
import ResultTable from '../facet_results/ResultTable';
import Pie from '../facet_results/Pie';
//import Network from '../facet_results/Network';

let Deaths = props => {
  return (
    <React.Fragment>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={{
          [`${props.rootUrl}/surmatut/table`]: {
            label: 'table',
            value: 0,
            icon: 'CalendarViewDay',
          },
          [`${props.rootUrl}/surmatut/pie`]: {
            label: 'kaavio',
            value: 1,
            icon: 'PieChart',
          }
          //},
          //'/manuscripts/migrations': {
          //  label: 'migrations',
          //  value: 2,
          //  icon: 'Redo',
          //S}
        }}
      />
      <Route
        exact path={`${props.rootUrl}/surmatut`}
        render={() => <Redirect to={`${props.rootUrl}/surmatut/table`} />}
      />
      <Route
        path={`${props.rootUrl}/surmatut/table`}
        render={routeProps =>
          <ResultTable
            rootUrl={props.rootUrl}
            data={props.deaths}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='deaths'
            facetClass='deaths'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            sortResults={props.sortResults}
            routeProps={routeProps}
          />
        }
      />
      <Route
        path={`${props.rootUrl}/surmatut/pie`}
        render={routeProps =>
          <Pie
            data={props.facetData.facets}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='deaths'
            facetClass='deaths'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            fetchFacet={props.fetchFacet}
            resultCount={props.deaths.resultCount}
          />
        }
      />
      {/*
      <Route
        path={'/manuscripts/production_places'}
        render={() =>
          <LeafletMap
            results={props.places.results}
            facetID={'productionPlace'}
            facetUpdateID={props.facetData.facetUpdateID}
            facet={props.facetData.facets.productionPlace}
            resultClass='places'
            facetClass='manuscripts'
            mapMode={'cluster'}
            variant='productionPlaces'
            instance={props.places.instance}
            fetchResults={props.fetchResults}
            fetchByURI={props.fetchByURI}
            fetching={props.places.fetching}
            showInstanceCountInClusters={true}
            updateFacetOption={props.updateFacetOption}
          />}
      />
      <Route
        path={'/manuscripts/statistics'}
        render={() =>
          <Pie
            data={props.places.results}
            fetchResults={props.fetchResults}
          />}
      />
      <Route
        path={'/manuscripts/migrations'}
        render={() =>
          <Deck
            results={props.places.results}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='places'
            facetClass='manuscripts'
            instance={props.places.instance}
            fetchResults={props.fetchResults}
            fetchByURI={props.fetchByURI}
            fetching={props.places.fetching}
            mapMode={'cluster'}
            variant='migrations'
            showInstanceCountInClusters={true}
          />}
      />
      */}
    </React.Fragment>
  );
};

Deaths.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  deaths: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchPaginatedResults: PropTypes.func.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired,
  updateFacetOption: PropTypes.func.isRequired,
  fetchFacet: PropTypes.func.isRequired, // lisäys
  resultCount: PropTypes.number.isRequired, //
};

export default Deaths;
