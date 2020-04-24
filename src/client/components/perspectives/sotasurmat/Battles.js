import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ResultTable from '../../facet_results/ResultTable'
import LeafletMap from '../../facet_results/LeafletMap'
import TemporalMap from '../../facet_results/TemporalMap'
import ExportCSV from '../../facet_results/ExportCSV'

const Battles = props => {
  return (
    <>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
        screenSize={props.screenSize}
      />
      <Route
        exact path={`${props.rootUrl}/battles/faceted-search`}
        render={() => <Redirect to={`${props.rootUrl}/battles/faceted-search/table`} />}
      />
      <Route
        path={`${props.rootUrl}/battles/faceted-search/table`}
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
            perspective={props.perspective}
          />}
      />
      <Route
        path={`${props.rootUrl}/battles/faceted-search/map`}
        render={() =>
          <LeafletMap
            center={[64.00, 30.00]}
            zoom={5}
            results={props.battles.results}
            pageType='facetResults'
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='battlePlaces'
            facetClass='battles'
            instance={props.battles.instance}
            fetchResults={props.fetchResults}
            fetchByURI={props.fetchByURI}
            fetching={props.battles.fetching}
            mapMode='cluster'
            showMapModeControl={false}
            showInstanceCountInClusters={false}
          />}
      />
      <Route
        path={`${props.rootUrl}/battles/faceted-search/animation`}
        render={() =>
          <TemporalMap
            results={props.battles.results}
            resultClass='battlePlacesAnimation'
            facetClass='battles'
            fetchResults={props.fetchResults}
            fetching={props.battles.fetching}
            animationValue={props.animationValue}
            animateMap={props.animateMap}
            facetUpdateID={props.facetData.facetUpdateID}
          />}
      />
      <Route
        path={`${props.rootUrl}/battles/faceted-search/csv`}
        render={() =>
          <ExportCSV
            resultClass='battlePlaces'
            facetClass='battles'
            facetUpdateID={props.facetData.facetUpdateID}
            facets={props.facetData.facets}
          />}
      />
    </>
  )
}

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
  routeProps: PropTypes.object.isRequired,
  perspective: PropTypes.object.isRequired,
  animationValue: PropTypes.array.isRequired,
  animateMap: PropTypes.func.isRequired,
  screenSize: PropTypes.string.isRequired
}

export default Battles
