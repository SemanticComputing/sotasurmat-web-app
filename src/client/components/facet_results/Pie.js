import React from 'react';
import PropTypes from 'prop-types';
import {
  VictoryPie,
  VictoryLegend,
  VictoryContainer,
  //VictoryLabel,
} from 'victory';
import PieTooltip from './PieTooltip';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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

class Pie extends React.Component {


  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      selectedOption: 'party',
      label: 'Osapuoli'
    };
    //this.handleClick = this.handleClick.bind(this);
  }

 combineSmallGroups = (dataArray) => {
   const totalLength = dataArray.length;
   const threshold = 0.1;
   let other = { x: 'Muu arvo', y: 0, values: [] };
   let newArray = [];
   for (let item of dataArray) {
     const portion = item.y / totalLength;
     if (portion < threshold) {
       other.y += item.y;
       other.values.push(item.values);
     } else {
       newArray.push(item);
     }
   }
   if (other.y > 0) {
     newArray.push(other);
     return newArray;
   } else {
     return dataArray;
   }
 };

 handleOptionChange = (changeEvent) => {
   this.setState({
     selectedOption: changeEvent.target.value,
   });
   if (changeEvent.target.value === 'party') {
     this.setState({
       label: 'Osapuoli',
     });
   }
   if (changeEvent.target.value === 'occupation') {
     this.setState({
       label: 'Ammatti',
     });
   }
   if (changeEvent.target.value === 'gender') {
     this.setState({
       label: 'Sukupuoli',
     });
   }
   if (changeEvent.target.value === 'registeredProvince') {
     this.setState({
       label: 'Kirjoillaololääni',
     });
   }
   if (changeEvent.target.value === 'registeredMunicipality') {
     this.setState({
       label: 'Kirjoillaolokunta',
     });
   }
   if (changeEvent.target.value === 'deathProvince') {
     this.setState({
       label: 'Kuolinlääni',
     });
   }
   if (changeEvent.target.value === 'deathMunicipality') {
     this.setState({
       label: 'Kuolinkunta',
     });
   }
   if (changeEvent.target.value === 'causeOfDeath') {
     this.setState({
       label: 'Kuolinsyy',
     });
   }
   this.updatePie(changeEvent.target.value);
 }

 componentDidMount = () => {
   this.props.fetchFacet({
     facetClass: 'surmatut',
     facetID: this.state.selectedOption
   });
 }

 updatePie = value => {
   this.props.fetchFacet({
     facetClass: 'surmatut',
     facetID: value
   });
 }

 render() {
   const { classes, data } = this.props;
   let resultCount = 0;
   let facetValues = null;
   facetValues = data[this.state.selectedOption].values;
   // if (this.state.selectedOption === 'party') {
   //   facetValues = data.party.values;
   // }
   // if (this.state.selectedOption === 'occupation') {
   //   facetValues = data.occupation.values;
   // }
   // if (this.state.selectedOption === 'gender') {
   //   facetValues = data.gender.values;
   // }
   // if (this.state.selectedOption === 'registeredProvince') {
   //   facetValues = data.registeredProvince.values;
   // }
   // if (this.state.selectedOption === 'registeredMunicipality') {
   //   facetValues = data.registeredMunicipality.values;
   // }
   // if (this.state.selectedOption === 'deathProvince') {
   //   facetValues = data.deathProvince.values;
   // }
   // if (this.state.selectedOption === 'deathMunicipality') {
   //   facetValues = data.deathMunicipality.values;
   // }
   // if (this.state.selectedOption === 'causeOfDeath') {
   //   facetValues = data.causeOfDeath.values;
   // }
   // if (this.state.selectedOption === 'registeredPlace') {
   //   facetValues = data.registeredPlace.flatValues;
   // }
   //console.log(facetValues)
   if (facetValues.length == 0) {
     return (
       <div><p>Ei tuloksia</p></div>
     );
   }
   for (let key in facetValues) {
     resultCount = resultCount + parseInt(facetValues[key].instanceCount, 10);
   }
   //const resultCount = data.party.values;
   //console.log(data.party.values)
   //if (resultCount < 10) {
   //  return <ResultInfo message="Need over 10 results to create a distribution." />;
   //}
   const grouped = _.groupBy(facetValues, 'prefLabel');
   let dataArray = [];
   for (let key in grouped) {
     //console.log(grouped[key][0])
     const count = grouped[key][0].instanceCount;
     dataArray.push({
       x: key,
       y: parseInt(count, 10),
       //values: grouped[key]
     });
   }
   dataArray = _.orderBy(dataArray, 'y', 'desc');
   //  console.log(dataArray)
   dataArray = this.combineSmallGroups(dataArray);
   const legendArray = dataArray.map(group => ({ name: group.x.toLowerCase() + ' (' + group.y + ')' }));
   //console.log(dataArray)
   const legendHeigth = legendArray.length * 35 + 10;
   // const pieTitle = resultCount + ' results for the query "' + query + '"';
   // <VictoryLabel
   //   style={{
   //     fontSize: '14px',
   //     fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
   //   }}
   //   text={pieTitle}
   // />

   return (
     <div className={classes.root}>
       <div className="container">
         <div className="row">
           <div className="col-sm-12">
             <form>
               <div className="radio">
                 <label>
                   <input type="radio" value="party"
                     checked={this.state.selectedOption === 'party'}
                     onChange={this.handleOptionChange} />
                     Osapuoli
                 </label>
               </div>
               <div className="radio">
                 <label>
                   <input type="radio" value="occupation"
                     checked={this.state.selectedOption === 'occupation'}
                     onChange={this.handleOptionChange} />
                     Ammatti
                 </label>
               </div>
               <div className="radio">
                 <label>
                   <input type="radio" value="gender"
                     checked={this.state.selectedOption === 'gender'}
                     onChange={this.handleOptionChange} />
                     Sukupuoli
                 </label>
               </div>
               <div className="radio">
                 <label>
                   <input type="radio" value="registeredProvince"
                     checked={this.state.selectedOption === 'registeredProvince'}
                     onChange={this.handleOptionChange} />
                     Kirjoillaololääni
                 </label>
               </div>
               <div className="radio">
                 <label>
                   <input type="radio" value="registeredMunicipality"
                     checked={this.state.selectedOption === 'registeredMunicipality'}
                     onChange={this.handleOptionChange} />
                     Kirjoillaolokunta
                 </label>
               </div>
               <div className="radio">
                 <label>
                   <input type="radio" value="deathProvince"
                     checked={this.state.selectedOption === 'deathProvince'}
                     onChange={this.handleOptionChange} />
                     Kuolinlääni
                 </label>
               </div>
               <div className="radio">
                 <label>
                   <input type="radio" value="deathMunicipality"
                     checked={this.state.selectedOption === 'deathMunicipality'}
                     onChange={this.handleOptionChange} />
                     Kuolinkunta
                 </label>
               </div>
               <div className="radio">
                 <label>
                   <input type="radio" value="causeOfDeath"
                     checked={this.state.selectedOption === 'causeOfDeath'}
                     onChange={this.handleOptionChange} />
                     Kuolinsyy
                 </label>
               </div>
             </form>

           </div>
         </div>
       </div>
       <Grid container className={classes.container}>
         <Grid className={classes.pie} item xs={12} sm={6}>
           <VictoryPie
             padding={{
               left: 0, bottom: 0, top: 32
             }}
             colorScale={'qualitative'}
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
               colorScale={'qualitative'}
               data={legendArray}
               style={{
                 labels: { fontFamily: 'Roboto, Helvetica, Arial, sans-serif' },
                 title: { fontFamily: 'Roboto, Helvetica, Arial, sans-serif' },
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
     </div>
   );
 }
}

Pie.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  //fetchPlaces: PropTypes.func.isRequired
  fetchFacet: PropTypes.func.isRequired,
};

export default withStyles(styles)(Pie);
