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
import Typography from '@material-ui/core/Typography';
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
  }

  componentDidUpdate = prevProps => {
    if (prevProps.results !== this.props.results) {
      const uniqueDates = this.props.results
        .map(d => d.startDate)
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort();
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

    if (prevProps.animationValue !== this.props.animationValue) {
      const { memory, dates } = this.state;
      const sliderValue = this.props.animationValue[0];
      const maxDate = Date.parse(dates[sliderValue]);
      const newData = memory.filter(value => {
        return Date.parse(value.startDate) <= maxDate;
      });
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
    return hoveredObject && (
      <div style={{position: 'absolute', zIndex: 1, pointerEvents: 'none', left: pointerX + 10, top: pointerY + 10}}>
        <Typography>
          {hoveredObject.prefLabel}
        </Typography>
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
        radiusMinPixels: 8,
        radiusMaxPixels: 100,
        lineWidthMinPixels: 1,
        getPosition: d => [ +d.long, +d.lat ],
        pickable: true,
        onHover: info => this.setState({
          hoveredObject: info.object,
          pointerX: info.x,
          pointerY: info.y
        })
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
        {this._renderTooltip()}
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
