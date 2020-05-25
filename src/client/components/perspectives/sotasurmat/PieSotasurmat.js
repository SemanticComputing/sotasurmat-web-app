import React from 'react'
import PropTypes from 'prop-types'
import {
  VictoryPie,
  VictoryLegend,
  VictoryContainer
} from 'victory'
import PieTooltip from '../../facet_results/PieTooltip'
import _ from 'lodash'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import purple from '@material-ui/core/colors/purple'
import intl from 'react-intl-universal'

const styles = theme => ({
  root: {
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 72px)'
    },
    overflow: 'auto'
  },
  options: {
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(1)
  },
  container: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 168px)'
    },
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'calc(100% - 50px)',
    maxWidth: 900,
    alignItems: 'center'
  },
  pie: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2)
  },
  legend: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4)
  },
  legendPaper: {
    height: 275,
    overflowY: 'auto'
  },
  spinnerContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class PieSotasurmat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'party',
      label: intl.get('perspectives.victims.properties.party.label')
    }
  }

 combineSmallGroups = (dataArray) => {
   const other = { x: 'Muu arvo', y: 0, values: [] }
   const newArray = []
   let count = 0
   for (const item of dataArray) {
     if (count > 8) {
       other.y += item.y
       other.values.push(item.values)
     } else {
       newArray.push(item)
     }
     count += 1
   }
   if (other.y > 0) {
     newArray.push(other)
     return newArray
   } else {
     return dataArray
   }
 };

 handleOptionChange = (changeEvent) => {
   this.setState({
     selectedOption: changeEvent.target.value
   })
   this.setState({
     label: intl.get(`perspectives.victims.properties.${changeEvent.target.value}.label`)
   })
   this.updatePie(changeEvent.target.value)
 }

 componentDidMount = () => {
   this.props.fetchFacetConstrainSelf({
     facetClass: 'victims',
     facetID: this.state.selectedOption
   })
 }

 componentDidUpdate = prevProps => {
   if (prevProps.facetUpdateID !== this.props.facetUpdateID) {
     this.props.fetchFacetConstrainSelf({
       facetClass: 'victims',
       facetID: this.state.selectedOption
     })
   }
 }

 updatePie = value => {
   this.props.fetchFacetConstrainSelf({
     facetClass: 'victims',
     facetID: value
   })
 }

 render () {
   const { classes, data } = this.props
   let resultCount = 0
   let facetValues = null
   facetValues = data[this.state.selectedOption].values
   if (facetValues.length === 0) {
     return (
       <Paper square className={classes.spinnerContainer}>
         <CircularProgress style={{ color: purple[500] }} thickness={5} />
       </Paper>
     )
   }
   for (const key in facetValues) {
     resultCount = resultCount + parseInt(facetValues[key].instanceCount, 10)
   }
   const grouped = _.groupBy(facetValues, 'prefLabel')
   let dataArray = []
   for (const key in grouped) {
     const count = grouped[key][0].instanceCount
     dataArray.push({
       x: key,
       y: parseInt(count, 10)
     })
   }
   dataArray = _.orderBy(dataArray, 'y', 'desc')
   dataArray = this.combineSmallGroups(dataArray)
   const legendArray = dataArray.map(group => ({ name: group.x + ' (' + group.y + ')' }))
   const legendHeigth = legendArray.length * 35 + 15

   return (
     <Paper square className={classes.root}>
       <div className={classes.options}>
         <form>
           <div className='radio'>
             <label>
               <input
                 type='radio' value='party'
                 checked={this.state.selectedOption === 'party'}
                 onChange={this.handleOptionChange}
               />
               {intl.get('perspectives.victims.properties.party.label')}
             </label>
           </div>
           <div className='radio'>
             <label>
               <input
                 type='radio' value='occupation'
                 checked={this.state.selectedOption === 'occupation'}
                 onChange={this.handleOptionChange}
               />
               {intl.get('perspectives.victims.properties.occupation.label')}
             </label>
           </div>
           <div className='radio'>
             <label>
               <input
                 type='radio' value='gender'
                 checked={this.state.selectedOption === 'gender'}
                 onChange={this.handleOptionChange}
               />
               {intl.get('perspectives.victims.properties.gender.label')}
             </label>
           </div>
           <div className='radio'>
             <label>
               <input
                 type='radio' value='registeredProvince'
                 checked={this.state.selectedOption === 'registeredProvince'}
                 onChange={this.handleOptionChange}
               />
               {intl.get('perspectives.victims.properties.registeredProvince.label')}
             </label>
           </div>
           <div className='radio'>
             <label>
               <input
                 type='radio' value='registeredMunicipality'
                 checked={this.state.selectedOption === 'registeredMunicipality'}
                 onChange={this.handleOptionChange}
               />
               {intl.get('perspectives.victims.properties.registeredMunicipality.label')}
             </label>
           </div>
           <div className='radio'>
             <label>
               <input
                 type='radio' value='deathProvince'
                 checked={this.state.selectedOption === 'deathProvince'}
                 onChange={this.handleOptionChange}
               />
               {intl.get('perspectives.victims.properties.deathProvince.label')}
             </label>
           </div>
           <div className='radio'>
             <label>
               <input
                 type='radio' value='deathMunicipality'
                 checked={this.state.selectedOption === 'deathMunicipality'}
                 onChange={this.handleOptionChange}
               />
               {intl.get('perspectives.victims.properties.deathMunicipality.label')}
             </label>
           </div>
           <div className='radio'>
             <label>
               <input
                 type='radio' value='causeOfDeath'
                 checked={this.state.selectedOption === 'causeOfDeath'}
                 onChange={this.handleOptionChange}
               />
               {intl.get('perspectives.victims.properties.causeOfDeath.label')}
             </label>
           </div>
           <div className='radio'>
             <label>
               <input
                 type='radio' value='maritalStatus'
                 checked={this.state.selectedOption === 'maritalStatus'}
                 onChange={this.handleOptionChange}
               />
               {intl.get('perspectives.victims.properties.maritalStatus.label')}
             </label>
           </div>
         </form>
       </div>
       <Grid container className={classes.container}>
         <Grid className={classes.pie} item xs={12} sm={6}>
           <VictoryPie
             padding={{
               left: 0, bottom: 0, top: 32
             }}
             colorScale='qualitative'
             data={dataArray}
             orientation='bottom'
             labelComponent={<PieTooltip resultCount={resultCount} />}
           />
         </Grid>
         <Grid className={classes.legend} item xs={12} sm={6}>
           <Paper className={classes.legendPaper}>
             <VictoryLegend
               height={legendHeigth}
               title={this.state.label}
               colorScale='qualitative'
               data={legendArray}
               style={{
                 labels: { fontFamily: 'Roboto, Helvetica, Arial, sans-serif' },
                 title: { fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }
               }}
               containerComponent={
                 <VictoryContainer
                   responsive={false}
                   width={275}
                 />
               }
             />
           </Paper>
         </Grid>
       </Grid>
     </Paper>
   )
 }
}

PieSotasurmat.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  fetchFacetConstrainSelf: PropTypes.func.isRequired,
  facetUpdateID: PropTypes.number
}

export default withStyles(styles)(PieSotasurmat)
