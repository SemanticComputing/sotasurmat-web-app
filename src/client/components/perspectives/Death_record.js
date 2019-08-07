import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Link } from 'react-router-dom';
import Person from '../facet_results/Person';

let Death_record = props => {
  return (
    <React.Fragment>
      <Route
        path={`${props.rootUrl}/person/:id`}
        render={routeProps =>
          <Person
            data={props.data}
            routeProps={routeProps}
            fetchByURI={props.fetchByURI}
            id={routeProps.match.params.id}
          />
        }
      />
    </React.Fragment>
  );
};

Death_record.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired,
  updatePage: PropTypes.func.isRequired,
};

export default Death_record;
