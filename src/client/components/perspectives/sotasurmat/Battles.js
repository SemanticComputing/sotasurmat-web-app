import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ResultTable from '../../facet_results/ResultTable'
import LeafletMap from '../../facet_results/LeafletMap'
import TemporalMap from '../../facet_results/TemporalMap'
import ExportCSV from '../../facet_results/ExportCSV'
import {
  MAPBOX_ACCESS_TOKEN,
  MAPBOX_STYLE
} from '../../../configs/sotasurmat/GeneralConfig'
import { createPopUpContentSotasurmat } from '../../../configs/sotasurmat/Leaflet/LeafletConfig'

const Battles = props => {
  const { rootUrl, perspective /* screenSize */ } = props
  // const layerControlExpanded = screenSize === 'md' ||
  //   screenSize === 'lg' ||
  //   screenSize === 'xl'
  return (
    <>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
        screenSize={props.screenSize}
        layoutConfig={props.layoutConfig}
      />
      <Route
        exact path={`${rootUrl}/${perspective.id}/faceted-search`}
        render={() => <Redirect to={`${rootUrl}/${perspective.id}/faceted-search/table`} />}
      />
      <Route
        path={[`${props.rootUrl}/${perspective.id}/faceted-search/table`, '/iframe.html']}
        render={routeProps =>
          <ResultTable
            data={props.perspectiveState}
            facetUpdateID={props.facetState.facetUpdateID}
            resultClass='battles'
            facetClass='battles'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            rootUrl={rootUrl}
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/map`}
        render={() =>
          <LeafletMap
            mapBoxAccessToken={MAPBOX_ACCESS_TOKEN}
            mapBoxStyle={MAPBOX_STYLE}
            center={props.perspectiveState.maps.battlePlaces.center}
            zoom={props.perspectiveState.maps.battlePlaces.zoom}
            results={props.perspectiveState.results}
            leafletMapState={props.leafletMapState}
            pageType='facetResults'
            facetUpdateID={props.facetState.facetUpdateID}
            // facet={}
            // facetID=''
            resultClass='battlePlaces'
            facetClass='battles'
            mapMode='cluster'
            instance={props.perspectiveState.instanceTableData}
            createPopUpContent={createPopUpContentSotasurmat}
            popupMaxHeight={320}
            popupMinWidth={280}
            fetchResults={props.fetchResults}
            fetchGeoJSONLayers={props.fetchGeoJSONLayers}
            clearGeoJSONLayers={props.clearGeoJSONLayers}
            fetchByURI={props.fetchByURI}
            fetching={props.perspectiveState.fetching}
            showInstanceCountInClusters={false}
            updateFacetOption={props.updateFacetOption}
            updateMapBounds={props.updateMapBounds}
            showError={props.showError}
            showExternalLayers={false}
            // layerControlExpanded={layerControlExpanded}
            // customMapControl
            // layerConfigs={layerConfigs}
            infoHeaderExpanded={props.perspectiveState.facetedSearchHeaderExpanded}
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${props.rootUrl}/battles/faceted-search/animation`}
        render={() =>
          <TemporalMap
            results={props.perspectiveState.results}
            resultClass='battlePlacesAnimation'
            facetClass='battles'
            fetchResults={props.fetchResults}
            fetching={props.perspectiveState.fetching}
            animationValue={props.animationValue}
            animateMap={props.animateMap}
            facetUpdateID={props.facetState.facetUpdateID}
          />}
      />
      <Route
        path={`${props.rootUrl}/battles/faceted-search/csv`}
        render={() =>
          <ExportCSV
            resultClass='battlePlaces'
            facetClass='battles'
            facetUpdateID={props.facetState.facetUpdateID}
            facets={props.facetState.facets}
          />}
      />
    </>
  )
}
Battles.propTypes = {
  /**
   * Faceted search configs and results of this perspective.
   */
  perspectiveState: PropTypes.object.isRequired,
  /**
    * Facet configs and values.
    */
  facetState: PropTypes.object.isRequired,
  /**
    * Facet values where facets constrain themselves, used for statistics.
    */
  facetConstrainSelfState: PropTypes.object,
  /**
    * Leaflet map config and external layers.
    */
  leafletMapState: PropTypes.object.isRequired,
  /**
    * Redux action for fetching paginated results.
    */
  fetchPaginatedResults: PropTypes.func.isRequired,
  /**
    * Redux action for fetching all results.
    */
  fetchResults: PropTypes.func.isRequired,
  /**
    * Redux action for fetching facet values for statistics.
    */
  fetchFacetConstrainSelf: PropTypes.func.isRequired,
  /**
    * Redux action for loading external GeoJSON layers.
    */
  fetchGeoJSONLayers: PropTypes.func.isRequired,
  /**
    * Redux action for loading external GeoJSON layers via backend.
    */
  fetchGeoJSONLayersBackend: PropTypes.func.isRequired,
  /**
    * Redux action for clearing external GeoJSON layers.
    */
  clearGeoJSONLayers: PropTypes.func.isRequired,
  /**
    * Redux action for fetching information about a single entity.
    */
  fetchByURI: PropTypes.func.isRequired,
  /**
    * Redux action for updating the page of paginated results.
    */
  updatePage: PropTypes.func.isRequired,
  /**
    * Redux action for updating the rows per page of paginated results.
    */
  updateRowsPerPage: PropTypes.func.isRequired,
  /**
    * Redux action for sorting the paginated results.
    */
  sortResults: PropTypes.func.isRequired,
  /**
    * Redux action for updating the active selection or config of a facet.
    */
  showError: PropTypes.func.isRequired,
  /**
    * Redux action for showing an error
    */
  updateFacetOption: PropTypes.func.isRequired,
  /**
    * Routing information from React Router.
    */
  routeProps: PropTypes.object.isRequired,
  /**
    * Perspective config.
    */
  perspective: PropTypes.object.isRequired,
  /**
    * State of the animation, used by TemporalMap.
    */
  animationValue: PropTypes.array.isRequired,
  /**
    * Redux action for animating TemporalMap.
    */
  animateMap: PropTypes.func.isRequired,
  /**
    * Current screen size.
    */
  screenSize: PropTypes.string.isRequired,
  /**
    * Root url of the application.
    */
  rootUrl: PropTypes.string.isRequired,
  layoutConfig: PropTypes.object.isRequired
}

export default Battles
