import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { has } from 'lodash';
import DeckGL, { ArcLayer } from 'deck.gl';
import ReactMapGL, { NavigationControl, HTMLOverlay } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import InfoDialog from './InfoDialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import { purple } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MAPBOX_ACCESS_TOKEN } from '../../configs/config';

// https://deck.gl/#/documentation/getting-started/using-with-react?section=adding-a-base-map

// https://github.com/uber/deck.gl/blob/6.2-release/examples/website/arc/app.js

// http://deck.gl/#/documentation/deckgl-api-reference/layers/arc-layer

// https://blog.mapbox.com/mapbox-gl-js-react-764da6cc074a

const styles = theme => ({
  root: {
    height: 400,
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 72px)'
    }
  },
  tooltip: {
    position: 'absolute',
    padding: '4px',
    background: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    maxWidth: '300px',
    fontSize: '10px',
    zIndex: 9,
    pointerEvents: 'none'
  },
  spinner: {
    height: 40,
    width: 40,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)'
  },
  mapControls: {
    position: 'absolute',
    left: theme.spacing(1),
    top: theme.spacing(1)
  },
  legend: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  red: {
    color: 'rgba(255,0,0,255)'
  },
  blue: {
    color: 'rgba(0,0,255,255)'
  }
});

class Deck extends React.Component {
  state = {
    viewport: {
      longitude: 10.37,
      latitude: 22.43,
      zoom: 1,
      pitch: 0,
      bearing: 0,
      width: 100,
      height: 100
    },
    tooltip: null,
    dialog: {
      open: false,
      data: {}
    }
  }

  componentDidMount = () => {
    this.props.fetchResults({
      resultClass: this.props.resultClass,
      facetClass: this.props.facetClass,
      sortBy: null,
    });
  }

  componentDidUpdate = prevProps => {
    // check if filters have changed
    if (prevProps.facetUpdateID !== this.props.facetUpdateID) {
      this.props.fetchResults({
        resultClass: this.props.resultClass,
        facetClass: this.props.facetClass,
        sortBy: null,
      });
    }
  }

  parseCoordinates = coords => {
    // if (Array.isArray(coords)) { coords = coords[0]; }
    // const lat = Array.isArray(coords.lat) ? coords.lat[0] : coords.lat;
    // const long = Array.isArray(coords.long) ? coords.long[0] : coords.long;
    const arr = [ +coords.long, +coords.lat ];
    return arr;
  }

  // setTooltip(object) {
  //   this.setState({tooltip: object});
  // }

  setDialog(info) {
    this.setState({
      dialog: {
        open: true,
        data: info.object
      }
    });
  }

  closeDialog() {
    this.setState({
      dialog: {
        open: false,
        data: {}
      }
    });
  }

 _onViewportChange = viewport => this.setState({viewport});

 _renderSpinner() {
   if(this.props.fetching) {
     return (
       <div className={this.props.classes.spinner}>
         <CircularProgress style={{ color: purple[500] }} thickness={5} />
       </div>
     );
   }
   return null;
 }

 _renderLegend() {
   return (
     <Card className={this.props.classes.legend}>
       <CardContent>
         <Typography variant="h6" gutterBottom>Arc colouring:</Typography>
         <Typography className={this.props.classes.blue} variant="body2" gutterBottom>Manuscript production place</Typography>
         <br />
         <Typography variant="body2" gutterBottom>
           <span className={this.props.classes.red}>
            Most recently observed location
           </span><br />
           calculated as: <br />
          Most recent acquisition/observation <br />
          -&gt; Source agent <br />
          -&gt; Place
         </Typography>
       </CardContent>
     </Card>
   );
 }

  // getStrokeWidth = manuscriptCount => {
  //   //console.log(manuscriptCount)
  //   if (Array.isArray(manuscriptCount)) {
  //     manuscriptCount = manuscriptCount[0];
  //   }
  //   const min = 1;
  //   const max = 3333;
  //   const minAllowed = 1;
  //   const maxAllowed = 10;
  //   //console.log(this.scaleBetween(manuscriptCount, minAllowed, maxAllowed, min, max))
  //   return this.scaleBetween(parseInt(manuscriptCount), minAllowed, maxAllowed, min, max);
  // }
  //
  // // https://stackoverflow.com/a/31687097
  // scaleBetween = (unscaledNum, minAllowed, maxAllowed, min, max) => {
  //   return (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed;
  // }

 render() {
   // console.log(this.props.data)
   let arcData = [];
   if (has(this.props.results[0], 'to')) {
     arcData = this.props.results;
   }

   const layer = new ArcLayer({
     id: 'arc-layer',
     data: arcData,
     pickable: true,
     getWidth: 1.5,
     getSourceColor: [0, 0, 255, 255],
     getTargetColor: [255, 0, 0, 255],
     getSourcePosition: d => this.parseCoordinates(d.from),
     getTargetPosition: d => this.parseCoordinates(d.to),
     //onHover: info => this.setTooltip(info),
     onClick: info => this.setDialog(info),
   });
   // https://www.mapbox.com/mapbox-gl-js/api#map
   { /* style={{marginTop: 72}} */}
   return (
     <div className={this.props.classes.root}>
       <ReactMapGL
         {...this.state.viewport}
         width='100%'
         height='100%'
         onViewportChange={this._onViewportChange}
         mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
         mapOptions={{
           style: 'mapbox://styles/mapbox/light-v9'
         }}
       >
         <HTMLOverlay redraw={this._renderLegend.bind(this)} />
         <DeckGL
           viewState={this.state.viewport}
           layers={[layer]}
         />
         <div className={this.props.classes.mapControls}>
           <NavigationControl onViewportChange={this._onViewportChange} />
         </div>
         {this._renderSpinner()}
         <InfoDialog
           open={this.state.dialog.open}
           onClose={this.closeDialog.bind(this)}
           data={this.state.dialog.data}
         />
       </ReactMapGL>
     </div>
   );
 }
}

Deck.propTypes = {
  classes: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired,
  facetUpdateID: PropTypes.number,
  fetchResults: PropTypes.func,
  resultClass: PropTypes.string,
  facetClass: PropTypes.string,
  fetching: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Deck);
