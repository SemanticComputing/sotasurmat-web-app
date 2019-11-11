import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactMapGL from 'react-map-gl';
// import axios from 'axios';
import DeckGL, { ScatterplotLayer } from 'deck.gl';
import TemporalMapTimeSlider from './TemporalMapTimeSlider';
import * as config from '../../configs/mmm/TemporalMapConfig';
import './TemporalMapCommon.scss';
import { MAPBOX_ACCESS_TOKEN } from '../../configs/config';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

const styles = theme => ({
  root: {
    height: 400,
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 72px)'
    },
    position: 'relative'
  },
});

// based on https://github.com/AdriSolid/DECK.GL-Time-Slider
class TemporalMap extends Component {
  state = {
    basemap: config.basemap,
    viewState: config.VIEWSTATE,
    data: [],
    memory: [],
    dates: []
  };

  componentDidMount() {
    this.props.fetchResults({
      resultClass: this.props.resultClass,
      facetClass: this.props.facetClass,
    });
    // axios
    //   .get(config.DATA)
    //   .then(response => {
    //     const target = response.data.sort((a, b) => a[config.DATE_FIELD] - b[config.DATE_FIELD]);
    //     const date = target
    //       .map(item => item[config.DATE_FIELD])
    //       .filter((value, index, self) => self.indexOf(value) === index)
    //       .sort();
    //     this.setState({
    //       data: target,
    //       memory: target,
    //       uniques_date: date
    //     });
    //   })
    //   .catch(err => {
    //     throw err;
    //   });
  }

  componentDidUpdate = prevProps => {
    if (prevProps.results !== this.props.results) {
      const uniqueDates = this.props.results
        .map(d => d.startDate)
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort();
      //console.log(uniqueDates);
      const startDate = uniqueDates[0];
      const endDate = uniqueDates[uniqueDates.length - 1];
      const range = moment.range(startDate, endDate);
      let days = Array.from(range.by('day'));
      days = days.map(m => m.format('YYYY-MM-DD'));
      this.setState({
        data: this.props.results,
        memory: this.props.results,
        dates: days
      });
    }

    const { memory } = this.state;
    if (prevProps.animationValue !== this.props.animationValue) {
      const sliderValue = this.props.animationValue;
      const total = memory.length;
      const featuresPerInterval = total / sliderValue[1];
      const toShow = sliderValue[0] * featuresPerInterval;
      const newData = memory.filter((f, i) => i < toShow);
      this.setState({
        data: newData
      });
    }
  };

  _onViewStateChange = ({ viewState }) => {
    this.setState({ viewState });
  };

  _renderTooltip() {
    const {hoveredObject, pointerX, pointerY} = this.state || {};
    console.log(hoveredObject)
    return hoveredObject && (
      <div style={{position: 'absolute', zIndex: 1, pointerEvents: 'none', left: pointerX, top: pointerY}}>
        { hoveredObject.prefLabel }
      </div>
    );
  }

  _renderLayers() {
    const { data } = this.state;
    return [
      new ScatterplotLayer({
        id: 'time-layer',
        data,
        opacity: 0.8,
        stroked: true,
        filled: true,
        radiusScale: 15,
        radiusMinPixels: 10,
        radiusMaxPixels: 100,
        lineWidthMinPixels: 1,
        getPosition: d => [ +d.long, +d.lat ],
        onHover: info => {
          console.log(info)
          this.setState({
            hoveredObject: info.object,
            pointerX: info.x,
            pointerY: info.y
          });
        }
      })
    ];
  }

  render() {
    const { viewState, memory, dates } = this.state;
    const { controller = true, baseMap = true, classes, animateMap } = this.props;
    return (
      <div className={classes.root}>
        <DeckGL
          width={'100%'}
          height={'100%'}
          layers={this._renderLayers()}
          viewState={viewState}
          controller={controller}
          onViewStateChange={this._onViewStateChange}
        >
          {this._renderTooltip()}
          {baseMap &&
            <ReactMapGL
              reuseMaps
              mapStyle={config.basemap}
              preventStyleDiffing={true}
              doubleClickZoom={false}
              mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
            />
          }
        </DeckGL>

        <TemporalMapTimeSlider
          memory={memory}
          dates={dates}
          animateMap={animateMap}
        />
      </div>
    );
  }
}

TemporalMap.propTypes = {
  classes: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired,
  resultClass: PropTypes.string.isRequired,
  facetClass: PropTypes.string.isRequired,
  fetchResults: PropTypes.func.isRequired,
  animationValue: PropTypes.array.isRequired,
  controller: PropTypes.bool,
  baseMap: PropTypes.bool,
  animateMap: PropTypes.func.isRequired
};

export default withStyles(styles)(TemporalMap);
