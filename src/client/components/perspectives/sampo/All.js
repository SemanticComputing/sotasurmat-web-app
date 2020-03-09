import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import MaterialTableFullTextResults from '../../facet_results/MaterialTableFullTextResults'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'

const All = props => {
  const perspectiveUrl = '/all'
  return (
    <>
      <PerspectiveTabs
        routeProps={props.routeProps}
        screenSize={props.screenSize}
        tabs={[{
          id: 'table',
          label: 'table',
          icon: <CalendarViewDayIcon />,
          value: 0
        }]}
      />
      <Route
        exact path={perspectiveUrl}
        render={() => <Redirect to={`${perspectiveUrl}/table`} />}
      />
      <Route
        path={`${perspectiveUrl}/table`}
        render={() => {
          return (
            <MaterialTableFullTextResults
              data={props.clientSideFacetedSearch.results}
              query={props.clientSideFacetedSearch.query}
              fetching={props.clientSideFacetedSearch.textResultsFetching}
            />
          )
        }}
      />
    </>
  )
}

All.propTypes = {
  clientSideFacetedSearch: PropTypes.object.isRequired,
  updatePage: PropTypes.func,
  sortResults: PropTypes.func,
  routeProps: PropTypes.object.isRequired,
  screenSize: PropTypes.string.isRequired
}

export default All
