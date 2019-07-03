import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexGrow: 1,
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'calc(100% - 50px)',
    maxWidth: 900,
    height: '100%',
    alignItems: 'center',
  },
  pie: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2),
  },
  legend: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4),
  },
  legendPaper: {
    height: 275,
    overflowY: 'auto',
  }
});

class Person extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li>
          <Link to="/sotasurmat/surmatut">Public Page</Link>
        </li>

        <p>test</p>
        {/*<h3>ID: {match.params.id}</h3>*/}
      </div>
    );
  }

}

export default withStyles(styles)(Person);
