import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import DatePicker from '@mui/lab/DatePicker'
import Box from '@mui/material/Box'
import moment from 'moment'
import intl from 'react-intl-universal'

/**
 * A component for a date facet with pickers using @material-ui/pickers and Moment.js.
 */
class DateFacet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      from: moment(this.props.facet.min),
      to: moment(this.props.facet.max),
      error: false
    }
  }

  handleFromChange = from => {
    this.setState({ from })
    const { to } = this.state
    if (this.isValidDate(from) &&
      this.isValidDate(to) &&
      from.isSameOrBefore(to)) {
      const values = [
        from.format('YYYY-MM-DD'),
        to.format('YYYY-MM-DD')
      ]
      this.updateFacet(values)
      this.setState({ error: false })
    } else {
      this.setState({ error: true })
    }
  }

  handleToChange = to => {
    this.setState({ to })
    const { from } = this.state
    if (this.isValidDate(from) &&
      this.isValidDate(to) &&
      from.isSameOrBefore(to)) {
      const values = [
        this.state.from.format('YYYY-MM-DD'),
        to.format('YYYY-MM-DD')
      ]
      this.updateFacet(values)
      this.setState({ error: false })
    } else {
      this.setState({ error: true })
    }
  }

  updateFacet = values => {
    this.props.updateFacetOption({
      facetClass: this.props.facetClass,
      facetID: this.props.facetID,
      option: this.props.facet.filterType,
      value: values
    })
  }

  isValidDate = date => {
    const momentMin = moment(this.props.facet.min)
    const momentMax = moment(this.props.facet.max)
    return date &&
      date.isValid() &&
      date.isSameOrAfter(momentMin) &&
      date.isSameOrBefore(momentMax)
  }

  render () {
    const { from, to, error } = this.state
    const { min, max } = this.props.facet
    const { someFacetIsFetching } = this.props
    return (
      <div>
        <DatePicker
          label={intl.get('facets.dateFacet.fromLabel')}
          renderInput={params =>
            <TextField
              error={error}
              helperText={error ? intl.get('facets.dateFacet.toBeforeFrom') : ' '}
              {...params}
            />}
          placeholder={moment(min).format('DD.MM.YYYY')}
          mask='__.__.____'
          value={from}
          onChange={date => this.handleFromChange(date)}
          inputFormat='DD.MM.YYYY'
          minDate={moment(min)}
          maxDate={moment(max)}
          invalidDateMessage={intl.get('facets.dateFacet.invalidDate')}
          // minDateMessage={intl.get('facets.dateFacet.minDate', { minDate: moment(min).format('DD.MM.YYYY') })}
          // maxDateMessage={intl.get('facets.dateFacet.maxDate', { maxDate: moment(max).format('DD.MM.YYYY') })}
          cancelText={intl.get('facets.dateFacet.cancel')}
          shouldDisableDate={date => date.isAfter(to)}
          disabled={someFacetIsFetching}
        />
        <Box
          sx={theme => ({
            marginTop: theme.spacing(2.5)
          })}
        >
          <DatePicker
            label={intl.get('facets.dateFacet.toLabel')}
            renderInput={params =>
              <TextField
                error={error}
                helperText={error ? intl.get('facets.dateFacet.toBeforeFrom') : ' '}
                {...params}
              />}
            placeholder={moment(max).format('DD.MM.YYYY')}
            mask='__.__.____'
            value={to}
            onChange={date => this.handleToChange(date)}
            inputFormat='DD.MM.YYYY'
            minDate={moment(min)}
            maxDate={moment(max)}
            invalidDateMessage={intl.get('facets.dateFacet.invalidDate')}
            // minDateMessage={intl.get('facets.dateFacet.minDate', { minDate: moment(min).format('DD.MM.YYYY') })}
            // maxDateMessage={intl.get('facets.dateFacet.maxDate', { maxDate: moment(max).format('DD.MM.YYYY') })}
            cancelText={intl.get('facets.dateFacet.cancel')}
            shouldDisableDate={date => date.isBefore(from)}
            disabled={someFacetIsFetching}
          />

        </Box>
      </div>
    )
  }
}

DateFacet.propTypes = {
  facetID: PropTypes.string.isRequired,
  facet: PropTypes.object.isRequired,
  facetClass: PropTypes.string,
  resultClass: PropTypes.string,
  fetchFacet: PropTypes.func,
  someFacetIsFetching: PropTypes.bool.isRequired,
  updateFacetOption: PropTypes.func.isRequired,
  facetUpdateID: PropTypes.number
}

export default DateFacet
