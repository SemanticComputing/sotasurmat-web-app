import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import purple from '@material-ui/core/colors/purple'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import InstanceHomePageTable from '../../main_layout/InstanceHomePageTable'
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
  content: {
    width: '100%',
    height: 'calc(100% - 72px)',
    overflow: 'auto'
  },
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
class InstanceHomePage extends React.Component {
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
    const prevPathname = prevProps.routeProps.location.pathname
    const currentPathname = this.props.routeProps.location.pathname
    if (prevPathname !== currentPathname && currentPathname.endsWith('table')) {
      this.fetchTableData()
    }
  }

  fetchTableData = () => {
    let uri = ''
    const base = 'http://ldf.fi/siso'
    const locationArr = this.props.routeProps.location.pathname.split('/')
    let localID = locationArr.pop()
    this.props.tabs.map(tab => {
      if (localID === tab.id) {
        localID = locationArr.pop() // pop again if tab id
      }
    })
    this.setState({ localID: localID })
    switch (this.props.resultClass) {
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
      resultClass: this.props.resultClass,
      facetClass: null,
      variant: null,
      uri: uri
    })
    this.props.fetchResults({
      resultClass: 'personExtras',
      uri: uri
    })
  }

  getVisibleRows = rows => {
    const visibleRows = []
    const instanceClass = this.props.tableData.type ? this.props.tableData.type.id : ''
    rows.map(row => {
      if ((has(row, 'onlyForClass') && row.onlyForClass === instanceClass) ||
       !has(row, 'onlyForClass')) {
        visibleRows.push(row)
      }
    })
    return visibleRows
  }

  render = () => {
    const { classes, tableData, results, isLoading, resultClass, rootUrl } = this.props
    const { victimsPage } = this.state
    const hasTableData = tableData !== null && Object.values(tableData).length >= 1
    return (
      <div className={classes.root}>
        <PerspectiveTabs
          routeProps={this.props.routeProps}
          tabs={this.props.tabs}
          screenSize={this.props.screenSize}
        />
        <Paper square className={classes.content}>
          {isLoading &&
            <div className={classes.spinnerContainer}>
              <CircularProgress style={{ color: purple[500] }} thickness={5} />
            </div>}
          {!hasTableData &&
            <>
              <Typography variant='h6'>
                No data found for id: <span style={{ fontStyle: 'italic' }}>{this.state.localID}</span>
              </Typography>
            </>}
          {hasTableData && !victimsPage &&
            <>
              <Route
                exact path={`${rootUrl}/${resultClass}/page/${this.state.localID}`}
                render={() => <Redirect to={`${rootUrl}/${resultClass}/page/${this.state.localID}/table`} />}
              />
              <Route
                path={[`${rootUrl}/${resultClass}/page/${this.state.localID}/table`, '/iframe.html']} // support also rendering in Storybook
                render={() =>
                  <InstanceHomePageTable
                    resultClass={resultClass}
                    data={tableData}
                    properties={this.getVisibleRows(this.props.properties)}
                  />}
              />
            </>}
          {hasTableData && victimsPage &&
            <>
              <Route
                exact path={`${rootUrl}/${resultClass}/page/${this.state.localID}`}
                render={() => <Redirect to={`${rootUrl}/${resultClass}/page/${this.state.localID}/table`} />}
              />
              <Route
                path={[`${rootUrl}/${resultClass}/page/${this.state.localID}/table`, '/iframe.html']} // support also rendering in Storybook
                render={() =>
                  <VictimHomePageTable data={tableData} />}
              />
              <Route
                path={`${this.props.rootUrl}/${resultClass}/page/${this.state.localID}/extra`}
                render={() =>
                  <VictimHomePageExtraTable data={results} />}
              />}
            </>}
        </Paper>
      </div>
    )
  }
}

InstanceHomePage.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  fetchResults: PropTypes.func.isRequired,
  resultClass: PropTypes.string.isRequired,
  tableData: PropTypes.object,
  tableExternalData: PropTypes.object,
  results: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  resultUpdateID: PropTypes.number.isRequired,
  sparqlQuery: PropTypes.string,
  properties: PropTypes.array.isRequired,
  tabs: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  routeProps: PropTypes.object.isRequired,
  screenSize: PropTypes.string.isRequired,
  fetchGeoJSONLayers: PropTypes.func.isRequired,
  fetchGeoJSONLayersBackend: PropTypes.func.isRequired,
  clearGeoJSONLayers: PropTypes.func.isRequired,
  leafletMap: PropTypes.object.isRequired,
  showError: PropTypes.func.isRequired
}

export const InstanceHomePageComponent = InstanceHomePage

export default withStyles(styles)(InstanceHomePage)
