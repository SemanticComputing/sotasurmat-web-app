import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';

class DateFacet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: moment(this.props.facet.min, 'YYYY-MM-DD'),
      to: moment(this.props.facet.max, 'YYYY-MM-DD  ')
    };
  }

  handleFromChange = from => this.setState({ from });

  handleToChange = to => this.setState({ to });

  render() {
    const { to, from } = this.state;
    const { min, max } = this.props.facet;
    return (
      <React.Fragment>
        <KeyboardDatePicker
          placeholder={min}
          value={from}
          onChange={date => this.handleFromChange(date)}
          format="DD.MM.YYYY"
          minDate={min}
          maxDate={max}
        />
        <KeyboardDatePicker
          placeholder={max}
          value={to}
          onChange={date => this.handleToChange(date)}
          format="DD.MM.YYYY"
          minDate={min}
          maxDate={max}
        />
      </React.Fragment>
    );

  }
}

DateFacet.propTypes = {
  facetID: PropTypes.string.isRequired,
  facet: PropTypes.object.isRequired,
  facetClass: PropTypes.string,
  resultClass: PropTypes.string,
  fetchFacet: PropTypes.func,
  someFacetIsFetching: PropTypes.bool.isRequired,
  updateFacetOption: PropTypes.func,
  facetUpdateID: PropTypes.number,
};

export default DateFacet;
