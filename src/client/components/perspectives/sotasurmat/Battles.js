import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ResultTable from '../../facet_results/ResultTable'
import LeafletMap from '../../facet_results/LeafletMap'
import TemporalMap from '../../facet_results/TemporalMap'
import ExportCSV from '../../facet_results/ExportCSV'

const Battles = props => {
  const { rootUrl, perspective } = props
  return (
    <>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
        screenSize={props.screenSize}
      />
      <Route
        exact path={`${rootUrl}/${perspective.id}/faceted-search`}
        render={() => <Redirect to={`${rootUrl}/${perspective.id}/faceted-search/table`} />}
      />
      <Route
        path={[`${props.rootUrl}/${perspective.id}/faceted-search/table`, '/iframe.html']}
        render={routeProps =>
          <ResultTable
            data={props.facetResults}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='battles'
            facetClass='battles'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            rootUrl={rootUrl}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/map`}
        render={() =>
          <LeafletMap
            center={[64.00, 30.00]}
            zoom={5}
            results={props.facetResults.results}
            pageType='facetResults'
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='battlePlaces'
            facetClass='battles'
            instance={props.facetResults.instance}
            fetchResults={props.fetchResults}
            fetchGeoJSONLayers={props.fetchGeoJSONLayers}
            fetchByURI={props.fetchByURI}
            fetching={props.facetResults.fetching}
            mapMode='cluster'
            showMapModeControl={false}
            showInstanceCountInClusters={false}
            updateFacetOption={props.updateFacetOption}
            showExternalLayers={false}
          />}
      />
      <Route
        path={`${props.rootUrl}/battles/faceted-search/animation`}
        render={() =>
          <TemporalMap
            results={props.facetResults.results}
            resultClass='battlePlacesAnimation'
            facetClass='battles'
            fetchResults={props.fetchResults}
            fetching={props.facetResults.fetching}
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
  facetResults: PropTypes.object.isRequired,
  leafletMapLayers: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchGeoJSONLayers: PropTypes.func.isRequired,
  fetchPaginatedResults: PropTypes.func.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired,
  updateFacetOption: PropTypes.func.isRequired,
  perspective: PropTypes.object.isRequired,
  animationValue: PropTypes.array.isRequired,
  animateMap: PropTypes.func.isRequired,
  screenSize: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired
}

export default Battles
