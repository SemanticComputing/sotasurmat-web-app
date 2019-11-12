import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import error from './error';
import surmatut from './sotasurmat/surmatut';
import surmatutFacets from './sotasurmat/surmatutFacets';
import taistelut from './sotasurmat/taistelut';
import taistelutFacets from './sotasurmat/taistelutFacets';
import dates from './sotasurmat/dates';
import places from './sotasurmat/places';
import options from './options';
import animation from './animation';

const reducer = combineReducers({
  surmatut,
  surmatutFacets,
  taistelut,
  taistelutFacets,
  animation,
  options,
  error,
  dates,
  places,
  toastr: toastrReducer,
});

export default reducer;
