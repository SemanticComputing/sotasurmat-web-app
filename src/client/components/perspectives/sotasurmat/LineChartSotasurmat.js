import React from 'react'
import PropTypes from 'prop-types'
import Chart from 'react-google-charts'
import moment from 'moment'
import Paper from '@mui/material/Paper'
import { withStyles } from '@mui/styles'
import intl from 'react-intl-universal'
import CircularProgress from '@mui/material/CircularProgress'

const styles = theme => ({
  root: {
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 72px)'
    },
    overflow: 'auto'
  },
  spinnerContainerStyle: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionsContainer: {
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(1)
  }
})

class LineChartSotasurmat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'age',
      label: intl.get('perspectives.victims.lineChart.age'),
      variant: 'ageCount'
    }
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    })
    let variant = 'birthYearCount'
    if (changeEvent.target.value === 'birthYear') {
      this.setState({
        label: intl.get('perspectives.victims.lineChart.birthYear'),
        variant: 'birthYearCount'
      })
      variant = 'birthYearCount'
    }
    if (changeEvent.target.value === 'deathDate') {
      this.setState({
        label: intl.get('perspectives.victims.lineChart.deathDate'),
        variant: 'deathDateCount'
      })
      variant = 'deathDateCount'
    }
    if (changeEvent.target.value === 'age') {
      this.setState({
        label: intl.get('perspectives.victims.lineChart.ager'),
        variant: 'ageCount'
      })
      variant = 'ageCount'
    }
    this.props.fetchResults({
      resultClass: variant,
      facetClass: 'victims',
      sortBy: null
    })
  }

  componentDidMount = () => {
    this.props.fetchResults({
      resultClass: this.state.variant,
      facetClass: 'victims',
      sortBy: null
    })
  }

  componentDidUpdate = prevProps => {
    // check if filters have changed
    if (prevProps.facetUpdateID !== this.props.facetUpdateID) {
      this.props.fetchResults({
        resultClass: this.state.variant,
        facetClass: 'victims',
        sortBy: null
      })
    }
  }

  makeDateArray = (dataArray, firstTitle, secondTitle, fillEmptyValues) => {
    const newArray = []
    const titleRow = []
    titleRow.push(firstTitle)
    titleRow.push(secondTitle)
    newArray.push(titleRow)
    const momentArray = []
    let nextMoment

    for (const item of dataArray) {
      const subArray = []
      // check if values actually dates
      if (item.counted < 6) {
        const emptyArray = []
        return emptyArray
      }
      subArray.push(moment(item.counted))
      subArray.push(parseInt(item.count))
      momentArray.push(subArray)
    }
    for (const item of momentArray) {
      const thisMoment = item[0]
      if (nextMoment === undefined) {
        const subArray = []
        nextMoment = moment(thisMoment.format('YYYY-MM-DD')).add(1, 'days')
        subArray.push(thisMoment.format('YYYY-MM-DD'))
        subArray.push(item[1])
        newArray.push(subArray)
      } else {
        while (thisMoment.isAfter(nextMoment)) {
          const subArray = []
          subArray.push(nextMoment.format('YYYY-MM-DD'))
          subArray.push(0)
          newArray.push(subArray)
          nextMoment = moment(nextMoment.format('YYYY-MM-DD')).add(1, 'days')
        }
        const subArray = []
        subArray.push(thisMoment.format('YYYY-MM-DD'))
        subArray.push(item[1])
        newArray.push(subArray)
        nextMoment = moment(nextMoment.format('YYYY-MM-DD')).add(1, 'days')
      }
    }
    return newArray
  }

  makeArray = (dataArray, firstTitle, secondTitle, fillEmptyValues) => {
    const newArray = []
    const titleRow = []
    let nextItem = -1
    titleRow.push(firstTitle)
    titleRow.push(secondTitle)
    newArray.push(titleRow)

    if (!fillEmptyValues) {
      for (const item of dataArray) {
        const subArray = []
        subArray.push(item.counted)
        subArray.push(parseInt(item.count))
        newArray.push(subArray)
        nextItem++
      }
    } else {
      for (const item of dataArray) {
        const thisItem = parseInt(item.counted)
        if (nextItem === -1) {
          const subArray = []
          nextItem = thisItem + 1
          subArray.push(item.counted)
          subArray.push(parseInt(item.count))
          newArray.push(subArray)
        } else {
          while (thisItem > nextItem) {
            const subArray = []
            subArray.push(nextItem.toString())
            subArray.push(0)
            newArray.push(subArray)
            nextItem++
          }
          const subArray = []
          subArray.push(item.counted)
          subArray.push(parseInt(item.count))
          newArray.push(subArray)
          nextItem++
        }
      }
    }
    return newArray
  }

  average = dataArray => {
    let weightedSum = 0
    let sum = 0
    for (const item of dataArray) {
      if (!isNaN(item[1])) {
        weightedSum = weightedSum + (parseInt(item[0]) * parseInt(item[1]))
      }
    }
    for (const item of dataArray) {
      if (!isNaN(item[1])) {
        sum = sum + (parseInt(item[1]))
      }
    }
    if (dataArray.length > 0) {
      return weightedSum / sum
    } else if (this.lenght(dataArray) === 1) {
      return weightedSum
    } else {
      return NaN
    }
  }

  sum = dataArray => {
    let fullSum = 0
    for (const item of dataArray) {
      if (!isNaN(item[1])) {
        fullSum = fullSum + (parseInt(item[1]))
      }
    }
    return fullSum
  }

  median = dataArray => {
    const fullSum = this.sum(dataArray)
    let helpSum = 0
    let help = -1
    const remainder = dataArray.length % 2
    if (fullSum > 0) {
      for (const row of dataArray) {
        if (!isNaN(row[1])) {
          helpSum = helpSum + (parseInt(row[1]))
          if (helpSum >= fullSum / 2) {
            if (remainder !== 0) {
              return parseInt(row[0])
            } else {
              if (help === -1) {
                help = parseInt(row[0])
              } else {
                return (help + parseInt(row[0])) / 2
              }
            }
          }
        }
      }
    } else {
      return NaN
    }
  }

  dateDiff = (date1, date2) => {
    return Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) / (1000 * 60 * 60 * 24))
  }

  render () {
    let title = ''
    let explanation = ''
    let xTitle = ''
    let yTitle = ''
    let fillEmpty = false
    let infoString = ''

    const { classes, fetching, data } = this.props
    const { results } = data
    if (fetching || results == null) {
      return (
        <div className={classes.spinnerContainerStyle}>
          <CircularProgress />
        </div>
      )
    }
    if (this.state.variant === 'birthYearCount') {
      title = intl.get('perspectives.victims.lineChart.year')
      explanation = intl.get('perspectives.victims.lineChart.lineExplanation')
      xTitle = intl.get('perspectives.victims.lineChart.birthYear')
      yTitle = intl.get('perspectives.victims.lineChart.yTitle')
      fillEmpty = true
    }
    if (this.state.variant === 'ageCount') {
      title = intl.get('perspectives.victims.lineChart.age')
      explanation = intl.get('perspectives.victims.lineChart.lineExplanation')
      xTitle = intl.get('perspectives.victims.lineChart.age')
      yTitle = intl.get('perspectives.victims.lineChart.yTitle')
      fillEmpty = true
    }
    if (this.state.variant === 'deathDateCount') {
      title = intl.get('perspectives.victims.lineChart.deathDate')
      explanation = intl.get('perspectives.victims.lineChart.lineExplanation')
      xTitle = intl.get('perspectives.victims.lineChart.deathDate')
      yTitle = intl.get('perspectives.victims.lineChart.yTitle')
      fillEmpty = true
    }
    let resultsArray = []
    if (this.state.variant !== 'deathDateCount') {
      resultsArray = this.makeArray(results, title, explanation, fillEmpty)
    } else {
      resultsArray = this.makeDateArray(results, title, explanation, fillEmpty)
    }

    if (this.state.variant !== 'deathDateCount') {
      infoString = '(' + intl.get('perspectives.victims.lineChart.average') +
      ' ' + Math.round(this.average(resultsArray)) + ', ' +
      intl.get('perspectives.victims.lineChart.median') +
      ' ' + Math.round(this.median(resultsArray)) + ')'
    }
    if (this.state.variant === 'deathDateCount') {
      infoString = ''
    }
    return (
      <Paper square className={classes.root}>
        <div className={classes.optionsContainer}>
          <form>
            <div>
              <label>
                <input
                  type='radio' value='age'
                  checked={this.state.selectedOption === 'age'}
                  onChange={this.handleOptionChange}
                />
                {intl.get('perspectives.victims.lineChart.age')}
              </label>
            </div>
            <div>
              <label>
                <input
                  type='radio' value='birthYear'
                  checked={this.state.selectedOption === 'birthYear'}
                  onChange={this.handleOptionChange}
                />
                {intl.get('perspectives.victims.lineChart.birthYear')}
              </label>
            </div>
            <div>
              <label>
                <input
                  type='radio' value='deathDate'
                  checked={this.state.selectedOption === 'deathDate'}
                  onChange={this.handleOptionChange}
                />
                {intl.get('perspectives.victims.lineChart.deathDate')}
              </label>
            </div>
          </form>
        </div>
        <Chart
          chartType='LineChart'
          loader={<div>Loading Chart</div>}
          data={resultsArray}
          height={450}
          options={{
            hAxis: {
              title: xTitle + '  ' + infoString
            },
            vAxis: {
              title: yTitle
            }
          }}
        />
      </Paper>
    )
  }
}

LineChartSotasurmat.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object,
  fetchResults: PropTypes.func.isRequired,
  facetUpdateID: PropTypes.number
}

export default withStyles(styles)(LineChartSotasurmat)
