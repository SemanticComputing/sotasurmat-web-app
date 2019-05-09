import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import PerspectiveTabs from '../main_layout/PerspectiveTabs';
import ResultTable from '../facet_results/ResultTable';
import Pie from '../facet_results/Pie';
import LeafletMap from '../facet_results/LeafletMap';
import Deck from '../facet_results/Deck';


let Manuscripts = props => {
  return (
    <React.Fragment>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={{
          '/surmatut/table': {
            label: 'table',
            value: 0,
            icon: 'CalendarViewDay',
          },
          '/surmatut/pie': {
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
        exact path='/surmatut'
        render={() => <Redirect to='surmatut/table' />}
      />
      <Route
        path={'/surmatut/table'}
        render={routeProps =>
          <ResultTable
            data={props.manuscripts}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='manuscripts'
            facetClass='manuscripts'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            sortResults={props.sortResults}
            routeProps={routeProps}
          />
        }
      />
      <Route
        path={'/surmatut/pie'}
        render={routeProps =>
          <Pie
            data={props.facetData.facets}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='manuscripts'
            facetClass='manuscripts'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            fetchFacet={props.fetchFacet}
            resultCount={props.manuscripts.resultCount}
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

Manuscripts.propTypes = {
  manuscripts: PropTypes.object.isRequired,
  places: PropTypes.object.isRequired,
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

export default Manuscripts;
