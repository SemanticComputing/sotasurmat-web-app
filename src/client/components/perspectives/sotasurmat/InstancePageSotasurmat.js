import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@mui/styles/withStyles'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import InstancePageTable from '../../main_layout/InstancePageTable'
// import LeafletMap from '../../facet_results/LeafletMap'
// import Export from '../../facet_results/Export'
import VictimHomePageTable from './VictimHomePageTable'
import VictimHomePageExtraTable from './VictimHomePageExtraTable'
import { Route, Redirect } from 'react-router-dom'
import { has } from 'lodash'

const styles = () => ({
  root: {
    width: '100%',
    height: '100%'
  },
  content: props => ({
    padding: 0,
    width: '100%',
    height: `calc(100% - ${props.layoutConfig.tabHeight}px)`,
    overflow: 'auto'
  }),
  spinnerContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

/**
 * A component for generating a landing page for a single entity.
 */
class InstancePageSotasurmat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      localID: null,
      victimsPage: false
    }
  }

  componentDidMount = () => this.fetchTableData()

  componentDidUpdate = prevProps => {
    // handle the case when the TABLE tab was not originally active
    const prevPathname = prevProps.location.pathname
    const currentPathname = this.props.location.pathname
    if (!this.hasTableData() && prevPathname !== currentPathname && currentPathname.endsWith('table')) {
      this.fetchTableData()
    }
    // handle browser's back button
    const localID = this.getLocalIDFromURL()
    if (this.state.localID !== localID) {
      this.fetchTableData()
    }
  }

  hasTableData = () => {
    const { instanceTableData } = this.props.perspectiveState
    return instanceTableData !== null && Object.values(instanceTableData).length >= 1
  }

  fetchTableData = () => {
    const { perspectiveConfig } = this.props
    const localID = this.getLocalIDFromURL()
    this.setState({ localID })
    let uri = ''
    const base = 'http://ldf.fi/siso'
    const resultClass = perspectiveConfig.id
    switch (resultClass) {
      case 'victims':
        uri = `${base}/death_records/${localID}`
        this.setState({ victimsPage: true })
        break
      case 'battles':
        uri = `${base}/sita/${localID}`
        break
      case 'sources':
        uri = `${base}/sources/${localID}`
        break
    }
    this.props.fetchByURI({
      perspectiveID: resultClass,
      resultClass,
      facetClass: null,
      variant: null,
      uri: uri
    })
    if (resultClass === 'victims') {
      this.props.fetchResults({
        perspectiveID: resultClass,
        resultClass: 'personExtras',
        uri
      })
    }
  }

  getLocalIDFromURL = () => {
    const locationArr = this.props.location.pathname.split('/')
    let localID = locationArr.pop()
    this.props.perspectiveConfig.instancePageTabs.forEach(tab => {
      if (localID === tab.id) {
        localID = locationArr.pop() // pop again if tab id
      }
    })
    return localID
  }

  getVisibleRows = rows => {
    const { instanceTableData } = this.props.perspectiveState
    const visibleRows = []
    const instanceClass = instanceTableData.type ? instanceTableData.type.id : ''
    rows.forEach(row => {
      if ((has(row, 'onlyForClass') && row.onlyForClass === instanceClass) ||
       !has(row, 'onlyForClass')) {
        visibleRows.push(row)
      }
    })
    return visibleRows
  }

  render = () => {
    const { classes, perspectiveState, perspectiveConfig, rootUrl, screenSize, layoutConfig } = this.props
    const { victimsPage } = this.state
    const { instanceTableData, fetching } = perspectiveState
    const resultClass = perspectiveConfig.id
    const defaultInstancePageTab = perspectiveConfig.defaultInstancePageTab
      ? perspectiveConfig.defaultInstancePageTab
      : 'table'
    const hasTableData = this.hasTableData()
    return (
      <div className={classes.root}>
        <PerspectiveTabs
          tabs={perspectiveConfig.instancePageTabs}
          screenSize={screenSize}
          layoutConfig={layoutConfig}
        />
        <Paper square className={classes.content}>
          {fetching && !hasTableData &&
            <div className={classes.spinnerContainer}>
              <CircularProgress />
            </div>}
          {!hasTableData &&
            <div className={classes.spinnerContainer}>
              <Typography variant='h6'>
                No data found for id: <span style={{ fontStyle: 'italic' }}>{this.state.localID}</span>
              </Typography>
            </div>}
          {/* make sure that tableData exists before rendering any components */}
          {hasTableData && !victimsPage &&
            <>
              <Route
                exact path={`${rootUrl}/${resultClass}/page/${this.state.localID}`}
                render={routeProps =>
                  <Redirect
                    to={{
                      pathname: `${rootUrl}/${resultClass}/page/${this.state.localID}/${defaultInstancePageTab}`,
                      hash: routeProps.location.hash
                    }}
                  />}
              />
              <Route
                path={[`${rootUrl}/${resultClass}/page/${this.state.localID}/table`, '/iframe.html']} // support also rendering in Storybook
                render={() =>
                  <InstancePageTable
                    perspectiveConfig={perspectiveConfig}
                    resultClass={resultClass}
                    data={instanceTableData}
                    properties={this.getVisibleRows(perspectiveState.properties)}
                    screenSize={screenSize}
                    layoutConfig={layoutConfig}
                  />}
              />
            </>}
          {hasTableData && victimsPage &&
            <>
              <Route
                exact path={`${rootUrl}/${resultClass}/page/${this.state.localID}`}
                render={routeProps =>
                  <Redirect
                    to={{
                      pathname: `${rootUrl}/${resultClass}/page/${this.state.localID}/${defaultInstancePageTab}`,
                      hash: routeProps.location.hash
                    }}
                  />}
              />
              <Route
                path={[`${rootUrl}/${resultClass}/page/${this.state.localID}/table`, '/iframe.html']} // support also rendering in Storybook
                render={() =>
                  <VictimHomePageTable data={instanceTableData} />}
              />
              <Route
                path={`${this.props.rootUrl}/${resultClass}/page/${this.state.localID}/extra`}
                render={() =>
                  <VictimHomePageExtraTable data={perspectiveState.results} />}
              />
            </>}
        </Paper>
      </div>
    )
  }
}

InstancePageSotasurmat.propTypes = {
  /**
   * Faceted search configs and results of this perspective.
   */
  perspectiveState: PropTypes.object.isRequired,
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
  location: PropTypes.object.isRequired,
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

export default withStyles(styles)(InstancePageSotasurmat)
