import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import error from './error';
import clientSideFacetedSearch from './mmm/clientSideFacetedSearch';
import surmatut from './surmatut';
import surmatutFacets from './surmatutFacets';
import taistelut from './taistelut';
import extras from './extras';
import taistelutFacets from './taistelutFacets';
import dates from './dates';
import places from './places';
import options from './options';
import animation from './mmm/animation';

const reducer = combineReducers({
  surmatut,
  surmatutFacets,
  taistelut,
  taistelutFacets,
  clientSideFacetedSearch,
  animation,
  options,
  error,
  dates,
  places,
  extras,
  toastr: toastrReducer,
  // browser: createResponsiveStateReducer({
  //   extraSmall: 500,
  //   small: 700,
  //   medium: 1000,
  //   large: 1400,
  //   extraLarge: 1600,
  // }),
});

export default reducer;
