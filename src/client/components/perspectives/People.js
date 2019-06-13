import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import PerspectiveTabs from '../main_layout/PerspectiveTabs';
import ResultTable from '../facet_results/ResultTable';

let People = props => {
  return (
    <React.Fragment>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={{
          '/people/table': {
            label: 'table',
            value: 0,
            icon: 'CalendarViewDay',
          },
          // '/people/map': {
          //   label: 'map',
          //   value: 1,
          //   icon: 'AddLocation',
          // },
        }}
      />
      <Route
        exact path='/people'
        render={() => <Redirect to='people/table' />}
      />
      <Route
        path={'/people/table'}
        render={routeProps =>
          <ResultTable
            data={props.people}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='people'
            facetClass='people'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
          />
        }
      />
    </React.Fragment>
  );
};

People.propTypes = {
  people: PropTypes.object.isRequired,
  places: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchPaginatedResults: PropTypes.func.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired
};

export default People;
