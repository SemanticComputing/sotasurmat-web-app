import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
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

  componentDidMount = () => {
    const { routeProps } = this.props;
    this.props.fetchByURI('deaths', 'deaths', 'deaths', 'http://ldf.fi/siso/death_records/victim_' + routeProps.match.params.id,);
  }

  render() {
    //console.log(this.props);
    //const { data } = this.props;
    const instance = this.props.data.instance;
    //console.log(instance);
    if (instance.prefLabel != null) {
      return (
        <div>
          <h3>Nimi: {instance.prefLabel.prefLabel}</h3>

        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }

}

Person.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  routeProps: PropTypes.object.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  results: PropTypes.array,
};

export default withStyles(styles)(Person);
