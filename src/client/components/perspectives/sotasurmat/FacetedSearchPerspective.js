import React from 'react'
import PropTypes from 'prop-types'
import Victims from './Victims'
import Battles from './Battles'

/**
 * A component for creating a faceted search perspective for a semantic portal.
 */
const FacetedSearchPerspective = props => {
  const renderPerspective = () => {
    let perspectiveElement = null
    switch (props.perspective.id) {
      case 'victims':
        perspectiveElement =
          <Victims
            facetResults={props.facetResults}
            placesResults={props.placesResults}
            datesResults={props.datesResults}
            leafletMapLayers={props.leafletMap}
            facetData={props.facetData}
            facetDataConstrainSelf={props.facetDataConstrainSelf}
            fetchPaginatedResults={props.fetchPaginatedResults}
            fetchFacetConstrainSelf={props.fetchFacetConstrainSelf}
            fetchResults={props.fetchResults}
            fetchGeoJSONLayers={props.fetchGeoJSONLayers}
            fetchByURI={props.fetchByURI}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            updateFacetOption={props.updateFacetOption}
            sortResults={props.sortResults}
            routeProps={props.routeProps}
            perspective={props.perspective}
            animationValue={props.animationValue}
            animateMap={props.animateMap}
            screenSize={props.screenSize}
            rootUrl={props.rootUrl}
          />
        break
      case 'battles':
        perspectiveElement =
          <Battles
            facetResults={props.facetResults}
            placesResults={props.placesResults}
            leafletMapLayers={props.leafletMap}
            facetData={props.facetData}
            fetchPaginatedResults={props.fetchPaginatedResults}
            fetchResults={props.fetchResults}
            fetchGeoJSONLayers={props.fetchGeoJSONLayers}
            fetchByURI={props.fetchByURI}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            updateFacetOption={props.updateFacetOption}
            sortResults={props.sortResults}
            routeProps={props.routeProps}
            perspective={props.perspective}
            animationValue={props.animationValue}
            animateMap={props.animateMap}
            screenSize={props.screenSize}
            rootUrl={props.rootUrl}
          />
        break
      default:
        perspectiveElement = <div />
        break
    }
    return perspectiveElement
  }
  return (
    <>
      {renderPerspective()}
    </>
  )
}

FacetedSearchPerspective.propTypes = {
  /**
   * Faceted search configs and results of this perspective.
   */
  facetResults: PropTypes.object.isRequired,
  /**
   * Faceted search configs and results of places related to this perspective.
   */
  placesResults: PropTypes.object.isRequired,
  /**
   * Facet configs and values.
   */
  facetData: PropTypes.object.isRequired,
  /**
   * Facet configs and values.
   */
  facetDataConstrainSelf: PropTypes.object,
  fetchFacetConstrainSelf: PropTypes.func,
  /**
   * Leaflet map config and external layers.
   */
  leafletMap: PropTypes.object.isRequired,
  /**
   * Redux action for fetching paginated results.
   */
  fetchPaginatedResults: PropTypes.func.isRequired,
  /**
   * Redux action for fetching all results.
   */
  fetchResults: PropTypes.func.isRequired,
  /**
   * Redux action for loading external GeoJSON layers.
   */
  fetchGeoJSONLayers: PropTypes.func.isRequired,
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
  rootUrl: PropTypes.string.isRequired
}

export default FacetedSearchPerspective
