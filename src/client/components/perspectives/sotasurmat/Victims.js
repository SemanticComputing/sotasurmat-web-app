import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ResultTable from '../../facet_results/ResultTable'
import PieSotasurmat from './PieSotasurmat'
import LineChart from '../../facet_results/LineChart'
import ExportCSV from '../../facet_results/ExportCSV'
import LeafletMap from '../../facet_results/LeafletMap'

const Victims = props => {
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
            resultClass='victims'
            facetClass='victims'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            rootUrl={rootUrl}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/pie`}
        render={routeProps =>
          <PieSotasurmat
            data={props.facetDataConstrainSelf.facets}
            facetUpdateID={props.facetData.facetUpdateID}
            fetchFacetConstrainSelf={props.fetchFacetConstrainSelf}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/line`}
        render={routeProps =>
          <LineChart
            data={props.datesResults}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='dates'
            facetClass='victims'
            fetchResults={props.fetchResults}
            updatePage={props.updatePage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            resultCount={props.facetResults.resultCount}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/map`}
        render={() =>
          <LeafletMap
            center={[64.00, 30.00]}
            zoom={5}
            results={props.placesResults.results}
            pageType='facetResults'
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='deathPlaces'
            facetClass='victims'
            instance={props.placesResults.instance}
            fetchResults={props.fetchResults}
            fetchGeoJSONLayers={props.fetchGeoJSONLayers}
            fetchByURI={props.fetchByURI}
            fetching={props.placesResults.fetching}
            mapMode='cluster'
            showMapModeControl={false}
            showInstanceCountInClusters
            updateFacetOption={props.updateFacetOption}
            showExternalLayers={false}
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
    </>
  )
}

Victims.propTypes = {
  facetResults: PropTypes.object.isRequired,
  placesResults: PropTypes.object.isRequired,
  datesResults: PropTypes.object.isRequired,
  leafletMapLayers: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  facetDataConstrainSelf: PropTypes.object.isRequired,
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

export default Victims
