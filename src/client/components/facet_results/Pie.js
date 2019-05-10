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
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 2,
  },
  legend: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 4,
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
    this.state = { selectedOption: 'party'};
    //this.handleClick = this.handleClick.bind(this);
  }

 combineSmallGroups = (dataArray) => {
   const totalLength = dataArray.length;
   const threshold = 0.1;
   let other = { x: 'Other', y: 0, values: [] };
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
     selectedOption: changeEvent.target.value
   });
 }

 render() {
   const { classes, data } = this.props;
   //console.log(data)
   let resultCount = 0;
   let facetValues = data.party.values
   if (this.state.selectedOption === 'party') {
     facetValues = data.party.values
   }
   if (this.state.selectedOption === 'occupation') {
     facetValues = data.occupation.values
   }
   if (this.state.selectedOption === 'livingMunicipality') {
     facetValues = data.livingMunicipality.values
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
   const legendHeigth = legendArray.length * 35;
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
                   <input type="radio" value="livingMunicipality"
                     checked={this.state.selectedOption === 'livingMunicipality'}
                     onChange={this.handleOptionChange} />
                     Asuinkunta
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
               title={'osapuoli'}
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
