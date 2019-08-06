
// Basewd on the example from https://react-day-picker.js.org/examples/input-from-to

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'moment/locale/fi';
import MomentLocaleUtils from 'react-day-picker/moment';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
  textSearch: {
    margin: theme.spacing(1),
  },
});

class DateRangeSelector extends React.Component {

  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: new Date(this.props.facet.min),
      to: new Date(this.props.facet.max),
      locale: 'fi',
    };
  }

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
    this.updateValues(to);
    //console.log(moment(this.state.from).format('YYYY[-]MM[-]DD'))
    //console.log(moment(to).format('YYYY[-]MM[-]DD'))
  }

  updateValues(to) {
    if (to == undefined || !moment(to).isValid()) {
      return;
    }
    let values = [];
    values[0] = moment(this.state.from).format('YYYY[-]MM[-]DD');
    values[1] = moment(to).format('YYYY[-]MM[-]DD');
    this.props.updateFacetOption({
      facetClass: this.props.facetClass,
      facetID: this.props.facetID,
      option: this.props.facet.filterType,
      value: values
    });
    //console.log(values)
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const { classes, someFacetIsFetching } = this.props;
    const { isFetching, min, max } = this.props.facet;
    if (isFetching || someFacetIsFetching) {
      return(
        <div className={classes.spinnerContainer}>
          <CircularProgress style={{ color: purple[500] }} thickness={5} />
        </div>
      );
    }
    return (
      <div className="InputFromTo">
        <DayPickerInput
          value={from}
          placeholder={min}
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            numberOfMonths: 1,
            onDayClick: () => this.to.getInput().focus(),
            initialMonth: new Date(1800, 0),
            localeUtils: MomentLocaleUtils,
            locale: 'fi'
          }}
          onDayChange={this.handleFromChange}
        />{' '}
        —{' '}
        <span className="InputFromTo-to">
          <DayPickerInput
            formatDate={formatDate}
            parseDate={parseDate}
            ref={el => (this.to = el)}
            value={to}
            placeholder={max}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 1,
              initialMonth: new Date(1922, 11),
              localeUtils: MomentLocaleUtils,
              locale: 'fi',
            }}
            onDayChange={this.handleToChange}
          />
        </span>
      </div>
    );
  }
}

DateRangeSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  facetID: PropTypes.string.isRequired,
  facet: PropTypes.object.isRequired,
  facetClass: PropTypes.string,
  resultClass: PropTypes.string,
  fetchFacet: PropTypes.func,
  someFacetIsFetching: PropTypes.bool.isRequired,
  updateFacetOption: PropTypes.func,
  facetUpdateID: PropTypes.number,
};

export default withStyles(styles)(DateRangeSelector);
