import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import PerspectiveTabs from '../../main_layout/PerspectiveTabs';
import ResultTable from '../../facet_results/ResultTable';
import LeafletMap from '../../facet_results/LeafletMap';
import TemporalMap from '../../facet_results/TemporalMap';
import ExportCSV from '../../facet_results/ExportCSV';

let Taistelut = props => {
  return (
    <React.Fragment>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
      />
      <Route
        exact path={`${props.rootUrl}/taistelut/faceted-search`}
        render={() => <Redirect to={`${props.rootUrl}/taistelut/faceted-search/table`} />}
      />
      <Route
        path={`${props.rootUrl}/taistelut/faceted-search/table`}
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
            perspective={props.perspective}
          />
        }
      />
      <Route
        path={`${props.rootUrl}/taistelut/faceted-search/map`}
        render={() =>
          <LeafletMap
            results={props.taistelut.results}
            pageType='facetResults'
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='battlePlaces'
            facetClass='taistelut'
            instance={props.taistelut.instance}
            fetchResults={props.fetchResults}
            fetchByURI={props.fetchByURI}
            fetching={props.taistelut.fetching}
            mapMode={'cluster'}
            showInstanceCountInClusters={false}
          />}
      />
      {/*   <Route
        path={`${props.rootUrl}/taistelut/faceted-search/animation`}
        render={() =>
          <TemporalMap
            results={props.taistelut.results}
            resultClass='battlePlacesAnimation'
            facetClass='taistelut'
            fetchResults={props.fetchResults}
            fetching={props.taistelut.fetching}
            animationValue={props.animationValue}
            animateMap={props.animateMap}
          />}
      /> */}
      <Route
        path={`${props.rootUrl}/taistelut/faceted-search/csv`}
        render={() =>
          <ExportCSV
            resultClass='battlePlaces'
            facetClass='taistelut'
            facetUpdateID={props.facetData.facetUpdateID}
            facets={props.facetData.facets}
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
  perspective: PropTypes.object.isRequired,
  animationValue: PropTypes.array.isRequired,
  animateMap: PropTypes.func.isRequired,
};

export default Taistelut;
